<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Rol;
use Illuminate\Http\Request;
use Faker\Factory as Faker;
use App\Mail\Password;

use Illuminate\Support\Facades\DB;


class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth',['except' => ['forgotpassword','link_recovery','link_recovered','password']]);
        $this->middleware('admin',['only' => ['index','nuevoUsuario','nuevoUsuarioGuardar','updateGuardar','update']]);
        $this->middleware('isStaff',['only' => ['bitacoraUsuariosExperimentos']]);

    }
    /*
    |--------------------------------------------------------------------------
    | No tiene funcion aun
    |--------------------------------------------------------------------------
    */
    public function index()
    {

     /*   $users= DB::select(
<<<SQL
SELECT * FROM usuarios
SQL
        );

        return view('usuario.gestionarusuario',['users'=>$users]);*/


        $users = User::with('rol')->get();
        return view('usuario.gestionarusuario',['users'=>$users]);


    }

    public function nuevoUsuario(Request $request)
    {

     $roles = Rol::all();
     $estados = EstadoUsuario::all();

     return view('usuario.nuevoUsuario',['roles'=>$roles,'estados'=>$estados]);

    }

    public function nuevoUsuarioGuardar(Request $request)
    {
        $nombres = $request->nombres;
        $apellidos = $request->apellidos;
        $correo = $request->correo;
        $idRol = $request->idRol;
        $idEstado = $request->idEstado;
        $pass=bcrypt('quimilab2019');
        // echo $nombres.$apellidos.$correo.$idRol.$idEstado;

        $cantidad = count(User::where('email', $request->correo)->get());

        if ($cantidad==0) {
            $user = new User;
            $user->nombre_usuario = $nombres;
            $user->apellido_usuario = $apellidos;
            $user->email = $correo;
            $user->rol_id = $idRol;
            $user->estado_id = $idEstado;
            $user->password = $pass;
            $resultado=$user->save();

            if ($resultado==1) {
                $result = (new BitacoraUsuarioController)->guardarUsuarioEvento(3);
                echo "<script>alert('Guardado con exito.');</script>";
                return redirect('usuarios');
            }else{
                echo "<script>alert('Error al guardar los cambios.');</script>";
                $roles = Rol::all();
                $estados = EstadoUsuario::all();

                return view('usuario.nuevoUsuario',['roles'=>$roles,'estados'=>$estados]);
            }
        }else{
            echo "<script>alert('Ya existe un usuario con el correo $correo.');</script>";
            $roles = Rol::all();
            $estados = EstadoUsuario::all();

            return view('usuario.nuevoUsuario',['roles'=>$roles,'estados'=>$estados]);
        }

    }

    public function nuevoUsuarioExperimentoBitacora($id_usuario,$id_experimento)
    {
        $id_usuario = $id_usuario;
        $id_experimento = $id_experimento;

        $UsuarioExperimento = new UsuarioExperimento;
        $UsuarioExperimento->id_usuario = $id_usuario;
        $UsuarioExperimento->id_experimento = $id_experimento;

        $resultado=$UsuarioExperimento->save();

        if ($resultado==1) {
            $idUsuarioExperimento=$UsuarioExperimento->id;
        }else{
            $idUsuarioExperimento=FALSE;
        }

        return $idUsuarioExperimento;
    }

    public function actualizarUsuarioExperimentoBitacora($id,$isSuccess,$comentario)
    {
        $UsuarioExperimento = UsuarioExperimento::find($id);
        $UsuarioExperimento->isSuccess = $isSuccess;
        $UsuarioExperimento->comentario = $comentario;

        $resultado=$UsuarioExperimento->save();

        return $resultado;
    }

    public function update(Request $request)
    {
        $roles = Rol::all();
        $estados = EstadoUsuario::all();


     $user = User::find($request->id);
     return view('usuario.editarUsuario',['user'=>$user,'roles'=>$roles,'estados'=>$estados]);

    }

    public function updateGuardar(Request $request)
    {
        $users = User::where('id', $request->id)->get()->first();
        $correo2=$users->email;
        $cant = DB::table('usuarios')
                ->where('email', $request->correo)
                ->whereNotIn('email', [$correo2])
                ->count();
        // echo $cant;
        if ($cant==0) {
            $id = $request->id;
            $nombres = $request->nombres;
            $apellidos = $request->apellidos;
            $correo = $request->correo;
            $idRol = $request->idRol;
            $idEstado = $request->idEstado;
            // echo $id.   $nombres.$apellidos.$correo.$idRol.$idEstado;
            $user = User::find($request->id);
            $user->nombre_usuario=$nombres;
            $user->apellido_usuario=$apellidos;
            $user->email=$correo;
            $user->rol_id=$idRol;
            $user->estado_id=$idEstado;
            $resultado=$user->save();
            if ($resultado==1) {
                $result = (new BitacoraUsuarioController)->guardarUsuarioEvento(4);
                echo "<script>alert('Guardado con exito . $cant');</script>";
                return redirect('usuarios');
            }else{
                // echo "<script>alert('Error al guardar los cambios.');</script>";
                // $user = User::find($request->id);
                // $roles = Rol::all();
                // $estados = EstadoUsuario::all();
                // $user = User::find($request->id);
                // return view('usuario.editarUsuario',['user'=>$user,'roles'=>$roles,'estados'=>$estados]);
                $msj="Error al guardar los cambios.";
                return back()->withErrors([
                  'mensaje' => $msj
                ]);
            }
        }else{
            // echo "<script>alert('Ya existe un usuario con el correo $request->correo.');</script>";
            // $user = User::find($request->id);
            // $roles = Rol::all();
            // $estados = EstadoUsuario::all();
            // $user = User::find($request->id);
            // return view('usuario.editarUsuario',['user'=>$user,'roles'=>$roles,'estados'=>$estados]);
            $msj="Ya existe un usuario con el correo $request->correo.";
            return back()->withErrors([
              'mensaje' => $msj
            ]);
        }
    }

    public function perfil(Request $request)
    {
        $roles = Rol::all();
        $estados = EstadoUsuario::all();
        $usuarioExperimentos = UsuarioExperimento::where('id_usuario', $request->id)->get();


        $user = User::find($request->id);
        $user = User::with('Rol')->where('id',$request->id)->get()->first();

$laboratorio= DB::select(
<<<SQL
SELECT nombre_laboratorio
FROM usuario_laboratorios a
inner join laboratorios b on a.id_laboratorio=b.id
WHERE
a.id_usuario=$request->id
AND a.esta_activo=1
order by
a.updated_at desc
limit 0,1
SQL
);

        return view('usuario.perfil',['user'=>$user,'roles'=>$roles,'estados'=>$estados,'usuarioExperimentos'=>$usuarioExperimentos,'laboratorio'=>$laboratorio]);

    }

    public function bitacoraUsuariosExperimentos(Request $request)
    {
        $roles = Rol::all();
        $estados = EstadoUsuario::all();
        $usuarioExperimentos = UsuarioExperimento::all();


        $user = User::find($request->id);
        return view('usuario.bitacoraUsuarioExperimento',['user'=>$user,'roles'=>$roles,'estados'=>$estados,'usuarioExperimentos'=>$usuarioExperimentos]);

    }

    public function cambiarContrasena(Request $request)
    {
        $roles = Rol::all();
        $estados = EstadoUsuario::all();


     $user = User::find($request->id);
     return view('usuario.cambiarContrasena',['user'=>$user,'roles'=>$roles,'estados'=>$estados]);

    }

    public function cambiarContrasenaGuardar(Request $request)
    {
        $users = User::where('id', $request->id)->get()->first();

        $passwordDB=$users->password;

        //echo $contador;
        //$request->contrasenaActual

        if ($request->nuevaContrasena==$request->nuevaContrasenaConfirm) {
            $user = User::find($request->id);

            $user->password=bcrypt($request->nuevaContrasena);

            $resultado=$user->save();

            if ($resultado==1) {
                echo "<script>alert('Contraseña actualizada con exito.');</script>";
                return redirect('');
            }else{
                $msj="Error al actualizar la contraseña.";
                return back()->withErrors([
                  'mensaje' => $msj
                ]);
            }
        }else{
            $msj="La contraseña actual o la nueva contraseña no coinciden.";
            return back()->withErrors([
              'mensaje' => $msj
            ]);
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Creación de Users formulario
    |--------------------------------------------------------------------------
    */
    public function create() { return view('client.create'); }


    /*
    |--------------------------------------------------------------------------
    | Formulario de recordar contraseña
    |--------------------------------------------------------------------------
    */
    public function forgotpassword() { return view('client.forgot'); }

    /*
    |--------------------------------------------------------------------------
    | Creando link para recuperar clave
    |--------------------------------------------------------------------------
    */
    public function link_recovery(Request $request)
    {
          $exist= User::where('email','=',request(['email']))->get();


          if(count($exist)==1){

            $User=$exist->first();
            $faker = Faker::create();

            $User->link_recovery=$faker->uuid() .   $User->id;

            $User->save();
            if($User->notificaciones)
              \Mail::to($User)->queue(new Password($User));

             session()->flash('link','Hemos enviado un link a tu correo para que puedas restablecer la contraseña. ');

             return back();
          }


          return back()->withErrors([
              'mensaje' => 'Credenciales incorrectas favor verificar'
          ]);
    }
    /*
    |--------------------------------------------------------------------------
    | Creando link para recuperar clave
    |--------------------------------------------------------------------------
    */
    public function link_recovered($link)
    {
        $exist=User::where('link_recovery','=',$link)->get();


        if(count($exist)==1){

          $User=$exist->first();

           return view('client.recover',compact('User'));
        }


        return view('client.forgot')->withErrors([
            'mensaje' => 'El link de recuperación de contraseña no es válido'
        ]);



    }


    /*
    |--------------------------------------------------------------------------
    | Creando link para recuperar clave
    |--------------------------------------------------------------------------
    */
    public function password(Request $request)
    {

      if($request->password_confirmation!=$request->password){
        return back()->withErrors([
            'mensaje' => 'Contraseñas no coinciden'
        ]);}else{
            $id=$request->idUser;
            $User=User::find($id);

            $User->password = bcrypt($request->password);

            $User->link_recovery='';

            $User->save();

            session()->flash('message','Contraseña actualizada de forma correcta');

              return view('client.login');

        }
    }



    /*
    |--------------------------------------------------------------------------
    | Creación de Users almacenando ...
    |--------------------------------------------------------------------------
    */
    public function store(Request $request)
    {

        $this->validate(request(),[
            'name'  => 'required',
            'email' => 'required|email',
            'phone' => 'required'
        ]);




            $faker = Faker::create();
            $password=$faker->safeColorName() . $faker->lexify('??') . $faker->numerify('##');


            /*
            |--------------------------------------------------------------------------
            | Creando User
            |--------------------------------------------------------------------------
            */
            $User = new User();
                $User->name = request('name');
                $User->email = request('email');
                $User->phone = request('phone');
                $User->password = bcrypt($password);
            $User->save();

            auth()->login($User);




    }


}
