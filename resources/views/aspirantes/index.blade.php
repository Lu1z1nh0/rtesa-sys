@extends('layouts.default')

@section('dashboard')
    {{-- Titulo --}}
    <div class="card mb-3">
        <div class="bg-holder d-none d-lg-block bg-card"
            style="background-image:url(../../assets/img/icons/spot-illustrations/corner-4.png);">
        </div>
        <div class="card-body position-relative mt-4">
            <div class="row">
                <div class="col-lg-8">
                    <h3>🕐 Listado de aspirantes 🕐</h3>
                    <p class="mt-2">Administracion de aspirantes <b>para Thompson.</b> Aqui podras encontrar todos los
                        clientes pendientes de aprobación, podras buscarlos por nombre, NIT, DUI o empresa.
                </div>
            </div>
        </div>
    </div>
    {{-- Cards de informacion --}}
    <div class="row g-3 mb-3">
        <div class="col-sm-6 col-md-4">
            <div class="card overflow-hidden" style="min-width: 12rem">
                <div class="bg-holder bg-card"
                    style="background-image:url(../../assets/img/icons/spot-illustrations/corner-1.png);">
                </div>
                <!--/.bg-holder-->
                <div class="card-body position-relative">
                    <h6>Clientes a la espera de aprobación</h6>
                    <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif text-warning"
                        data-countup='{"endValue":58.386,"decimalPlaces":2,"suffix":"k"}'>15</div>
                </div>
            </div>
        </div>
    </div>
    {{-- Tabla de categorias --}}
    <div class="row mb-3">
        <div class="col-lg-6">
            <label class="form-label" for="exampleFormControlInput1">Buscar cliente</label>
            <input class="form-control" type="text" placeholder="Ricky Antony" />
        </div>
        <div class="col-lg-6 d-flex align-items-end">
            <button class="btn btn-primary me-1 mb-1 mt-2" type="button"><i class="fas fa-search"></i> Buscar Cliente
            </button>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header">
            <div class="row flex-between-end">
                <div class="col-auto align-self-center">
                    <h5 class="mb-0" data-anchor="data-anchor">Tabla de clientes</h5>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="table-responsive scrollbar">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Municipio</th>
                            <th scope="col">DUI</th>
                            <th scope="col">NIT</th>
                            <th scope="col">N.R.C</th>
                            <th scope="col">Aprobación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="align-middle text-nowrap">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xl">
                                        <img class="rounded-circle" src="../../assets/img/team/4.jpg" alt="" />
                                    </div>
                                    <div class="ms-2">Ricky Antony</div>
                                </div>
                            </td>
                            <td>Rikcy@gmail.com</td>
                            <td>Thompson</td>
                            <td>MQM3+XMF, Av. El Espino</td>
                            <td>San Salvador</td>
                            <td>00000000-1</td>
                            <td>234-3454-3456-2</td>
                            <td>342-Fbrwq234-23423b</td>
                            <td><button class="btn btn-success me-1 mb-1" type="button">Aprobar
                                </button>
                                <button class="btn btn-danger me-1 mb-1" type="button">Denegar
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td class="align-middle text-nowrap">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xl">
                                        <img class="rounded-circle" src="../../assets/img/team/2.jpg" alt="" />
                                    </div>
                                    <div class="ms-2">Ramos Perez</div>
                                </div>
                            </td>
                            <td>RamozP@gmail.com</td>
                            <td>Thompson</td>
                            <td>MQP3+964, Avenida Arabiga</td>
                            <td>San Salvador</td>
                            <td>00000000-2</td>
                            <td>154-5354-2356-8</td>
                            <td>342-Fbrwq234-23423b</td>
                            <td><button class="btn btn-success me-1 mb-1" type="button">Aprobar
                                </button>
                                <button class="btn btn-danger me-1 mb-1" type="button">Denegar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
