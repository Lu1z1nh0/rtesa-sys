@extends('layouts.default')

@section('dashboard')
    {{-- menu superior --}}
    <div class="card mb-3">
        <div class="card-body">
            <div class="row flex-between-center">
                <div class="col-sm-auto mb-2 mb-sm-0">
                    <h6 class="mb-0">Mostrando 1-24 of 205 productos</h6>
                </div>
                <div class="col-sm-auto">
                    <div class="row gx-2 align-items-center">
                        <div class="col-auto">
                            <form class="row gx-2">
                                <div class="col-auto"><small>Ordenar por categoría:</small></div>
                                <div class="col-auto">
                                    <select class="form-select form-select-sm" aria-label="Bulk actions">
                                        <option selected="">Fajas</option>
                                        <option value="Refund">Silicones</option>
                                        <option value="Refund">Pegamento</option>
                                        <option value="Refund">Lubricantes</option>
                                        <option value="Refund">Limpiadores</option>
                                        <option value="Delete">Soportes</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Tienda --}}
    <div class="card mb-3">
        <div class="card-body">
            <div class="row">
                @foreach ($productos as $producto)
                <div class="mb-4 col-md-6 col-lg-4">
                    <div class="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                        <div class="overflow-hidden">
                            <?php
                            //hacer un if para ver si el producto tiene imagen o no
                            if ($producto->imagen_1_src != null) {
                                $imagen = `../../../assets/img/products/{{ $producto->imagen }}`;
                            } else {
                                $imagen = '../../../assets/img/products/default.webp';
                            }
                            ?>
                            <div class="position-relative rounded-top overflow-hidden"><a class="d-block"
                                    href="/dashboard/producto-detalle-test"><img
                                        class="img-fluid rounded-top" src="{{ $imagen }}"
                                        alt="" /></a>
                            </div>
                            <div class="p-3">
                                <h5 class="fs-0"><a class="text-dark"
                                        href="../../../app/e-commerce/product/product-details.html">{{ $producto->nombre }}</a></h5>
                                <p class="fs--1 mb-3"><a class="text-500" href="#!">{{ $producto->categoria->nombre }}</a></p>
                                <h5 class="fs-md-2 text-warning mb-0 d-flex align-items-center mb-3"> 87.99$
                                    <del class="ms-2 fs--1 text-500">97.99$ </del>
                                </h5>
                                <p class="fs--1 mb-1">Stock: <strong class="text-success">{{ $producto->estadoProducto->estado }}</strong>
                                </p>
                            </div>
                        </div>
                        <div class="d-flex flex-between-center px-3">
                            <div>
                                <a href="{{ route('tienda.show', $producto->id) }}">
                                    <button class="btn btn-primary me-1 mb-1" type="button"><i class="far fa-eye"></i> Ver
                                        producto
                                    </button>
                                </a>
                                <a class="btn btn-sm btn-falcon-default" href="#!" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Agregar al carrito"><span
                                        class="fas fa-cart-plus"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        <div class="card-footer bg-light d-flex justify-content-center">
            <div>
                <button class="btn btn-falcon-default btn-sm me-2" type="button" disabled="disabled"
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Prev"><span
                        class="fas fa-chevron-left"></span></button><a
                    class="btn btn-sm btn-falcon-default text-primary me-2" href="#!">1</a><a
                    class="btn btn-sm btn-falcon-default me-2" href="#!">2</a><a
                    class="btn btn-sm btn-falcon-default me-2" href="#!"> <span
                        class="fas fa-ellipsis-h"></span></a><a class="btn btn-sm btn-falcon-default me-2"
                    href="#!">5</a>
                <button class="btn btn-falcon-default btn-sm" type="button" data-bs-toggle="tooltip"
                    data-bs-placement="top" title="Next"><span class="fas fa-chevron-right"> </span></button>
            </div>
        </div>
    </div>
@endsection
