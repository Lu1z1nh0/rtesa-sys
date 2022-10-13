<nav class="navbar navbar-light navbar-glass navbar-top navbar-expand">

  <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>

  <a class="navbar-brand me-1 me-sm-3" href="{{url('/dashboard')}}">
    <div class="d-flex align-items-center"><img class="me-2" src="{{asset('img/rtthompson-logo.png')}}" alt="" width="150" />
    </div>
  </a>

  <ul class="navbar-nav align-items-center d-none d-lg-block">

    <li class="nav-item">
      <div class="search-box" data-list='{"valueNames":["title"]}'>

        <form class="position-relative" data-bs-toggle="search" data-bs-display="static">
          <input class="form-control search-input fuzzy-search" type="search" placeholder="Buscar..." aria-label="Search" />
          <span class="fas fa-search search-box-icon"></span>
        </form>

      </div>
    </li>

  </ul>

  <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">

    {{-- se comento el botton de darkmode --}}
    {{-- <li class="nav-item">
      <div class="theme-control-toggle fa-icon-wait px-2">
        <input class="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark" />
        <label class="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Cambiar a tema claro"><span class="fas fa-sun fs-0"></span></label>
        <label class="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Cambiar a tema oscuro"><span class="fas fa-moon fs-0"></span></label>
      </div>
    </li> --}}

    <li class="nav-item dropdown"><a class="nav-link mt-1 pe-0 ps-2" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div class="avatar avatar-xl">
          <img class="rounded-circle" src="{{asset('img/team/avatar.png')}}" alt="" />

        </div>
      </a>
      <div class="dropdown-menu dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
        <div class="bg-white dark__bg-1000 rounded-2 py-2">

          <a class="dropdown-item" href="{{url('/dashboard')}}">Perfil</a>

          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="{{url('/dashboard')}}">Opciones</a>
          <a class="dropdown-item" href="{{url('/')}}">Cerrar Sesión</a>
        </div>
      </div>
    </li>

  </ul>

</nav>