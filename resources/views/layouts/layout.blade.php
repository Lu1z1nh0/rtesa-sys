<!DOCTYPE html>
<html lang="es-Es" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- ===============================================-->
    <!--    Document Title-->
    <!-- ===============================================-->
    <title>Representaciones Thompson - El Salvador</title>


    <!-- ===============================================-->
    <!--    Favicons-->
    <!-- ===============================================-->
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('img/favicons/apple-touch-icon.png')}}"> 
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('img/favicons/favicon-32x32.png')}}"> 
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('img/favicons/favicon-16x16.png')}}"> 
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('img/favicons/favicon.ico')}}">         
    <link rel="manifest" href="{{asset('img/favicons/manifest.json')}}">                                
    <meta name="msapplication-TileImage" content="{{asset('img/favicons/mstile-150x150.png')}}">        
    <meta name="theme-color" content="#ffffff">
    <script src="{{asset('js/config.js')}}"></script>                                                   
    <script src="{{url('public/vendors/overlayscrollbars/OverlayScrollbars.min.js')}}"></script>
    <!--<script src="https://code.jquery.com/jquery-3.6.1.slim.min.js" integrity="sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA=" crossorigin="anonymous"></script>-->

    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700%7cPoppins:300,400,500,600,700,800,900&amp;display=swap" rel="stylesheet">
    <link href="{{url('public/vendors/overlayscrollbars/OverlayScrollbars.min.css')}}" rel="stylesheet">  
    <link href="{{asset('css/theme-rtl.css')}}" rel="stylesheet" id="style-rtl">
    <link href="{{asset('css/theme.css')}}" rel="stylesheet" id="style-default">
    <link href="{{asset('css/user-rtl.css')}}" rel="stylesheet" id="user-style-rtl"> 
    <link href="{{asset('css/user.css')}}" rel="stylesheet" id="user-style-default">
    <script>
      var isRTL = JSON.parse(localStorage.getItem('isRTL'));
      if (isRTL) {
        var linkDefault = document.getElementById('style-default');
        var userLinkDefault = document.getElementById('user-style-default');
        linkDefault.setAttribute('disabled', true);
        userLinkDefault.setAttribute('disabled', true);
        document.querySelector('html').setAttribute('dir', 'rtl');
      } else {
        var linkRTL = document.getElementById('style-rtl');
        var userLinkRTL = document.getElementById('user-style-rtl');
        linkRTL.setAttribute('disabled', true);
        userLinkRTL.setAttribute('disabled', true);
      }
    </script>
    {!! htmlScriptTagJsApi(['lang' => 'es']) !!}
  </head>

  <body>

    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->
    <main class="main" id="top">
      <div class="container" data-layout="container">
        
        <script>
          var isFluid = JSON.parse(localStorage.getItem('isFluid'));
          if (isFluid) {
            var container = document.querySelector('[data-layout]');
            container.classList.remove('container');
            container.classList.add('container-fluid');
          }
        </script>

        @yield('main-content')
      
      </div>
    </main>
    <!-- ===============================================-->
    <!--    End of Main Content-->
    <!-- ===============================================-->


    <!-- @include('partials.setting-panel') -->


    <!-- ===============================================-->
    <!--    JavaScripts-->
    <!-- ===============================================-->
    <script src="{{url('public/vendors/popper/popper.min.js')}}"></script>  
    <script src="{{url('public/vendors/bootstrap/bootstrap.min.js')}}"></script> 
    <script src="{{url('public/vendors/anchorjs/anchor.min.js')}}"></script>  
    <script src="{{url('public/vendors/is/is.min.js')}}"></script>
    <script src="{{url('public/vendors/echarts/echarts.min.js')}}"></script>
    <script src="{{url('public/vendors/fontawesome/all.min.js')}}"></script> 
    <script src="{{url('public/vendors/lodash/lodash.min.js')}}"></script>  
    <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
    <script src="{{url('public/vendors/list.js/list.min.js')}}"></script>  
    <script src="{{asset('js/theme.js')}}"></script> 

  </body>

</html>