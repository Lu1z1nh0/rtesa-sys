@extends('layouts.default')

@section('dashboard')
    {{-- Titulo --}}

          <div class="card mb-3">

            <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url( {{asset('img/icons/spot-illustrations/corner-4.png')}} );">
            </div>
            <!--/.bg-holder-->

            <div class="card-body position-relative">
              <div class="row">
                <div class="col-lg-8">
                  <h3>CMS</h3>
                  <p class="mt-2 text-justify">Administración de contenido del sitio web de <b>RTElsalvador.</b> Aquí podrás encontrar todos los campos editables del contenido del sitio web.
                </div>
              </div>
            </div>

          </div>
    {{-- Cards de informacion --}}

          <div class="card mb-3">
            
            <div class="card-header">
              <div class="row flex-between-end">
                <div class="col-auto align-self-center">
                  <h5 class="mb-0" data-anchor="data-anchor">Variables</h5>
                </div>
              </div>
            </div>

            <div class="card-body bg-light">

              <div class="tab-content">

                <div class="tab-pane preview-tab-pane active" role="tabpanel" id="">
                  
                  <div class="mb-3">
                    <label class="form-label" for="camp1">Número de WhatsApp</label>
                    <input class="form-control" id="camp1" type="text" placeholder="0000-0000" value="7736-1910" readonly="" />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="camp2">Número fijo</label>
                    <input class="form-control" id="camp2" type="text" placeholder="0000-0000" value="2566-7777" readonly="" />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="camp3">Perfil FB</label>
                    <input class="form-control" id="camp3" type="text" placeholder="-" value="-" readonly="" />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="camp4">Dirección Oficina</label>
                    <input class="form-control" id="camp4" type="text" placeholder="-" value="Prolongación Juan Pablo II, Urbanización Guerrero, Pasaje Triunfal, Casa 2-B, San Salvador." readonly="" />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="camp5">Horario Oficina</label>
                    <input class="form-control" id="camp5" type="text" placeholder="-" value="Lun-Jue: 8:00 - 6:00 p.m. | Vie: 8:00 - 5:00 p.m." readonly="" />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="camp6">Dirección Bódega</label>
                    <input class="form-control" id="camp6" type="text" placeholder="-0" value="Zona Franca, Santa Tecla." readonly="" />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="camp7">Horario Bódega</label>
                    <input class="form-control" id="camp7" type="text" placeholder="-" value="Lun-Vie: 8:00 - 5:00 p.m. | Sáb: 8:00 - 12:00 m.d." readonly="" />
                  </div>

                </div>

              </div>
            </div>

          </div>
@endsection