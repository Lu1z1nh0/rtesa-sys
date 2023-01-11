<?php 
namespace Database\Seeders;

//use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        
        $this->call(PermisoSeeder::class);
        $this->call(CMSSeeder::class);
        
        $this->call(CategoriaSeeder::class);
        $this->call(MarcaSeeder::class);
        $this->call(EstadoProductoSeeder::class);
        //$this->call(ProductoSeeder::class);
        //$this->call(EtiquetaSeeder::class);
        //$this->call(PrecioSeeder::class);
        //$this->call(PrecioDetalleSeeder::class);

        $this->call(EventoSeeder::class);
        $this->call(ContactoProductoSeeder::class);
    }
}
