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
                    <h3>📟 Marcas de productos 📟</h3>
                    <p class="mt-2">Administracion de marcas <b>para Thompson.</b> Aqui podras encontrar todas las
                        marcas que pertencen a los productos, podras ordenarlos por nombre y por cantidad.
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
                    <h6>Marcas</h6>
                    <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif text-warning"
                        data-countup='{"endValue":58.386,"decimalPlaces":2,"suffix":"k"}'>6</div>
                </div>
            </div>
        </div>
    </div>
    {{-- Tabla de categorias --}}
    <div class="mb-3">
        <a href="{{url('/dashboard/marcas/crear')}}">
            <button class="btn btn-primary me-1 mb-1" type="button"><i class="fas fa-plus"></i> Agregar nueva marca
            </button>
        </a>
    </div>
    <div class="row mb-3">
        <div class="col-lg-6">
            <label class="form-label" for="exampleFormControlInput1">Buscar Marca</label>
            <input class="form-control" type="text" placeholder="Toyota" />
        </div>
        <div class="col-lg-6 d-flex align-items-end">
            <button class="btn btn-primary me-1 mb-1 mt-2" type="button"><i class="fas fa-search"></i> Buscar Marca
            </button>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header">
            <div class="row flex-between-end">
                <div class="col-auto align-self-center">
                    <h5 class="mb-0" data-anchor="data-anchor">Tabla de marca</h5>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="table-responsive scrollbar">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre de la Marca</th>
                            <th scope="col">Descripcion</th>
                            <th class="text-end" scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Toyota</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
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
                            <td>Hyndai</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
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
                            <td>Ford</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
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
                            <td>Kia</td>
                            <td>jLorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                            <td class="text-end">
                                <div>
                                    <button class="btn p-0" type="button" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Edit"><span
                                            class="text-500 fas fa-edit"></span></button>
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
