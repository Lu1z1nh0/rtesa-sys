<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Inicio
Route::get('/', function () {
    return view('welcome');
});

//Formulario de Contacto
Route::get('/contactanos', function () {
    return view('contacto');
});

//Politica de Privacidad
Route::get('/politica-de-privacidad', function () {
    return view('polpriv');
});

//Terminos y Condiciones
Route::get('/terminos-y-condiciones', function () {
    return view('terms');
});

//Iniciar Sesión
Route::view('/iniciar-sesion', 'login')->name('/iniciar-sesion')->middleware('guest');
//Administrador
Route::view('/dashboard', 'admin')->middleware('auth');

//Iniciar Sesión
Route::post('/iniciar-sesion', function () {

    $credentials = request()->only('email','password');
    //return = request()->only('email', 'password');
    //dump($credentials);

    if (Auth::attempt($credentials)) {
        request()->session()->regenerate();

        //return 'Has iniciado sesión exitosamente';
        return redirect('/dashboard');    
    }

    return redirect('/iniciar-sesion');
    
}); 

//Registrarse
Route::view('/registrarse', 'register')->name('/registrarse')->middleware('guest');

//Recuperar Contraseña
Route::get('/recuperacion-de-contrasenya', function () {
    return view('restore-pass');
});


//Administrador
//Route::view('/dashboard', 'admin');

//Prueba
Route::view('/prueba', 'prueba');





Route::get('/top-navbar', function () {
    return view('navbar-top');
});

Route::get('/combo-navbar', function () {
    return view('navbar-combo');
});
