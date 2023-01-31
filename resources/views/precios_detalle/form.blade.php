<div class="col-lg-6">
    <div class="mb-3">
        {{ Form::label('producto_id', 'Selecione el producto *', ['class' => 'form-label']) }}
        {{ Form::select('producto_id', $productos, $precioDetalle->producto_id, ['class' => 'form-control', 'placeholder' => 'Selecione un producto', 'required']) }}
    </div>
    <div class="mb-3">
        {{ Form::label('precio_id', 'Selecione el precio *', ['class' => 'form-label']) }}
        {{ Form::select('precio_id', $precios, $precioDetalle->precio_id, ['class' => 'form-control', 'placeholder' => 'Selecione un precio', 'required']) }}
    </div>
</div>
<div class="col-lg-3 mt-4">
    <button class="btn btn-primary me-1 mb-1" type="submit">Confirmar Precio del producto</button>
</div>