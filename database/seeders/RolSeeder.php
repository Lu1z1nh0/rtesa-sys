<?php

use Illuminate\Database\Seeder;
use App\Rol;


class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Rol::create([
            'id' => 3,
            'nombre_rol' => 'Administrador',
            'descripcion_rol' => 'Administrador de usuarios'
        ]);
        Rol::create([
            'id' => 2,
            'nombre_rol' => 'Docente',
            'descripcion_rol' => 'Administrador Web contenido, cargas de datos'
        ]);
        Rol::create([
            'id' => 1,
            'nombre_rol' => 'Alumno',
            'descripcion_rol' => 'Acceso a reportes en general'
        ]);


    }
}