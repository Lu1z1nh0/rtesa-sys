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
            <form method="POST" action="{{ route('productos.store') }}" 
                enctype="multipart/form-data">
                @csrf
                <div class="row">
                    <div class="col-lg-6">
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Nombre del producto *</label>
                            <input class="form-control" id="nombre" name="nombre" type="text" placeholder="" required/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">SKU del producto *</label>
                            <input class="form-control" id="sku" name="sku" type="text" placeholder="" required/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Seleciona la marca *</label>
                            <select name="marca_id" class="form-select" aria-label="Default select example" required>
                                <option value="">Seleciona una marca</option>
                                @foreach ($marcas as $marca)
                                    <option value="{{ $marca['id'] }}">{{ $marca['nombre'] }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div>
                            <label class="form-label" for="exampleFormControlInput1">Estado del producto *</label>
                            <select name="estado_producto_id" class="form-select mb-3" aria-label="Default select example" required>
                                <option value="">Seleciona el estado del producto</option>
                                @foreach ($estadoProductos as $estadoProducto)
                                    <option value="{{ $estadoProducto['id'] }}">{{ $estadoProducto['estado'] }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlTextarea1">Descripcion del producto *</label>
                            <textarea class="form-control" id="descripcion" name="descripcion" rows="4" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Referencia 1 del producto</label>
                            <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Referencia 2 del producto</label>
                            <input class="form-control" id="ref_1" name="ref_1" type="text" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Referencia 3 del producto</label>
                            <input class="form-control" id="ref_2" name="ref_3" type="text" placeholder="" />
                        </div>
                        {{-- <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Precio del producto</label>
                            <input class="form-control" id="ref_3" name="ref_3" type="number" placeholder="" />
                        </div> --}}
                    </div>
                    <div class="col-lg-6">
                        <div>
                            <label class="form-label" for="exampleFormControlInput1">Seleciona la categoria *</label>
                            <select name="categoria_id" class="form-select mb-3" aria-label="Default select example" required>
                                <option value="">Seleciona una categoria</option>
                                @foreach ($categorias as $categoria)
                                    <option value="{{ $categoria['id'] }}">{{ $categoria['nombre'] }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Lote *</label>
                            <input class="form-control" id="lote" name="lote" type="number" placeholder="" required/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Fecha de ingreso *</label>
                            <input class="form-control" id="fecha_ingreso" name="fecha_ingreso" type="date"
                                placeholder="" required/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Existencia *</label>
                            <input class="form-control" id="existencia" name="existencia" type="number"
                                placeholder="" required/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Existencia Limite *</label>
                            <input class="form-control" id="existencia_limite" name="existencia_limite" type="number"
                                placeholder="" required/>
                        </div>  
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Etiqueta para destacar *</label>
                            <input class="form-control" id="etiqueta_destacado" name="etiqueta_destacado" type="text"
                                placeholder="" required/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">OEM del producto</label>
                            <input class="form-control" id="oem" name="oem" type="text" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Garantia</label>
                            <input class="form-control" id="garantia" name="garantia" type="text" placeholder="" />
                        </div>
                    </div>
                    <div>
                        <div class="mb-3">
                            <label class="form-label">Ficha tecnica (Archivos PDF)</label>
                            <input id="ficha_tecnica_herf" name="ficha_tecnica_herf" class="form-control"
                                type="file" />
                        </div>
                    </div>
                    <div>
                        <div class="mb-3">
                            <label class="form-label">Imagen del producto 1</label>
                            <input id="imagen_1_src" name="imagen_1_src" class="form-control" type="file" />
                        </div>
                    </div>
                    <div>
                        <div class="mb-3">
                            <label class="form-label">Imagen del producto 2</label>
                            <input id="imagen_2_src" name="imagen_2_src" class="form-control" type="file" />
                        </div>
                    </div>
                    <div>
                        <div class="mb-3">
                            <label class="form-label">Imagen del producto 3</label>
                            <input id="imagen_3_src" name="imagen_3_src" class="form-control" type="file" />
                        </div>
                    </div>
                    <div>
                        <div class="mb-3">
                            <label class="form-label">Imagen del producto 4</label>
                            <input id="imagen_4_src" name="imagen_4_src" class="form-control" type="file" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-4">
                    <button class="btn btn-primary me-1 mb-1" type="submit">Agregar producto</button>
                </div>
            </form>
        </div>
    </div>
@endsection
