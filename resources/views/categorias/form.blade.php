<div class="col-lg-6">
    <div class="mb-3">
        {{ Form::label('nombre', 'Ingrese el nombre *', ['class' => 'form-label']) }}
        {{ Form::text('nombre', $categoria->nombre, ['class' => 'form-control', 'placeholder' => 'Nombre', 'required']) }}
    </div>
    <div class="mb-3">
        {{ Form::label('estado', 'Ingrese el estado *', ['class' => 'form-label']) }}
        {{ Form::text('estado', $categoria->estado, ['class' => 'form-control', 'placeholder' => 'Estado', 'required']) }}
    </div>
</div>
<div class="col-lg-3 mt-4">
    <button class="btn btn-primary me-1 mb-1" type="submit">Confirmar Precio del producto</button>
</div>