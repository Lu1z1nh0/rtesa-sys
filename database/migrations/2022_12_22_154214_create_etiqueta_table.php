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
        Schema::create('etiqueta', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre', 20);
            //relacionar con la tabla producto
            $table->integer('producto_id')->unsigned();
            $table->foreign('producto_id')->references('id')->on('producto');
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
        Schema::dropIfExists('etiqueta');
    }
};
