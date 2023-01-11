<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CMS;

class CMSSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        CMS::create([
            'variable' => 'numWhat',
            'parametro' => '7736-1910',
        ]);

        CMS::create([
            'variable' => 'numFijo',
            'parametro' => '2566-7777',
        ]);

        CMS::create([
            'variable' => 'numFijoURL',
            'parametro' => 'tel://+50325667777',
        ]);

        CMS::create([
            'variable' => 'fbURL',
            'parametro' => '#',
        ]);

        CMS::create([
            'variable' => 'igURL',
            'parametro' => '#',
        ]);

        CMS::create([
            'variable' => 'dirOF',
            'parametro' => 'Prolongación Juan Pablo II, Urbanización Guerrero, Pasaje Triunfal, # 2-B, San Salvador.',
        ]);

        CMS::create([
            'variable' => 'horarioOF',
            'parametro' => 'Lun-Jue: 8:00 - 6:00 p.m. | Vie: 8:00 - 5:00 p.m.',
        ]);

        CMS::create([
            'variable' => 'dirBod',
            'parametro' => 'Zona Franca, Santa Tecla.',
        ]);

        CMS::create([
            'variable' => 'horarioBod',
            'parametro' => 'Lun-Vie: 8:00 - 5:00 p.m. | Sáb: 8:00 - 12:00 m.d.',
        ]);

        CMS::create([
            'variable' => 'corrContacto',
            'parametro' => 'info@rtelsalvador.com',
        ]);

        CMS::create([
            'variable' => 'corrContacto',
            'parametro' => 'info@rtelsalvador.com',
        ]);

        CMS::create([
            'variable' => 'corrOrden',
            'parametro' => 'ventas@rtelsalvador.com, admin@rtelsalvador',
        ]);

    }
}

