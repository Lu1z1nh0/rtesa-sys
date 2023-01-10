<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Rol;


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
            'id' => 1,
            'nombre' => 'Administrador',
            'descripcion' => 'Administrador del Sistema.',
            'estado' => 'activo',
        ]);

        Rol::create([
            'id' => 2,
            'nombre' => 'Cliente',
            'descripcion' => 'Acceso a la tienda según aprobación del Administrador.',
            'estado' => 'activo',
        ]);

        Rol::create([
            'id' => 3,
            'nombre' => 'SuperAdmin',
            'descripcion' => 'Administrador del Sistema con permisos extendidos.',
            'estado' => 'activo',
        ]);


    }
}

