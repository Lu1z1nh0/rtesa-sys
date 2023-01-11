<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rol;
use App\Models\User;

class SessionsController extends Controller
{

    public function __constructor(){

       $this->middleware('guest',['except' => 'destroy']);
    }

    /*
    |--------------------------------------------------------------------------
    | No tiene uso
    |--------------------------------------------------------------------------
    */
    public function index()
    {
        //
    }

    /*
    |--------------------------------------------------------------------------
    | Inicio de Sesion
    |--------------------------------------------------------------------------
    */
    public function create()
    {

        return view('login');

    }

    /*
    |--------------------------------------------------------------------------
    | Autenticando User
    |--------------------------------------------------------------------------
    */
    public function store(Request $request)
    {


       // dd($request);
       $exist= User::where('correo','=',$request->correo)->where('delete','=',true)->get();

       if(count($exist))
           return back()->withErrors([
               'mensaje' => 'Credenciales incorrectas, favor verificar!'
           ]);

        if(!auth()->attempt(request(['correo','password']))){
            return back()->withErrors([
                'mensaje' => 'Credenciales incorrectas, favor verificar!'
            ]);
        }

        //$result = (new BitacoraController)->guardarUsuarioEvento(1);
        return redirect()->route('welcome');
    }

    /*
    |--------------------------------------------------------------------------
    | Cerrar Sesion
    |--------------------------------------------------------------------------
    */
    public function destroy()
    {
        $result = (new BitacoraUsuarioController)->guardarUsuarioEvento(2);

        auth()->logout();

        return redirect()->route('welcome');
    }

    public function registrarse(Request $request)
        {

         $roles = Rol::all();
         $estados = EstadoUsuario::all();

         return view('usuario.registrarse',['roles'=>$roles,'estados'=>$estados]);

        }

  public function registrarseGuardar(Request $request)
        {
            $nombres = $request->nombres;
            $apellidos = $request->apellidos;
            $correo = $request->correo;
            $idRol = 1;
            //echo substr($correo, strpos($correo,'@'));
            if (substr($correo, strpos($correo,'@'))=='@ues.edu.sv') {
                $idEstado=1;
            }else{
                $idEstado=2;
            }

            $pass=bcrypt($request->password);
            // echo $nombres.$apellidos.$correo.$idRol.$idEstado;

            $cantidad = count(User::where('email', $request->correo)->get());

            if ($cantidad==0) {
                if ($request->password==$request->password2) {
                    $user = new User;
                    $user->nombre_usuario = $nombres;
                    $user->apellido_usuario = $apellidos;
                    $user->email = $correo;
                    $user->rol_id = $idRol;
                    $user->estado_id = $idEstado;
                    $user->password = $pass;
                    $resultado=$user->save();

                    if ($resultado==1) {
                        return redirect('login');
                    }else{
                        echo "<script>alert('Error al guardar los cambios.');</script>";
                        $roles = Rol::all();
                        $estados = EstadoUsuario::all();

                        return view('usuario.nuevoUsuario',['roles'=>$roles,'estados'=>$estados]);
                    }
                }else{
                    $msj="La contraseña actual o la nueva contraseña no coinciden.";
                    return back()->withErrors([
                      'mensaje' => $msj
                    ]);
                }
            }else{
                // echo "<script>alert('Ya existe un usuario con el correo $correo.');</script>";
                // $roles = Rol::all();
                // $estados = EstadoUsuario::all();

                // return view('usuario.nuevoUsuario',['roles'=>$roles,'estados'=>$estados]);
                $msj="Ya existe un usuario con el correo $correo.";
                    return back()->withErrors([
                      'mensaje' => $msj
                    ]);
            }

        }























}
