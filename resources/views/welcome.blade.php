<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <!-- <ol>
        <?php 
        // @foreach($book as $book)
        //     echo "<li>"{{substr($book->book_title,0,10)}}"...</li>";

        // ?> 
    </ol> -->
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Welcome to Book Worm</title>
    </head>
    <body class="antialiased">
        <div id="root"></div>
        <script src="{{mix('/js/app.js')}}"></script>
    </body>
</html>
