<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Marca;


class MarcaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Marca::create([
            'nombre' => 'TEMCO',
            'estado' => 'activo',
            'logo_src' => '\marcas\temco-logo.png',
        ]);

        Marca::create([
            'nombre' => 'CTI',
            'estado' => 'activo',
            'logo_src' => '\marcas\cti-logo.png',
        ]);

    }
}

