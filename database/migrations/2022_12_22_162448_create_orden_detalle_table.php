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
        Schema::create('orden_detalle', function (Blueprint $table) {
            $table->increments('id');
            //relacionar con la tabla orden
            $table->integer('orden_id')->unsigned();
            $table->foreign('orden_id')->references('id')->on('orden');
            //relacionar con la tabla producto
            $table->integer('producto_id')->unsigned();
            $table->foreign('producto_id')->references('id')->on('producto');
            $table->integer('cantidad')->unsigned();
            $table->double('precio', 5, 2);
            $table->double('descuento', 2, 2);
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
        Schema::dropIfExists('orden_detalle');
    }
};
