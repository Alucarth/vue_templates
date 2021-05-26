<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app

        permanent
        :mini-variant.sync="mini"


    >
    <v-list>
        <v-list-item class="px-2">
        <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
        <v-list-item-content>
            <v-list-item-title class="title">
            Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
    </v-list>

    <v-divider></v-divider>


    <v-divider></v-divider>

    <v-list
    dense
    nav
    >
    <v-list-item
        v-for="item in items"
        :key="item.title"
        link
    >
        <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    </v-list>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer, mini = !mini"></v-app-bar-nav-icon>

      <v-toolbar-title>Sistema </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
        <v-container>
            <v-stepper v-model="e1">
        <v-stepper-header>
        <v-stepper-step
            :complete="e1 > 1"
            step="1"
        >
            Paso 1
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            :complete="e1 > 2"
            step="2"
        >
            paso 2
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
            paso 3
        </v-stepper-step>
        </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">

                    <v-container>
                        <v-row>
                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                                v-model="firstname"
                                :counter="10"
                                label="Nombres"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                                v-model="lastname"

                                :counter="10"
                                label="Apellidos"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                                v-model="email"
                                label="E-mail"
                                required
                            ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>



                    <v-btn
                    color="primary"
                    @click="e1 = 2"
                    >
                    Continue
                    </v-btn>

                    <v-btn text>
                    Cancel
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">

                    <v-container>
                        <v-row>
                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                v-model="date"
                                label="Fecha de Nacimiento "
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="date"
                                :active-picker.sync="activePicker"
                                :max="new Date().toISOString().substr(0, 10)"
                                min="1950-01-01"
                                @change="save"
                            ></v-date-picker>
                            </v-menu>
                            </v-col>
                            <v-col cols="12" md="4">

                                <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="auto"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="computedDateFormatted"
                                    label="Fecha de Ingreso"
                                    hint="MM/DD/YYYY format"
                                    persistent-hint
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="date2"
                                    no-title
                                    @input="menu2 = false"
                                ></v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                    </v-container>


                    <v-btn
                    color="primary"
                    @click="e1 = 3"
                    >
                    Continue
                    </v-btn>

                    <v-btn text>
                    Cancel
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                    ></v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 1"
                    >
                    Continue
                    </v-btn>

                    <v-btn text>
                    Cancel
                    </v-btn>
                </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null,
                items: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                    { title: 'Photos', icon: 'mdi-image' },
                    { title: 'About', icon: 'mdi-help-box' },
                    ],
                    right: null,
                    mini: true,
                    e1: 1,
                    firstname:'',
                    lastname:'',
                    email:'',
                    activePicker: null,
                    date: null,
                    date2: new Date().toISOString().substr(0, 10),
                    menu: false,
                    menu2:false,

         }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
      date2 (val) {
        this.dateFormatted = this.formatDate(this.date2)
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date2)
      },
    },
  }
</script>
