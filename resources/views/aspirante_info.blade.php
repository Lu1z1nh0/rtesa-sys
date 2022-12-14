@extends('layouts.layout')

@section('main-content')
    <div class="m-0 vh-100 row justify-content-center align-items-center">
        <div class="col-auto p-5 text-center">
            <i class="fas fa-align-left text-500 fs-6"></i>
            <div class="mb-5">
                <h3>¡Hola! Casi finalizamos, complete la siguiente informacion para terminar el proceso.</h3>
            </div>
            <form action="">
                <div class="row">
                    <div class="col-lg-4">
                        <label for="nombre" class="form-label">Nombre Completo</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre"
                            required>
                        <label for="direccion" class="form-label">Dirección</label>
                        <textarea rows="4" type="text" class="form-control" id="direccion" name="direccion" placeholder="Direccion" required> </textarea>
                        <label for="municipio" class="form-label">Municipio</label>
                        <input type="text" class="form-control" id="municipio" name="municipio" placeholder="Municipio"
                            required>
                        
                    </div>
                    <div class="col-lg-4">
                        <label for="departamento" class="form-label">Departamento</label>
                        <input type="text" class="form-control" id="departamento" name="departamento" placeholder="Departamento"
                            required>
                        <label for="remision" class="form-label">Nota de Remisión</label>
                        <input type="text" class="form-control" id="remision" name="remision" placeholder="Remisión"
                            required>
                        <label for="giro" class="form-label">Giro</label>
                        <input type="text" class="form-control" id="giro" name="giro" placeholder="Giro"
                            required>
                        <label for="fecha" class="form-label">Fecha</label>
                        <input type="Date" class="form-control" id="fecha" name="fecha" placeholder="Date"
                            required>
                        
                    </div>
                    <div class="col-lg-4">
                        <label for="nit" class="form-label">N.I.T</label>
                        <input type="text" class="form-control" id="nit" name="nit" placeholder="NIT" required>
                        <label for="nrc" class="form-label">N.R.C</label>
                        <input type="text" class="form-control" id="nrc" name="nrc" placeholder="NRC" required>
                        <label for="cuenta" class="form-label">Venta a Cuenta de</label>
                        <input type="text" class="form-control" id="cuenta" name="cuenta" placeholder="Cuenta"
                            required>
                        <label for="operacion" class="form-label">Cond. de Operación</label>
                        <input type="text" class="form-control" id="operacion" name="operacion" placeholder="Operación"
                            required>
                    </div>
                </div>
                <a href="/aprobacion">
                    <button class="btn btn-primary me-1 mb-1 mt-4" type="button">Finalizar
                    </button>
                </a>
            </form>
        </div>
    </div>
@endsection
