      <nav class="navbar navbar-standard navbar-expand-lg fixed-top navbar-dark" data-navbar-darken-on-scroll="data-navbar-darken-on-scroll">

        <div class="container">

          <a class="navbar-brand" href="{{url('/')}}"><img src="{{asset('img/rtthompson-logo.png')}}" title="Ir a Inicio" style="width: 100%; max-width: 200px; height: auto;" class="" alt="rt-logo-img" /></a>

          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

          <div class="collapse navbar-collapse scrollbar" id="navbarStandard">

            <!-- Menu Izq -->
            <ul class="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">

              <li class="nav-item">
                <a class="nav-link" href="{{url('/')}}" role="button" aria-haspopup="true" aria-expanded="false" id="dashboards">Inicio</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="{{url('/#servsection')}}" role="button" aria-haspopup="true" aria-expanded="false" id="documentations">Servicios</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="{{url('/#ussection')}}" role="button" aria-haspopup="true" aria-expanded="false" id="documentations">Nosotros</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="{{url('/#contactsection')}}" role="button" aria-haspopup="true" aria-expanded="false" id="documentations">Contáctanos</a>
              </li>

            </ul>

            <!-- Menu Der -->
            <ul class="navbar-nav ms-auto">

              <li class="nav-item d-flex align-items-center me-2">
                <div class="nav-link theme-switch-toggle fa-icon-wait p-0">

                  <input class="form-check-input ms-0 theme-switch-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark">

                  <label class="mb-0 theme-switch-toggle-label theme-switch-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Cambiar a tema claro"><span class="fas fa-sun"></span></label>
                  <label class="mb-0 py-2 theme-switch-toggle-light d-lg-none" for="themeControlToggle"><span>Cambiar a tema claro</span></label>

                  <label class="mb-0 theme-switch-toggle-label theme-switch-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Cambiar a tema oscuro"><span class="fas fa-moon"></span></label>
                  <label class="mb-0 py-2 theme-switch-toggle-dark d-lg-none" for="themeControlToggle"><span>Cambiar a tema oscuro</span></label>

                </div>
              </li>

              <li id="iniMenu" class="nav-item"><a class="nav-link" href="{{url('/iniciar-sesion')}}">Inicio de Sesión</a></li>

              <li id="regMenu" class="nav-item"><a class="nav-link" href="{{url('/registrarse')}}">Registrarse</a></li>

            </ul>

          </div>

        </div>

      </nav>