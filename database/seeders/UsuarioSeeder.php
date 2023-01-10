<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;



class UsuarioSeeder extends Seeder
{
    /*
     * Run the database seeds.
     *
     * @return void
     *
     */

    public function run()
    {
        //Administradores
        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'Pedro Pozo', 
                      'correo' => 'desarrollo@markcoweb.com', 
                      'direccion' => '-', 
                      'nombre_empresa' => '-', 
                      'municipio' => '-', 
                      'departamento' => '-', 
                      'password' => bcrypt('Admin_123*'), 
                      'telefono' => '-', 
                      'whatsapp' => '-', 
                      'website' => '-', 
                      'nit' => null, 
                      'nrc' => null, 
                      'rol_id' => 1, 
                      'estado' => 'activo', 
                      'clasificacion' => '-', 
                      'boletin' => '0', 
                      'fecha_registro' => '2022-12-05 08:11:33', 
                      'imagen_perfil_src' => 'pedro05122022\pedro_profile.png', 
                      'notas' => '-', 
                      'estatus' => 'otro',
                    ]);

        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'Oscar Carranza', 
                      'correo' => 'soporte@markcoweb.com', 
                      'direccion' => '-', 
                      'nombre_empresa' => '-', 
                      'municipio' => '-', 
                      'departamento' => '-', 
                      'password' => bcrypt('Admin_123*'), 
                      'telefono' => '-', 
                      'whatsapp' => '-', 
                      'website' => '-', 
                      'nit' => null, 
                      'nrc' => null, 
                      'rol_id' => 1, 
                      'estado' => 'activo', 
                      'clasificacion' => '-', 
                      'boletin' => '0', 
                      'fecha_registro' => '2022-12-05 08:12:43', 
                      'imagen_perfil_src' => 'oscar05122022\oscar_profile.png', 
                      'notas' => '-', 
                      'estatus' => 'otro',
                    ]);

        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'Guillermo Cartagena', 
                      'correo' => 'programacion@markcoweb.com', 
                      'direccion' => '-', 
                      'nombre_empresa' => '-', 
                      'municipio' => '-', 
                      'departamento' => '-', 
                      'password' => bcrypt('Admin_123*'), 
                      'telefono' => '-', 
                      'whatsapp' => '-', 
                      'website' => '-', 
                      'nit' => null, 
                      'nrc' => null, 
                      'rol_id' => 1, 
                      'estado' => 'activo', 
                      'clasificacion' => '-', 
                      'boletin' => '0', 
                      'fecha_registro' => '2022-12-08 09:10:21', 
                      'imagen_perfil_src' => 'guill08122022\guill_profile.png', 
                      'notas' => '-', 
                      'estatus' => 'otro',
                    ]);

        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'Edgar Sandoval', 
                      'correo' => 'esandoval@markcoweb.com', 
                      'direccion' => '-', 
                      'nombre_empresa' => '-', 
                      'municipio' => '-', 
                      'departamento' => '-', 
                      'password' => bcrypt('Admin_123*'), 
                      'telefono' => '-', 
                      'whatsapp' => '-', 
                      'website' => '-', 
                      'nit' => null, 
                      'nrc' => null, 
                      'rol_id' => 1, 
                      'estado' => 'activo', 
                      'clasificacion' => '-', 
                      'boletin' => '0', 
                      'fecha_registro' => '2023-01-05 10:12:56', 
                      'imagen_perfil_src' => 'esan05012023\esan_profile.png', 
                      'notas' => '-', 
                      'estatus' => 'otro',
                    ]);

        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'RT Test User', 
                      'correo' => 'admin@rtelsalvador.com', 
                      'direccion' => '-', 
                      'nombre_empresa' => '-', 
                      'municipio' => '-', 
                      'departamento' => '-', 
                      'password' => bcrypt('admin123456*'), 
                      'telefono' => '-', 
                      'whatsapp' => '-', 
                      'website' => '-', 
                      'nit' => null, 
                      'nrc' => null, 
                      'rol_id' => 1, 
                      'estado' => 'activo', 
                      'clasificacion' => '-', 
                      'boletin' => '0', 
                      'fecha_registro' => '2023-01-01 11:15:41', 
                      'imagen_perfil_src' => 'test01012023\test_profile.png', 
                      'notas' => '-', 
                      'estatus' => 'otro',
                    ]);


        //Clientes
        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'Don Aprobado', 
                      'correo' => 'ventas@kartoys.com.sv', 
                      'direccion' => '49 av. norte, local #1, col. Ursula', 
                      'nombre_empresa' => 'KarToys S.A. de C.V.', 
                      'municipio' => 'San Salvador', 
                      'departamento' => 'San Salvador', 
                      'password' => bcrypt('user123456*'), 
                      'telefono' => '2122-5441', 
                      'whatsapp' => '7982-0170', 
                      'website' => 'kartoys.com.sv', 
                      'nit' => '0614-091285-111-2', 
                      'nrc' => '133256-5', 
                      'rol_id' => 2, 
                      'estado' => 'activo', 
                      'clasificacion' => 'Plata', 
                      'boletin' => '1', 
                      'fecha_registro' => '2023-01-06 15:12:44', 
                      'imagen_perfil_src' => 'donap06012023\donap_profile.png', 
                      'notas' => '-', 
                      'estatus' => 'aprobado',
                    ]);


        //Aspirantes
        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'Juan Pruebas', 
                      'correo' => 'juancho@carbunny.com', 
                      'direccion' => '9na ca. poniente, edificio sefas, nivel 2 local #14, Col. Escalón', 
                      'nombre_empresa' => 'Car Bunny S.A. de C.V.', 
                      'municipio' => 'San Salvador', 
                      'departamento' => 'San Salvador', 
                      'password' => bcrypt('aspirante123*'), 
                      'telefono' => '2265-6781', 
                      'whatsapp' => '7998-0100', 
                      'website' => 'carbunny.com.sv', 
                      'nit' => '0614-111091-111-3', 
                      'nrc' => '113448-1', 
                      'rol_id' => 2, 
                      'estado' => 'activo', 
                      'clasificacion' => '-', 
                      'boletin' => '1', 
                      'fecha_registro' => '2022-12-11 11:21:44', 
                      'imagen_perfil_src' => 'juancho11122022\juancho_profile.png', 
                      'notas' => '-', 
                      'estatus' => 'espera',
                    ]);

        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'Lucho en Pruebas', 
                      'correo' => 'lucho@autotool.com', 
                      'direccion' => '4ta av. norte, local #32, col. Esquival', 
                      'nombre_empresa' => 'AutoTool S.A.', 
                      'municipio' => 'San Salvador', 
                      'departamento' => 'San Salvador', 
                      'password' => bcrypt('aspirante123*'), 
                      'telefono' => '2425-9021', 
                      'whatsapp' => '7867-0999', 
                      'website' => 'autotool.com.sv', 
                      'nit' => '0614-020688-111-4', 
                      'nrc' => '123456-7', 
                      'rol_id' => 2, 
                      'estado' => 'activo', 
                      'clasificacion' => '-', 
                      'boletin' => '0', 
                      'fecha_registro' => '2022-12-10 10:05:33', 
                      'imagen_perfil_src' => 'lucho10122022\lucho_profile.png', 
                      'notas' => '-', 
                      'estatus' => 'espera',
                    ]);

    }

}
