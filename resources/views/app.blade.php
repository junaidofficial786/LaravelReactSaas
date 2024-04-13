<!DOCTYPE html>
<html 
    lang="{{ str_replace('_', '-', app()->getLocale()) }}" 
    {{-- class="dark" --}}
>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
    <style>
        /* Scrollbar styling for WebKit browsers */
        ::-webkit-scrollbar {
            width: 10px;
            /* Width of the scrollbar */
        }

        ::-webkit-scrollbar-track {
            background: #fff;
            /* Background color of the track */
        }

        ::-webkit-scrollbar-thumb {
            background: #F10904;
            /* Color of the thumb */
            border-radius: 5px;
            /* Roundness of the thumb */
        }

        /* Scrollbar styling for Firefox */
        scrollbar-color: #F10904 #fff;
        /* Color of the thumb and track in Firefox */

        /* Set text color of the entire page */
        body {
            color: #F10904;
            /* Text color */
        }

        /* Set background color of selected text */
        ::selection {
            background-color: #F10904;
            /* Background color of selected text */
            color: #fff;
            /* Text color of selected text */
        }
    </style>
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
