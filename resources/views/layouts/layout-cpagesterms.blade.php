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
    <script src="https://code.jquery.com/jquery-3.6.1.slim.min.js" integrity="sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA=" crossorigin="anonymous"></script>

    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    <link href="{{url('public/vendors/swiper/swiper-bundle.min.css')}}" rel="stylesheet">
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

    <script>
        /* ésto comprueba la localStorage si ya tiene la variable guardada */
        function compruebaAceptaCookies() {
          if(localStorage.aceptaCookies == 'true'){
            cajacookies.style.display = 'none';
          }
        }

        /* aquí se guarda la variable de que se ha aceptado el uso de cookies y así no se muestra el mensaje de nuevo */
        function aceptarCookies() {
          localStorage.aceptaCookies = 'true';
          cajacookies.style.display = 'none';
        }

        /* ésto se ejecuta cuando la web está cargada */
        $(document).ready(function () {
          compruebaAceptaCookies();
        });
    </script>

    {!! htmlScriptTagJsApi(['lang' => 'es']) !!}
  </head>

  <body data-bs-spy="scroll" data-bs-target="#terms-sidebar" data-bs-offset="100" tabindex="0">

    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->
    <main class="main" id="top">

        <!-- ============================================-->
      <!-- <section slider> begin ============================-->
      <section class="py-0 pb-6 mb-4 overflow-hidden light" id="banner">

        <div class="bg-holder overlay" style="background-image:url({{asset('img/bg/terms-cond-img-bg-rt.png')}});background-position: center bottom;">
        </div>
        <!--/.bg-holder-->

        <div class="container">
          <div class="row flex-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">

            <div class="col-md-12 col-lg-12 col-xl-12 pb-xl-12 text-center text-xl-start">

              <h3 class="text-white fw-light">Ofrecemos <span class="typed-text fw-bold" data-typed-text='["variedad","garantía","calidad","durabilidad"]'></span><br />a nuestros clientes:</h3>

              <p class="lead text-white opacity-75 text-justify">Vendedores de repuestos y distribuidores de una forma fácil y accesible obtienen sus productos y así llegan hasta sus clientes de forma eficaz y segura.</p>

            </div>


          </div>
        </div>
        <!-- end of .container-->

      </section>
      <!-- <section slider> close ============================-->
      <!-- ============================================-->

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

      @include('partials.footer-client')
    </main>
    <!-- ===============================================-->
    <!--    End of Main Content-->
    <!-- ===============================================-->


    <!-- @include('partials.setting-panel') -->

    <div id="cajacookies">
      <p style="margin-bottom: 0;">
      Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. Si sigues utilizando este sitio asumiremos que estás de acuerdo. Puedes leer más sobre el uso de cookies en nuestra <a href="{{url('/politica-de-privacidad')}}">política de privacidad</a>. &nbsp;&nbsp;&nbsp;<button onclick="aceptarCookies()" class="btn btn-primary">Aceptar</button>
      </p>
    </div>

    <!-- ===============================================-->
    <!--    JavaScripts-->
    <!-- ===============================================-->
    <script src="{{url('public/vendors/popper/popper.min.js')}}"></script>  
    <script src="{{url('public/vendors/bootstrap/bootstrap.min.js')}}"></script> 
    <script src="{{url('public/vendors/anchorjs/anchor.min.js')}}"></script>  
    <script src="{{url('public/vendors/is/is.min.js')}}"></script>
    <script src="{{url('public/vendors/swiper/swiper-bundle.min.js')}}"> </script>
    <script src="{{url('public/vendors/typed.js/typed.js')}}"></script>
    <script src="{{url('public/vendors/fontawesome/all.min.js')}}"></script> 
    <!--<script src="{{url('public/vendors/echarts/echarts.min.js')}}"></script>-->  
    <script src="{{url('public/vendors/lodash/lodash.min.js')}}"></script>  
    <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
    <script src="{{url('public/vendors/list.js/list.min.js')}}"></script>  
    <script src="{{asset('js/theme.js')}}"></script> 

  </body>

</html>