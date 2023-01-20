@extends('layouts.layout-client')

@section('main-content')
  @include('navbars.navbar-client')

      <style type="text/css">
        #iniMenu {
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

            <!--<a class="d-flex flex-center mb-4" href="{{url('/')}}"><img class="me-2" src="{{asset('img/rtthompson-logo.png')}}" alt="" width="200" /></a>-->
            
            <div class="card">
              <div class="card-body p-4 p-sm-5">

                <div class="row flex-between-center mb-2">
                  <div class="col-auto">
                    <h5>Inicio de Sesión</h5>
                  </div>
                  <div class="col-auto fs--1 text-600"><span class="mb-0 undefined">o</span> <span><a href="{{url('/registrarse')}}">Crear una cuenta</a></span></div>
                </div>

                <form method="POST" action="{{ route('iniciar-sesion.store') }}">

                  @csrf
                  <div class="mb-3">
                    <input id="correo" class="form-control" type="email" placeholder="Correo Electrónico" name="correo" value="{{ old('correo') }}" required autofocus/>
                  </div>

                  <div class="mb-3">
                    <input id="password" class="form-control" type="password" placeholder="Contraseña" name="password" required/>

                  </div>

                  <div class="row flex-between-center">
                    <div class="col-auto">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="basic-checkbox" checked="checked" />
                        <label class="form-check-label mb-0" for="basic-checkbox">Recuerdame</label>
                      </div>
                    </div>
                    <div class="col-auto"><a class="fs--1" href="{{url('/recuperacion-de-contrasenya')}}">¿Olvidaste tu contraseña?</a></div>
                  </div>

                  <div class="mb-3 mt-3" style="display: flex; justify-content: center;">
                    <div>
                      {!! htmlFormSnippet() !!}
                    </div>
                  </div>

                  <div class="mb-3">
                    <button class="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Iniciar Sesión</button>
                  </div>

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>


      @include('partials.footer-adm1')              
@endsection