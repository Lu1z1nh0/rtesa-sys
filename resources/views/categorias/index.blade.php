@extends('layouts.default')

@section('dashboard')
    {{-- Titulo --}}
    <div class="card mb-3">
        <div class="bg-holder d-none d-lg-block bg-card"
            style="background-image:url(../../assets/img/icons/spot-illustrations/corner-4.png);">
        </div>
        <div class="card-body position-relative">
            <div class="row">
                <div class="col-lg-8">
                    <h3>🗂️ Categorias de productos 🗂️</h3>
                    <p class="mt-2">Administracion de categorias <b>para Thompson.</b> Aqui podras encontrar todas las
                        categorias que pertencen a los productos, podras ordenarlos por nombre y por cantidad.
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
                    <h6>Categorias</h6>
                    <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif text-warning"
                        data-countup='{"endValue":58.386,"decimalPlaces":2,"suffix":"k"}'>5</div><a
                        class="fw-semi-bold fs--1 text-nowrap" href="app/e-commerce/customers.html">See all<span
                            class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
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
                    <h6>Productos</h6>
                    <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif text-info"
                        data-countup='{"endValue":23.434,"decimalPlaces":2,"suffix":"k"}'>25</div><a
                        class="fw-semi-bold fs--1 text-nowrap" href="app/e-commerce/orders/order-list.html">All orders<span
                            class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
                </div>
            </div>
        </div>
    </div>
    {{-- Tabla de categorias --}}
    <div class="mb-3">
        <button class="btn btn-primary me-1 mb-1" type="button">Agregar nueva categoria
        </button>
    </div>
    <div class="card mb-3">
        <div class="card-header">
            <div class="row flex-between-end">
                <div class="col-auto align-self-center">
                    <h5 class="mb-0" data-anchor="data-anchor">Tabla de categorias</h5>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="tab-content">
                <div class="tab-pane preview-tab-pane active" role="tabpanel"
                    aria-labelledby="tab-dom-c5e8d192-4a51-4677-898b-d0c52e07fab1"
                    id="dom-c5e8d192-4a51-4677-898b-d0c52e07fab1">
                    <div id="tableExample" data-list='{"valueNames":["name","email","age"],"page":5,"pagination":true}'>
                        <div class="table-responsive scrollbar">
                            <table class="table table-bordered table-striped fs--1 mb-0">
                                <thead class="bg-200 text-900">
                                    <tr>
                                        <th class="sort" data-sort="name">Nombre Categoria</th>
                                        <th class="sort" data-sort="email">Descripcion</th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    <tr>
                                        <td class="name">Anna</td>
                                        <td class="email">anna@example.com</td>
                                    </tr>
                                    <tr>
                                        <td class="name">Homer</td>
                                        <td class="email">homer@example.com</td>
                                    </tr>
                                    <tr>
                                        <td class="name">Oscar</td>
                                        <td class="email">oscar@example.com</td>
                                    </tr>
                                    <tr>
                                        <td class="name">Emily</td>
                                        <td class="email">emily@example.com</td>
                                    </tr>
                                    <tr>
                                        <td class="name">Jara</td>
                                        <td class="email">jara@example.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row align-items-center mt-3">
                            <div class="pagination d-none"></div>
                            <div class="col">
                                <p class="mb-0 fs--1">
                                    <span class="d-none d-sm-inline-block" data-list-info="data-list-info"></span>
                                    <span class="d-none d-sm-inline-block"> &mdash; </span>
                                    <a class="fw-semi-bold" href="#!" data-list-view="*">View all<span
                                            class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a><a
                                        class="fw-semi-bold d-none" href="#!" data-list-view="less">View Less<span
                                            class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
                                </p>
                            </div>
                            <div class="col-auto d-flex">
                                <button class="btn btn-sm btn-primary" type="button"
                                    data-list-pagination="prev"><span>Previous</span></button>
                                <button class="btn btn-sm btn-primary px-4 ms-2" type="button"
                                    data-list-pagination="next"><span>Next</span></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
@endsection
