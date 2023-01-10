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
        Schema::create('precio_detalle', function (Blueprint $table) {
            $table->increments('id');
            //relacionar con la tabla producto
            $table->integer('producto_id')->unsigned();
            $table->foreign('producto_id')->references('id')->on('producto');
            //relacionar con la tabla precio
            $table->integer('precio_id')->unsigned();
            $table->foreign('precio_id')->references('id')->on('precio');
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
        Schema::dropIfExists('precio_detalle');
    }
};
