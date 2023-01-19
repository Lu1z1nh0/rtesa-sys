@extends('layouts.default')

@section('dashboard')
    {{-- Titulo --}}
    <div class="card mb-3">
        <div class="bg-holder d-none d-lg-block bg-card"
            style="background-image:url( {{asset('img/icons/spot-illustrations/corner-4.png')}} );">
        </div>
        <div class="card-body position-relative mt-4">
            <div class="row">
                <div class="col-lg-8">
                    <h3>🕐 Listado de Suscriptores 🕐</h3>
                    <p class="mt-2 text-justify">Administración de boletín de noticias <b>para Thompson.</b> Aquí podrás encontrar todos los clientes suscritos, podras buscarlos por nombre y correo electrónico.
                </div>
            </div>
        </div>
    </div>
    {{-- Cards de informacion --}}
    <div class="row g-3 mb-3">
        <div class="col-sm-6 col-md-4">
            <div class="card overflow-hidden" style="min-width: 12rem">
                <div class="bg-holder bg-card"
                    style="background-image:url( {{asset('img/icons/spot-illustrations/corner-1.png')}} );">
                </div>
                <!--/.bg-holder-->
                <div class="card-body position-relative">
                    <h6>Total clientes suscritos</h6>
                    <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif text-warning"
                        data-countup='{"endValue":58.386,"decimalPlaces":2,"suffix":"k"}'>2</div>
                </div>
            </div>
        </div>
    </div>
    {{-- Tabla de categorias --}}
    <div class="row mb-3">
        <div class="col-lg-6">
            <label class="form-label" for="exampleFormControlInput1">Buscar Suscriptor</label>
            <input class="form-control" type="text" placeholder="Buscar..." />
        </div>
        <div class="col-lg-6 d-flex align-items-end">
            <button class="btn btn-primary me-1 mb-1 mt-2" type="button"><i class="fas fa-search"></i> Buscar Suscriptor
            </button>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header">
            <div class="row flex-between-end">
                <div class="col-auto align-self-center">
                    <h5 class="mb-0" data-anchor="data-anchor">Tabla de Suscriptores</h5>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="table-responsive scrollbar">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Correo Electrónico</th>
                            <!--<th scope="col">Acción</th>-->
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="align-middle text-nowrap">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xl">
                                        <img class="rounded-circle" src="{{asset('img/team/2.jpg')}}" alt="" />
                                    </div>
                                    <div class="ms-2">Juan Sánchez</div>
                                </div>
                            </td>
                            <td>js_290@gmail.com</td>
                           <!--<td><button class="btn btn-success me-1 mb-1" type="button">Enviar Boletín</button></td>-->
                        </tr>
                        <tr>
                            <td class="align-middle text-nowrap">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xl">
                                        <img class="rounded-circle" src="{{asset('img/team/1.jpg')}}" alt="" />
                                    </div>
                                    <div class="ms-2">Adolfo Ramos</div>
                                </div>
                            </td>
                            <td>a_ramos92P@hotmail.com</td>
                            <!--<td><button class="btn btn-success me-1 mb-1" type="button">Enviar Boletín</button></td>-->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
