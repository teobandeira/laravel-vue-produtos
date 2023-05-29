<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel APP</title>
    <link href="{{ asset('css/bootstrap.5.1.3.min.css') }}" rel="stylesheet" crossorigin="anonymous">
</head>
<body>
    <div id="app-vue">
        @yield('conteudo')
    </div>
    @vite('resources/js/app.js')
</body>
<script src="{{ asset('js/bootstrap.bundle.min.js') }}" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>