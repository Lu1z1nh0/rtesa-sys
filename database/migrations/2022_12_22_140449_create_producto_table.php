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
            $table->id();
            $table->string('nombre', 50);
            //relacionar con la tabla categoria
            $table->foreignId('categoria_id')->constrained('categoria');
            $table->string('sku', 50);
            $table->string('descripcion', 50);
            //relacionar con la tabla marca
            $table->foreignId('marca_id')->constrained('marca');
            $table->string ('OEM', 50)->nullable();
            $table->string('ref_1', 250)->nullable();
            $table->string('ref_2', 250)->nullable();
            $table->string('ref_3', 250)->nullable();
            $table->string('lote', 100);
            $table->date('fecha_ingreso');
            $table->integer('existencia');
            $table->integer('existencia_limite');
            //relacionar con la tabla estado_producto
            $table->foreignId('estado_producto_id')->constrained('estado_producto');
            $table->string('ficha_tecnica_herf', 250);
            $table->string('imagen_1_src', 250)->nullable();
            $table->string('imagen_2_src', 250)->nullable();
            $table->string('imagen_3_src', 250)->nullable();
            $table->string('imagen_4_src', 250)->nullable();
            $table->string('etiqueta_destacado', 50)->nullable();
            $table->string('garantia', 150)->nullable();
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
