<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        dark
        permanent
        :mini-variant.sync="mini"
         src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"

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
      <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Name of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Name of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Name of step 3
      </v-stepper-step>
    </v-stepper-header>

        <v-stepper-items>
            <v-stepper-content step="1">
                <v-card
                class="mb-12"

                height="200px"
                >
                <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        md="4"
                        >
                        <v-text-field
                            v-model="firstname"
                            :rules="nameRules"
                            :counter="10"
                            label="First name"
                            required
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        md="4"
                        >
                        <v-text-field
                            v-model="lastname"
                            :rules="nameRules"
                            :counter="10"
                            label="Last name"
                            required
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        md="4"
                        >
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    </v-container>

                </v-card>

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
                <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
                ></v-card>

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
                    email:''
         }),
  }
</script>
