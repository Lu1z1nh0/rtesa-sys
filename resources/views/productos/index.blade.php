@extends('layouts.default')

@section('dashboard')
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.3.2/css/buttons.dataTables.min.css">
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.13.1/b-2.3.3/b-colvis-2.3.3/b-html5-2.3.3/b-print-2.3.3/date-1.2.0/datatables.min.css" />

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script type="text/javascript"
        src="https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.13.1/b-2.3.3/b-colvis-2.3.3/b-html5-2.3.3/b-print-2.3.3/date-1.2.0/datatables.min.js">
    </script>
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
                        data-countup='{"endValue":58.386,"decimalPlaces":2,"suffix":"k"}'>
                        {{-- contar los productos activos de la base de datos --}}
                        <?php
                        $productosActivos = DB::table('producto')
                            ->where('estado_producto_id', '1')
                            ->get();
                        echo count($productosActivos);
                        ?>    
                    </div>
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
                        data-countup='{"endValue":23.434,"decimalPlaces":2,"suffix":"k"}'>
                    {{-- contar los productos activos de la base de datos --}}
                    <?php
                    $productosInactivos = DB::table('producto')
                        ->where('estado_producto_id', '2')
                        ->get();
                    echo count($productosInactivos);
                    ?> </div>
                </div>
            </div>
        </div>
    </div>
    {{-- Tabla de productos --}}
    <div class="row mb-3 justify-content-md-center">
        <div class="col">
            <a href="{{ route('productos.create') }}">
                <button class="btn btn-primary me-1 mb-1" type="button"><i class="fas fa-plus"></i> Agregar nueva producto
                </button>
            </a>
        </div>
    </div>
    {{-- <div class="row mb-3">
        <div class="col-lg-6">
            <label class="form-label" for="exampleFormControlInput1">Buscar Producto</label>
            <input class="form-control" type="text" placeholder="Alternador" />
        </div>
        <div class="col-lg-6 d-flex align-items-end">
            <button class="btn btn-primary me-1 mb-1 mt-2" type="button"><i class="fas fa-search"></i> Buscar Producto
            </button>
        </div>
    </div> --}}
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
                <table id="table_productos" class="table display">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
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
                        @foreach ($productos as $producto)
                            <tr>
                                <td>{{ $producto->nombre }}</td>
                                <td>{{ $producto->descripcion }}</td>
                                <td>{{ $producto->marca->nombre }}</td>
                                <td>{{ $producto->sku }}</td>
                                <td>{{ $producto->OEM }}</td>
                                <td>{{ $producto->categoria->nombre }}</td>
                                <td>{{ $producto->ref_1 }}</td>
                                <td>{{ $producto->ref_2 }}</td>
                                <td>{{ $producto->ref_3 }}</td>
                                <td class="text-end">
                                    <form action="{{ route('productos.destroy', $producto->id) }}"
                                        method="POST">
                                        <a href="{{ route('productos.edit', $producto->id) }}">
                                            <button class="btn p-0" type="button" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Edit"><span
                                                class="text-500 fas fa-edit"></span></button></a>
                                        @csrf
                                        @method('DELETE')
                                        <button class="btn p-0 ms-2" type="submit" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Delete"><span
                                                class="text-500 fas fa-trash-alt"></span></button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function() {
            $('#table_productos').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'excel', 'pdf'
                ]
            });
        });
    </script>
@endsection
