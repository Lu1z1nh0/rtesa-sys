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
        Schema::create('usuario', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cliente_id_interno', 10)->nullable();
            $table->string('nombre', 35);
            $table->string('correo', 30)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 100);

            $table->string('direccion', 80);
            $table->string('nombre_empresa', 35);
            $table->string('municipio', 22);
            $table->string('departamento', 15);
            $table->string('telefono', 20);
            $table->string('whatsapp', 20);
            $table->string('website', 35);
            $table->string('nit', 18)->unique();
            $table->string('nrc', 10)->unique();
            //relacionar con la tabla rol
            $table->integer('rol_id')->unsigned();
            $table->foreign('rol_id')->references('id')->on('rol');
            $table->string('estado', 10);
            $table->string('clasificacion', 10);
            $table->boolean('boletin');
            $table->dateTime('fecha_registro');
            $table->string('imagen_perfil_src', 60)->nullable();
            $table->string('notas', 300)->nullable();
            $table->string('estatus', 15);

            $table->rememberToken();
            $table->timestamps();
        });

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down()
        {
            Schema::dropIfExists('usuario');
        }
    };
}
