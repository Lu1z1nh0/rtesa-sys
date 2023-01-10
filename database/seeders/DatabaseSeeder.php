<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolSeeder::class);
        $this->call(UsuarioSeeder::class);
        /*
        $this->call(SustanciasSeeder::class);
        $this->call(ExperimentoSeeder::class);
        $this->call(SustanciaExperimentoSeeder::class);
        $this->call(MenuSeeder::class);
        $this->call(SubMenuSeeder::class);
        $this->call(RolMenuSeeder::class);
        $this->call(MoleculaSeeder::class);
        $this->call(EventoSeeder::class);
        $this->call(ElementosSeeder::class);
        $this->call(ElementoElectronesSeeder::class);
        $this->call(MateriaSeeder::class);
        $this->call(LaboratorioSeeder::class);
        */
    }
}
