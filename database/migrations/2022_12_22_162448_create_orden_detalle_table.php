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
            $table->id();
            //relacionar con la tabla orden
            $table->foreignId('orden_id')->constrained('orden');
            //relacionar con la tabla producto
            $table->foreignId('producto_id')->constrained('producto');
            $table->string('cantidad', 50);
            $table->string('precio', 50);
            $table->string('descuento', 50);
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
