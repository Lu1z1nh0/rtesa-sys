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
                    <h3>🏷️ Precios 🏷️</h3>
                    <p class="mt-2">Administracion de precios <b>para Thompson.</b> Aqui podras encontrar todos los
                        precios de los productos, podras tener un control de los precios de los productos, editar,
                        agregar e eliminar.
                </div>
            </div>
        </div>
    </div>
    <div class="card card-default">
        <div class="card-header">
            <span class="card-title">Update Formulario Excel</span>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('precios.update', $precio->id) }}"  role="form" enctype="multipart/form-data">
                {{ method_field('PATCH') }}
                @csrf

                @include('precios.form')

            </form>
        </div>
    </div>
@endsection
