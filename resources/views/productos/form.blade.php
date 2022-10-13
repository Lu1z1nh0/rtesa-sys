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
                </div>
            </div>
        </div>
    </div>
    {{-- formuarlio --}}
    <div class="card mb-3">
        <div class="mb-4 card-body">
            <h1>Agregar nuevo producto</h1>
            <form action="">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Nombre del producto</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlTextarea1">Descripcion del producto</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Precio del producto</label>
                            <input class="form-control" id="exampleFormControlInput1" type="number" placeholder="" />
                        </div>
                        <div>
                            <label class="form-label" for="exampleFormControlInput1">Seleciona la marca</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected=""></option>
                                <option value="1">Toyota</option>
                                <option value="2">Hyndai</option>
                                <option value="3">Ford</option>
                              </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">SKU del producto</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">OEM del producto</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="" />
                        </div>
                        <div>
                            <label class="form-label" for="exampleFormControlInput1">Seleciona la categoria</label>
                            <select class="form-select mb-3" aria-label="Default select example">
                                <option selected=""></option>
                                <option value="1">Fajas</option>
                                <option value="2">Silicones</option>
                                <option value="3">Pegamentos</option>
                                <option value="3">Lubricantes</option>
                                <option value="3">Limpiadores</option>
                                <option value="3">Soportes</option>
                              </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Referencia 1 del producto</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Referencia 2 del producto</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Referencia 3 del producto</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="" />
                        </div>
                    </div>
                    <div>
                        <div class="mb-3">
                            <label class="form-label">Imagen del producto</label>
                            <input class="form-control" type="file" />
                          </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-4">
                    <a href="{{ url('/dashboard/productos/') }}">
                        <button class="btn btn-primary me-1 mb-1" type="button">Agregar
                        </button>
                    </a>
                </div>
            </form>
        </div>
    </div>
@endsection
