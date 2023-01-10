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
            $table->increments('id');
            $table->string('nombre', 35);
            $table->string('correo', 30)->unique();
            $table->string('password', 100);
            //relacionar con la tabla rol
            $table->integer('rol_id')->unsigned();
            $table->foreign('rol_id')->references('id')->on('rol');
            $table->string('estado', 10);
            $table->dateTime('fecha_registro');
            $table->string('imagen_perfil_src', 100);
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


