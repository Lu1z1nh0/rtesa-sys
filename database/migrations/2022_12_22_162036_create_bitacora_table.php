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
        Schema::create('bitacora', function (Blueprint $table) {
            $table->increments('id');
            //relacionar con la table envneto
            $table->integer('evento_id')->unsigned();
            $table->foreign('evento_id')->references('id')->on('evento');
            //relacionar con la tabla adminitrador
            $table->integer('administrador_id')->unsigned();
            $table->foreign('administrador_id')->references('id')->on('administrador');
            //relacionar con la tabla cliente
            $table->integer('cliente_id')->unsigned();
            $table->foreign('cliente_id')->references('id')->on('cliente');
            //campo para guardar la fecha y hora de la bitacora
            $table->dateTime('hora_fecha');
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
        Schema::dropIfExists('bitacora');
    }
};
