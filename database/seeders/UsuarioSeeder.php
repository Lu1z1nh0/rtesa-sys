<?php

use Illuminate\Database\Seeder;
use App\User;



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
                      'correo' => 'administrador@ues.edu.sv', 
                      'direccion' => '', 
                      'nombre_empresa' => '', 
                      'municipio' => '', 
                      'departamento' => '', 
                      'password' => bcrypt('ues$2020'), 
                      'telefono' => '', 
                      'whatsapp' => '', 
                      'website' => '', 
                      'nit' => '', 
                      'nrc' => '', 
                      'rol_id' => 1, 
                      'estado' => '', 
                      'clasificacion' => '', 
                      'boletin' => '', 
                      'fecha_registro' => '', 
                      'imagen_perfil_src' => '', 
                      'notas' => '', 
                      'estatus' => '',
                    ]);

        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'Oscar Carranza', 
                      'correo' => 'administrador@ues.edu.sv', 
                      'direccion' => '', 
                      'nombre_empresa' => '', 
                      'municipio' => '', 
                      'departamento' => '', 
                      'password' => bcrypt('ues$2020'), 
                      'telefono' => '', 
                      'whatsapp' => '', 
                      'website' => '', 
                      'nit' => '', 
                      'nrc' => '', 
                      'rol_id' => 1, 
                      'estado' => '', 
                      'clasificacion' => '', 
                      'boletin' => '', 
                      'fecha_registro' => '', 
                      'imagen_perfil_src' => '', 
                      'notas' => '', 
                      'estatus' => '',
                    ]);

        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'Guillermo Cartagena', 
                      'correo' => 'administrador@ues.edu.sv', 
                      'direccion' => '', 
                      'nombre_empresa' => '', 
                      'municipio' => '', 
                      'departamento' => '', 
                      'password' => bcrypt('ues$2020'), 
                      'telefono' => '', 
                      'whatsapp' => '', 
                      'website' => '', 
                      'nit' => '', 
                      'nrc' => '', 
                      'rol_id' => 1, 
                      'estado' => '', 
                      'clasificacion' => '', 
                      'boletin' => '', 
                      'fecha_registro' => '', 
                      'imagen_perfil_src' => '', 
                      'notas' => '', 
                      'estatus' => '',
                    ]);


        //Clientes
        User::create(['cliente_id_interno' => '-', 
                      'nombre' => 'Don Aprobado', 
                      'correo' => 'administrador@ues.edu.sv', 
                      'direccion' => '', 
                      'nombre_empresa' => '', 
                      'municipio' => '', 
                      'departamento' => '', 
                      'password' => bcrypt('ues$2020'), 
                      'telefono' => '', 
                      'whatsapp' => '', 
                      'website' => '', 
                      'nit' => '', 
                      'nrc' => '', 
                      'rol_id' => 1, 
                      'estado' => '', 
                      'clasificacion' => '', 
                      'boletin' => '', 
                      'fecha_registro' => '', 
                      'imagen_perfil_src' => '', 
                      'notas' => '', 
                      'estatus' => '',
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
                      'boletin' => '0', 
                      'fecha_registro' => '11-12-2022 11:21:44', 
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
                      'fecha_registro' => '10-12-2022 10:05:33', 
                      'imagen_perfil_src' => 'lucho10122022\lucho_profile.png', 
                      'notas' => '-', 
                      'estatus' => 'espera',
                    ]);

    }

}
