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
                    <h3>🏷️ Precios  🏷️</h3>
                    <p class="mt-2">Administracion de precios <b>para Thompson.</b> Aqui podras encontrar todos los
                        precios de los productos, podras tener un control de los precios de los productos, editar,
                        agregar e eliminar.
                </div>
            </div>
        </div>
    </div>
    {{-- formuarlio --}}
    <div class="card mb-3">
        <div class="mb-4 card-body">
            <h1>Agregar nuevo precio para un producto</h1>
            <form method="POST" action="{{ route('precios_detalle.store') }}" role="form" 
                enctype="multipart/form-data">
                @csrf
                @include('precios_detalle.form')
            </form>
        </div>
    </div>
    <script>
        $(document).ready(function() {
            $('#table_precio').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'excel', 'pdf'
                ]
            });
        });
    </script>
@endsection
