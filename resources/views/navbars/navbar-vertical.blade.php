        <!-- ---- navbar-vertical starts------------ -->
        <nav class="navbar navbar-light navbar-vertical navbar-expand-xl">
          
          <script>
            var navbarStyle = localStorage.getItem("navbarStyle");
            if (navbarStyle && navbarStyle !== 'transparent') {
              document.querySelector('.navbar-vertical').classList.add(`navbar-${navbarStyle}`);
            }
          </script>

          <div class="d-flex align-items-center">
            
            <div class="toggle-icon-wrapper">
              <button class="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Ocultar/Mostrar Menú"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
            </div>

            <a class="navbar-brand" href="/">
              <div class="d-flex align-items-center py-3"><img class="me-2" src="{{asset('img/rtthompson-logo.png')}}" alt="" width="150" />
              </div>
            </a>

          </div>

          <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
            <div class="navbar-vertical-content scrollbar">

              <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                
                <!-- Dashboard -->
                <li class="nav-item">

                  <!-- parent pages-->
                  <a class="nav-link dropdown-indicator" href="#dashboard" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dashboard">
                    <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-chart-pie"></span></span><span class="nav-link-text ps-1">Dashboard</span>
                    </div>
                  </a>

                  <ul class="nav collapse show" id="dashboard">
                    
                    <li class="nav-item">
                      <a class="nav-link active" href="{{url('/dashboard')}}" data-bs-toggle="" aria-expanded="false">
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text ps-1">Inicio</span>
                        </div>
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="{{url('/dashboard')}}" data-bs-toggle="" aria-expanded="false">
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text ps-1">Configuración</span>
                        </div>
                      </a>
                    </li>

                  </ul>
                </li>

                <!-- Ventas -->
                <li class="nav-item">

                  <!-- label-->
                  <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div class="col-auto navbar-vertical-label">Ventas</div>
                    <div class="col ps-0"><hr class="mb-0 navbar-vertical-divider" /></div>
                  </div>

                  <!-- parent pages-->
                  <a class="nav-link" href="{{url('/dashboard/categorias')}}" role="button" data-bs-toggle="" aria-expanded="false">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon"><span class="fas fa-list-ul"></span></span>
                      <span class="nav-link-text ps-1">Categorías</span>
                    </div>
                  </a>

                  <!-- parent pages-->
                  <a class="nav-link" href="{{url('/dashboard/productos')}}" role="button" data-bs-toggle="" aria-expanded="false">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon"><span class="fas fa-shopping-cart"></span></span>
                      <span class="nav-link-text ps-1">Productos</span>
                    </div>
                  </a>

                  <!-- parent pages-->
                  <a class="nav-link" href="{{url('/dashboard/stock')}}" role="button" aria-expanded="false">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon"><span class="fas fa-box"></span></span>
                      <span class="nav-link-text ps-1">Stock</span>
                    </div>
                  </a>
                </li>

                <!-- Clientes -->
                <li class="nav-item">
                  <!-- label-->
                  <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div class="col-auto navbar-vertical-label">Clientes</div>
                    <div class="col ps-0"><hr class="mb-0 navbar-vertical-divider" /></div>
                  </div>

                  <!-- parent pages-->
                  <a class="nav-link" href="" role="button" data-bs-toggle="" aria-expanded="false">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon"><span class="fas fa-user"></span></span>
                      <span class="nav-link-text ps-1">Lista de Clientes</span>
                    </div>
                  </a>

                  <!-- parent pages-->
                  <a class="nav-link" href="" role="button" data-bs-toggle="" aria-expanded="false">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon"><span class="fas fa-user-clock"></span></span>
                      <span class="nav-link-text ps-1">Aspirantes</span>
                    </div>
                  </a>

                  <!-- parent pages-->
                  <a class="nav-link" href="" role="button" data-bs-toggle="" aria-expanded="false">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon"><span class="fas fa-tag"></span></span>
                      <span class="nav-link-text ps-1">Suscriptores</span>
                    </div>
                  </a>

                  <!-- parent pages-->
                  <a class="nav-link" href="" role="button" data-bs-toggle="" aria-expanded="false">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon"><span class="far fa-comments"></span></span>
                      <span class="nav-link-text ps-1">Contacto</span>
                    </div>
                  </a>
                </li>

                <!-- Reportes -->
                <li class="nav-item">
                  <!-- label-->
                  <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div class="col-auto navbar-vertical-label">Reportes</div>
                    <div class="col ps-0"><hr class="mb-0 navbar-vertical-divider" /></div>
                  </div>

                  <!-- parent pages-->
                  <a class="nav-link" href="" role="button" data-bs-toggle="" aria-expanded="false">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon"><span class="fas fa-cash-register"></span></span>
                      <span class="nav-link-text ps-1">Ventas</span>
                    </div>
                  </a>

                  <!-- parent pages-->
                  <a class="nav-link" href="" role="button" data-bs-toggle="" aria-expanded="false">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon"><span class="fab fa-readme"></span></span>
                      <span class="nav-link-text ps-1">Bitácora</span>
                    </div>
                  </a>
                </li>

                <li class="nav-item">
                  <!-- label-->
                  <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div class="col-auto navbar-vertical-label">Documentación</div>
                    <div class="col ps-0">
                      <hr class="mb-0 navbar-vertical-divider" />
                    </div>
                  </div>

                  <!-- parent pages-->
                  <a class="nav-link" href="" role="button" data-bs-toggle="" aria-expanded="false">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon"><span class="fas fa-question-circle"></span></span><span class="nav-link-text ps-1">Manuales de Usuario</span>
                    </div>
                  </a>
                </li>

              </ul>

            </div>
          </div>

        </nav>
        <!-- ----- navbar-vertical end -------------- -->