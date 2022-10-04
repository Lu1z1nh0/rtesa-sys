@extends('layouts.layout-client')

@section('main-content')
  @include('navbars.navbar-client')

      <style type="text/css">
        #regMenu {
          display: none;
        }
        body {
            background-image: url({{asset('img/bg/login-bg-dark.png')}});
            background-size: cover;
        }
      </style>

      <div class="container" data-layout="container">

        <script>
          var isFluid = JSON.parse(localStorage.getItem('isFluid'));
          if (isFluid) {
            var container = document.querySelector('[data-layout]');
            container.classList.remove('container');
            container.classList.add('container-fluid');
          }
        </script>

        <div class="row flex-center min-vh-100 py-6">

          <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">

            <div class="card">

              <div class="card-body p-4 p-sm-5">

                <div class="row flex-between-center mb-2">
                  <div class="col-auto">
                    <h5>Registrarse</h5>
                  </div>
                  <div class="col-auto fs--1 text-600"><span class="mb-0 undefined">¿Ya tienes cuenta? <a href="{{url('/iniciar-sesion')}}">Iniciar Sesión</a></span></div>
                </div>

                <form>
                  <div class="mb-3">
                    <input class="form-control" type="text" autocomplete="on" placeholder="Nombre completo" />
                  </div>
                  <div class="mb-3">
                    <input class="form-control" type="email" autocomplete="on" placeholder="Correo Electrónico" />
                  </div>
                  <div class="row gx-2">
                    <div class="mb-3 col-sm-6">
                      <input class="form-control" type="password" autocomplete="on" placeholder="Contraseña" />
                    </div>
                    <div class="mb-3 col-sm-6">
                      <input class="form-control" type="password" autocomplete="on" placeholder="Confirma contraseña" />
                    </div>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="basic-register-checkbox" />
                    <label class="form-label text-justify" for="basic-register-checkbox">Yo estoy de acuerdo con los <a href="{{url('/terminos-y-condiciones')}}">términos y condiciones de uso </a>y la <a href="{{url('/politica-de-privacidad')}}">política de privacidad</a></label>
                  </div>

                  <div class="mb-3">
                    <button class="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Registrarse</button>
                  </div>

                </form>

              </div>

            </div>
          </div>
        </div>
      </div>


      @include('partials.footer-adm1')              
@endsection