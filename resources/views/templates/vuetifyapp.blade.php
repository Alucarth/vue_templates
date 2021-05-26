<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('MIX_SERVER_MODE', 'XD') }} </title>


    <link rel="stylesheet" href="{!! asset(config('app.name', 'XD').'/css/loader.css') !!}" />
    <link rel="stylesheet" href="{!! asset(config('app.name', 'XD').'/css/app.css') !!}" />

    <script src="{{ asset(config('app.name', 'XD').'/js/app.js') }}" defer></script>
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
    {{-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> --}}

</head>
<body>
    {{-- {{json_encode(config('app'))}} --}}
    <div id="app"  >
        <app></app>
    </div>
</body>
<script>
    // console.log("{{ env('APP_NAME') }}");
</script>
</html>
