<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8"/>
    <link rel="icon" href="{{asset('smart/favicon.ico')}}"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Laravel</title>
    <link href="{{asset(mix('css/app.css'))}}" rel="stylesheet" type="text/css"/>
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>

<script src="{{asset(mix('js/manifest.js'))}}" type="text/javascript"></script>
<script src="{{asset(mix('js/vendor.js'))}}" type="text/javascript"></script>
<script src="{{asset(mix('js/app.js'))}}" type="text/javascript"></script>
@if(config('app.env') == 'local')
    <script src="http://localhost:35729/livereload.js" type="text/javascript"></script>
@endif
</body>
</html>
