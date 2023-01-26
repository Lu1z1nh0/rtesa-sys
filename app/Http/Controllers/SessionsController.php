<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Rol;
use App\Models\User;

class SessionsController extends Controller
{

    public function create() {
        
        return view('login');
    }

    public function store() {
        
        if(auth()->attempt(request(['correo', 'password'])) == false) {

            return back()->withErrors([
                'mensaje' => '¡Credenciales incorrectas, favor verificar!',
            ]);

        } else {

            if(auth()->user()->rol_id == 1 || auth()->user()->rol_id == 3) {
                return redirect()->route('admin.index');
            } else {
                return redirect()->to('/');
            }

        }
    }

    public function destroy() {

        auth()->logout();

        return redirect()->to('/');
    }





















    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credenciales = $request->validate([
            'correo' => ['required', 'correo'],
            'password' => ['required'],
        ]);

       $correo = $request->input('correo');
       $pass = $request->input('password');
       $remember = $request->input('recuerdame'); //debe ser bool, 1 o 0
 
        if (Auth::attempt(['correo' => $correo, 'password' => $pass, 'estado' => 'activo'], $remember)) {
            $request->session()->regenerate();
 
            //$result = (new BitacoraController)->guardarUsuarioEvento(1);
            return redirect()->intended('dashboard');
        }
 
        return back()->withErrors([
            'correo' => '¡Credenciales incorrectas, favor verificar!',
        ])->onlyInput('correo');
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        //$result = (new BitacoraController)->guardarUsuarioEvento(2);

        Auth::logout();
     
        $request->session()->invalidate();
     
        $request->session()->regenerateToken();
     
        return redirect('/');
    }
























    /*
    |--------------------------------------------------------------------------
    | Registro de Usuario
    |--------------------------------------------------------------------------
    */
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
