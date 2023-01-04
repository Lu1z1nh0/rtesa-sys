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
        Schema::create('administrador', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 50);
            $table->string('correo', 100);
            $table->string('contrasena', 100);
            //relacionar con la tabla rol
            $table->foreignId('rol_id')->constrained('rol');
            $table->string('estado', 50);
            $table->date('fecha_registro');
            $table->string('imagen_perfil_src', 250);
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
        Schema::dropIfExists('administrador');
    }
};
