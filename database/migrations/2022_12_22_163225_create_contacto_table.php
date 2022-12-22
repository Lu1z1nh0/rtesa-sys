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
        Schema::create('contacto', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 50);
            $table->string('correo', 50);
            $table->string('nombre_empresa', 50)->nullable();
            $table->string('numero_whatsapp', 50)->nullable();
            $table->string('mensaje', 250);
            $table->string('boletin', 50);
            $table->dateTime('fecha_hora_form');
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
        Schema::dropIfExists('contacto');
    }
};
