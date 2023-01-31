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
                    <h3>🏷️ Precios 🏷️</h3>
                    <p class="mt-2">Administracion de precios <b>para Thompson.</b> Aqui podras encontrar todos los
                        precios de los productos, podras tener un control de los precios de los productos, editar,
                        agregar e eliminar.
                </div>
            </div>
        </div>
    </div>
    {{-- Tabla de precios --}}
    <div class="row mb-3 justify-content-md-center">
        <div class="col">
            <a href="{{ route('precios.create') }}">
                <button class="btn btn-primary me-1 mb-1" type="button"><i class="fas fa-plus"></i> Agregar un nuevo precio
                </button>
            </a>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header">
            <div class="row flex-between-end">
                <div class="col-auto align-self-center">
                    <h5 class="mb-0" data-anchor="data-anchor">Tabla de precios para productos</h5>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="table-responsive scrollbar">
                <table id="table_precio_productos" class="table display">
                    <thead>
                        <tr>
                            <th scope="col">Tipo de precio</th>
                            <th scope="col">Precio / Monto</th>
                            <th scope="col">Estado</th>
                            <th class="text-end" scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($precios as $precio)
                            <tr>
                                <td>{{ $precio->precio_Tipo }}</td>
                                <td>{{ $precio->precio_Monto }}</td>
                                <td>{{ $precio->estado }}</td>
                                <td class="text-end">
                                    <form action="{{ route('precios.destroy', $precio->id) }}"
                                        method="POST">
                                        <a href="{{ route('precios.edit', $precio->id) }}">
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
            $('#table_precio_productos').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'excel', 'pdf'
                ]
            });
        });
    </script>
@endsection
