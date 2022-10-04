@extends('layouts.layout-client')

@section('main-content')
  @include('navbars.navbar-client')

      <style type="text/css">
        body {
            background-image: url({{asset('img/bg/login-bg-dark.png')}});
            background-size: cover;
        }
      </style>

      <div class="modal fade" id="regModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body p-4">
              <div class="row text-start justify-content-between align-items-center mb-2">
                <div class="col-auto">
                  <h5 id="modalLabel">Registrarse</h5>
                </div>
                <div class="col-auto">
                  <p class="fs--1 text-600 mb-0">¿Ya tienes cuenta? <a href="{{url('/iniciar-sesion')}}">Iniciar Sesión</a></p>
                </div>
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
                  <input class="form-check-input" type="checkbox" id="modal-register-checkbox" />
                  <label class="form-label" for="modal-register-checkbox">Yo estoy de acuerdo con los <a href="{{url('/terminos-y-condiciones')}}">términos y condiciones de uso </a>y la <a href="{{url('/politica-de-privacidad')}}">política de privacidad</a></label>
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Registrarse</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

      <div class="container" data-layout="container">

        <script>
          var isFluid = JSON.parse(localStorage.getItem('isFluid'));
          if (isFluid) {
            var container = document.querySelector('[data-layout]');
            container.classList.remove('container');
            container.classList.add('container-fluid');
          }
        </script>

        <div class="row flex-center min-vh-100 py-6 text-center">

          <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">

            <div class="card">
              <div class="card-body p-4 p-sm-5">
                <h5 class="mb-0">¿Olvidaste tu contraseña?</h5><small>Ingresa tu dirección de correo electrónico asociado y te enviaremos un enlace para reestablecer tu contraseña.</small>
                
                <form class="mt-4">
                  <input class="form-control" type="email" placeholder="Correo Electrónico" />
                  <div class="mb-3"></div>
                  <button class="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Enviar enlace</button>
                </form>

                <a class="fs--1 text-600" href="#!">No puedo reestablecer mi contraseña usando esta página.<span class="d-inline-block ms-1">&rarr;</span></a>
              </div>
            </div>

          </div>

        </div>
      </div>


      @include('partials.footer-adm1')              
@endsection