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
            $table->id();
            //relacionar con la table envneto
            $table->foreignId('evento_id')->constrained('evento');
            //relacionar con la tabla adminitrador
            $table->foreignId('administrador_id')->constrained('administrador');
            //relacionar con la tabla cliente
            $table->foreignId('cliente_id')->constrained('cliente');
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
