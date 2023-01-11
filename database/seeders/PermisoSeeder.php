<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permiso;

class PermisoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Permiso::create([
            'nombre' => 'ver todos menus admin',
            'nivel' => '1',
            'estado' => 'activo',
            'rol_id' => '3',
        ]);

        Permiso::create([
            'nombre' => 'ver todos menus admin - restringido',
            'nivel' => '2',
            'estado' => 'activo',
            'rol_id' => '1',
        ]);

        Permiso::create([
            'nombre' => 'ver tienda',
            'nivel' => '3',
            'estado' => 'activo',
            'rol_id' => '2',
        ]);

    }
}

