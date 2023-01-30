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
                        <br>
                        <br>
                        Los campos que contengan un <b class="text-danger">*</b> son obligatorios.
                </div>
            </div>
        </div>
    </div>
    {{-- formuarlio --}}
    <div class="card mb-3">
        <div class="mb-4 card-body">
            <h1>Agregar nuevo producto</h1>
            <form method="POST" action="{{ route('productos.store') }}" role="form" 
                enctype="multipart/form-data">
                @csrf
                @include('productos.form')
            </form>
        </div>
    </div>
@endsection
