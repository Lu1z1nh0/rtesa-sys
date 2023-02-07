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
    {{-- formuarlio --}}
    <div class="card mb-3">
        <div class="mb-4 card-body">
            <h1>Agregar nueva marca</h1>
            <form method="POST" action="{{ route('marcas.store') }}" role="form" 
                enctype="multipart/form-data">
                @csrf
                @include('marcas.form')
            </form>
        </div>
    </div>
@endsection
