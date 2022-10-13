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
                    <h3>🏷️ Productos 🏷️</h3>
                    <p class="mt-2">Administracion de productos <b>para Thompson.</b> Aqui podras encontrar todas los
                        productos, y tener un control como cuantos productos hay en stock, cuandos falta de stock, editar,
                        agregar e eliminar.
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
                    <h6>Productos Activos</h6>
                    <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif text-warning"
                        data-countup='{"endValue":58.386,"decimalPlaces":2,"suffix":"k"}'>45</div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="card overflow-hidden" style="min-width: 12rem">
                <div class="bg-holder bg-card"
                    style="background-image:url(../../assets/img/icons/spot-illustrations/corner-2.png);">
                </div>
                <!--/.bg-holder-->
                <div class="card-body position-relative">
                    <h6>Producos Inactivos</h6>
                    <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif text-info"
                        data-countup='{"endValue":23.434,"decimalPlaces":2,"suffix":"k"}'>32</div>
                </div>
            </div>
        </div>
    </div>
    {{-- Tabla de productos --}}
    <div class="row justify-content-md-center">
        <div class="col mb-5 mt-4">
            <a href="{{url('/dashboard/productos/crear')}}">
                <button class="btn btn-primary me-1 mb-1" type="button">Agregar nueva producto
                </button>
            </a>
        </div>
        <div class="col">
            <label class="form-label" for="exampleFormControlInput1">Buscar producto, SKU y EOM</label>
            <input class="form-control" type="text" placeholder="Alternador" />
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header">
            <div class="row flex-between-end">
                <div class="col-auto align-self-center">
                    <h5 class="mb-0" data-anchor="data-anchor">Tabla de prodctos</h5>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="table-responsive scrollbar">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Marca</th>
                            <th scope="col">SKU</th>
                            <th scope="col">OEM</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Ref1</th>
                            <th scope="col">Ref2</th>
                            <th scope="col">Ref3</th>
                            <th class="text-end" scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Canister</td>
                            <td>El canister es un sistema que almacena los vapores de la gasolina que se producen en el
                                depósito de combustible mediante una serie de válvulas y tuberías. Estos vapores se acumulan
                                en un depósito para ser quemados posteriormente tras la admisión.</td>
                            <td>87.99$</td>
                            <td>Toyoya</td>
                            <td>KSFBW-01</td>
                            <td>Nijapan</td>
                            <td>Carro</td>
                            <td>143545</td>
                            <td>435345</td>
                            <td>534535</td>
                            <td class="text-end">
                                <div>
                                    <button class="btn p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Edit"><span class="text-500 fas fa-edit"></span></button>
                                    <button class="btn p-0 ms-2" type="button" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Delete"><span
                                            class="text-500 fas fa-trash-alt"></span></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Alternador</td>
                            <td>elemento del circuito eléctrico del automóvil que tiene como misión transformar la energía
                                mecánica en energía eléctrica, proporcionando así un suministro eléctrico durante la marcha
                                del vehículo.</td>
                            <td>90.99$</td>
                            <td>BOSCH</td>
                            <td>KSFBW-02</td>
                            <td>BOSCH</td>
                            <td>Carro</td>
                            <td>999233</td>
                            <td>434344</td>
                            <td>136557</td>
                            <td class="text-end">
                                <div>
                                    <button class="btn p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Edit"><span class="text-500 fas fa-edit"></span></button>
                                    <button class="btn p-0 ms-2" type="button" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Delete"><span
                                            class="text-500 fas fa-trash-alt"></span></button>
                                </div>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
