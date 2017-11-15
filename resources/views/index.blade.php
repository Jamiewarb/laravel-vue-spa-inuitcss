<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{{ config('app.name') }}</title>

  <link rel="stylesheet" href="{{ mix('css/main.css') }}">
</head>
<body>
  <div id="app"></div>

  @include('scripts')
</body>
</html>
