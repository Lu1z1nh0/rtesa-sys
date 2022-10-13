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
                    <h3>📟 Marca de productos 📟</h3>
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
            <form action="">
                <div class="col-lg-6">
                    <div class="mb-3">
                        <label class="form-label" for="exampleFormControlInput1">Nombre de la marca</label>
                        <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="exampleFormControlTextarea1">Descripcion de la marca</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-lg-3">
                    <a href="{{ url('/dashboard/marcas/') }}">
                        <button class="btn btn-primary me-1 mb-1" type="button">Agregar
                        </button>
                    </a>
                </div>
            </form>
        </div>
    </div>
@endsection
