<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cliente', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 100);
            $table->string('correo', 100);
            $table->string('direccion', 250);
            $table->string('nombre_empresa', 100);
            $table->string('municipio', 50);
            $table->string('departamento', 50);
            $table->string('password', 100);
            $table->string('telefono', 50);
            $table->string('whatsapp', 50);
            $table->string('website', 250);
            $table->string('nit', 50);
            $table->string('nrc', 100);
            //relacionar con la tabla rol
            $table->foreignId('rol_id')->constrained('rol');
            $table->string('estado', 50);
            $table->string('clasificacion', 50);
            $table->string('boletin', 100);
            $table->date('fecha_registro');
            $table->string('imagen_perfil_src', 250)->nullable();
            $table->string('notas', 250)->nullable();
            $table->string('estatus', 50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cliente');
    }
};
