<div class="col-lg-6">
    <div class="mb-3">
        {{ Form::label('precio_Tipo', 'Tipo de precio *', ['class' => 'form-label']) }}
        {{ Form::text('precio_Tipo', $precio->precio_Tipo, ['class' => 'form-control', 'placeholder' => '', 'required']) }}
    </div>
    <div class="mb-3">
        {{ Form::label('precio_Monto', 'Precio/Monto *', ['class' => 'form-label']) }}
        {{ Form::text('precio_Monto', $precio->precio_Monto, ['class' => 'form-control', 'placeholder' => '', 'required']) }}
    </div>
    <div class="mb-3">
        {{ Form::label('estado', 'Estado *', ['class' => 'form-label']) }}
        {{ Form::text('estado', $precio->estado, ['class' => 'form-control', 'placeholder' => '', 'required']) }}
    </div>
</div>
<div class="col-lg-3 mt-4">
    <button class="btn btn-primary me-1 mb-1" type="submit">Confirmar Precio</button>
</div>