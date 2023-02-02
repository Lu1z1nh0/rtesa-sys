<div class="row">
    <div class="col-lg-6">
        <div class="mb-3">
            {{ Form::label('nombre', 'Nombre del producto *', ['class' => 'form-label']) }}
            {{ Form::text('nombre', $producto->nombre, ['class' => 'form-control', 'placeholder' => '', 'required']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('sku', 'SKU del producto *', ['class' => 'form-label']) }}
            {{ Form::text('sku', $producto->sku, ['class' => 'form-control', 'placeholder' => '', 'required']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('marca_id', 'Seleciona la marca *', ['class' => 'form-label']) }}
            {{ Form::select('marca_id', $marcas, $producto->marca_id, ['class' => 'form-select', 'aria-label' => 'Default select example', 'required', 'placeholder'=>'Selecione una marca']) }}
        </div>
        <div>
            {{ Form::label('estado_producto_id', 'Estado del producto *', ['class' => 'form-label']) }}
            {{ Form::select('estado_producto_id', $estadoProductos, $producto->estado_producto_id, ['class' => 'form-select mb-3', 'aria-label' => 'Default select example', 'required', 'placeholder'=>'Selecione el estado']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('descripcion', 'Descripcion del producto *', ['class' => 'form-label']) }}
            {{ Form::textarea('descripcion', $producto->descripcion, ['class' => 'form-control', 'rows' => '4', 'required']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('ref_1', 'Referencia 1 del producto', ['class' => 'form-label']) }}
            {{ Form::text('ref_1', $producto->ref_1, ['class' => 'form-control', 'placeholder' => '']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('ref_2', 'Referencia 2 del producto', ['class' => 'form-label']) }}
            {{ Form::text('ref_2', $producto->ref_2, ['class' => 'form-control', 'placeholder' => '']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('ref_3', 'Referencia 3 del producto', ['class' => 'form-label']) }}
            {{ Form::text('ref_3', $producto->ref_3, ['class' => 'form-control', 'placeholder' => '']) }}
        </div>
    </div>
    <div class="col-lg-6">
        <div class="mb-3">
            {{ Form::label('categoria', 'Seleciona la categoria*', ['class' => 'form-label']) }}
            {{ Form::select('categoria_id', $categorias, $producto->categoria_id, ['class' => 'form-select', 'aria-label' => 'Default select example', 'required', 'placeholder'=>'Selecione la categoria']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('lote', 'Lote*', ['class' => 'form-label']) }}
            {{ Form::text('lote', $producto->lote, ['class' => 'form-control', 'placeholder' => '', 'required']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('fecha_ingreso', 'Fecha de ingreso*', ['class' => 'form-label']) }}
            {{ Form::date('fecha_ingreso', $producto->fecha_ingreso, ['class' => 'form-control', 'placeholder' => '', 'required']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('existencia', 'Exsistencia*', ['class' => 'form-label']) }}
            {{ Form::number('existencia', $producto->existencia, ['class' => 'form-control', 'placeholder' => '', 'required']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('existencia_limite', 'Existencia limite*', ['class' => 'form-label']) }}
            {{ Form::number('existencia_limite', $producto->existencia_limite, ['class' => 'form-control', 'placeholder' => '', 'required']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('etiqueta_destacado', 'Etiqueta para destacar*', ['class' => 'form-label']) }}
            {{ Form::number('etiqueta_destacado', $producto->etiqueta_destacado, ['class' => 'form-control', 'placeholder' => '', 'required']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('oem', 'OEM del producto', ['class' => 'form-label']) }}
            {{ Form::text('oem', $producto->OEM, ['class' => 'form-control', 'placeholder' => '']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('garantia', 'Garantia del producto', ['class' => 'form-label']) }}
            {{ Form::text('garantia', $producto->garantia, ['class' => 'form-control', 'placeholder' => '']) }}
        </div>
    </div>
    <div class="mb-3">
        {{ Form::label('ficha_tecnica_herf', 'Ficha tecnica del producto', ['class' => 'form-label']) }}
        {{ Form::file('ficha_tecnica_herf', $producto->ficha_tecnica_herf, ['class' => 'form-control', 'placeholder' => '']) }}
    </div>
    <div class="mb-3">
        {{ Form::label('imagen_1_src', 'Imagen del producto principal', ['class' => 'form-label']) }}
        {{ Form::file('imagen_1_src', $producto->imagen_1_src, ['class' => 'form-control', 'placeholder' => '']) }}
    </div>
    <div class="mb-3">
        {{ Form::label('imagen_2_src', 'Imagen del producto extra', ['class' => 'form-label']) }}
        {{ Form::file('imagen_2_src', $producto->imagen_2_src, ['class' => 'form-control', 'placeholder' => '']) }}
    </div>
    <div class="mb-3">
        {{ Form::label('imagen_3_src', 'Imagen del producto extra', ['class' => 'form-label']) }}
        {{ Form::file('imagen_3_src', $producto->imagen_3_src, ['class' => 'form-control', 'placeholder' => '']) }}
    </div>
    <div class="mb-3">
        {{ Form::label('imagen_4_src', 'Imagen del producto extra', ['class' => 'form-label']) }}
        {{ Form::file('imagen_4_src', $producto->imagen_4_src, ['class' => 'form-control', 'placeholder' => '']) }}
    </div>
    <div class="mt-4">
        <h4>Tabla de precios</h4>
    </div>
    <div class="col-lg-6">
        <div class="mb-3">
            {{ Form::label('precio_id_1', 'Precio 1', ['class' => 'form-label']) }}
            {{ Form::select('precio_id_1', $precios, $preciosDetalle->precio_id, ['class' => 'form-control', 'placeholder' => 'Selecione un precio', 'required']) }}
        </div>
        {{-- <div class="mb-3">
            {{ Form::label('precio_id_3', 'Precio 3', ['class' => 'form-label']) }}
            {{ Form::select('precio_id_3', $precios, $preciosDetalle->precio_id, ['class' => 'form-control', 'placeholder' => 'Selecione un precio']) }}
        </div> --}}
    </div>
    {{-- <div class="col-lg-6">
        <div class="mb-3">
            {{ Form::label('precio_id_2', 'Precio 2', ['class' => 'form-label']) }}
            {{ Form::select('precio_id_2', $precios, $preciosDetalle->precio_id, ['class' => 'form-control', 'placeholder' => 'Selecione un precio']) }}
        </div>
        <div class="mb-3">
            {{ Form::label('precio_id_4', 'Precio 4', ['class' => 'form-label']) }}
            {{ Form::select('precio_id_4', $precios, $preciosDetalle->precio_id, ['class' => 'form-control', 'placeholder' => 'Selecione un precio']) }}
        </div>
    </div> --}}
</div>
<div class="col-lg-3 mt-4">
    <button class="btn btn-primary me-1 mb-1" type="submit">Confirmar producto</button>
</div>
{{ Form::close() }}
