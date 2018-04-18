<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    </head>
    <body>
        <div id="app">
            {{--<ul>--}}
                {{--<li v-for="skill in skills" v-text="skill"></li>--}}
            {{--</ul>--}}

            <div class="form-group">
                <div class="form-control">
                    {{--<input type="text" v-model="coupon">--}}
                    {{--<input type="text" :value="coupon" @input="coupon = $event.target.value">--}}
                    <coupon v-model="coupon">
                </div>
            </div>
        </div>

       {{--<div id="one">--}}
           {{--<h1>@{{ user.name }}</h1>--}}
       {{--</div>--}}

       {{--<div id="two">--}}
           {{--<h1>@{{ user.name }}</h1>--}}
       {{--</div>--}}

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
        <script src="/js/app.js"></script>
    </body>
</html>
