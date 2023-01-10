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
        Schema::create('producto', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre', 30);
            //relacionar con la tabla categoria
            //$table->foreignId('categoria_id')->constrained('categoria');
            $table->integer('categoria_id')->unsigned();
            $table->foreign('categoria_id')->references('id')->on('categoria');
            $table->string('sku', 10)->unique();
            $table->string('descripcion', 300);
            //relacionar con la tabla marca
            $table->integer('marca_id')->unsigned();
            $table->foreign('marca_id')->references('id')->on('marca');
            $table->string ('OEM', 12)->nullable();
            $table->string('ref_1', 20)->nullable();
            $table->string('ref_2', 20)->nullable();
            $table->string('ref_3', 20)->nullable();
            $table->string('lote', 20);
            $table->date('fecha_ingreso');
            $table->integer('existencia')->unsigned();
            $table->integer('existencia_limite')->unsigned();
            //relacionar con la tabla estado_producto
            $table->integer('estado_producto_id')->unsigned();
            $table->foreign('estado_producto_id')->references('id')->on('estado_producto');
            $table->string('ficha_tecnica_herf', 60)->nullable();
            $table->string('imagen_1_src', 60)->nullable();
            $table->string('imagen_2_src', 60)->nullable();
            $table->string('imagen_3_src', 60)->nullable();
            $table->string('imagen_4_src', 60)->nullable();
            $table->boolean('etiqueta_destacado');
            $table->string('garantia', 10)->nullable();
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
        Schema::dropIfExists('producto');
    }
};
