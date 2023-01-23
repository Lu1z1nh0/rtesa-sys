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
Auth::routes();


//Iniciar Sesión
//Route::get('/iniciar-sesion', '\App\Http\Controllers\SessionsController@iniSesion');
Route::resource('/iniciar-sesion', App\Http\Controllers\SessionsController::class);
Route::get('/cerrar-sesion', '\App\Http\Controllers\SessionsController@cerrarSesion');

//Administrador Dashboard
//Route::view('/dashboard', 'admin')->middleware('auth');
//Route::resource('dashboard', 'App\Http\Controllers\HomeController@admin');
Route::resource('dashboard', 'App\Http\Controllers\HomeController');



/*
|--------------------------------------------------------------------------
| Rutas publicas
|--------------------------------------------------------------------------
*/

//Inicio
/*Route::get('/', function () {
    return view('welcome');
});
*/



//Página de Inicio carga datos (CMS)
Route::get('/', '\App\Http\Controllers\CMSController@index');
//Route::get('/', 'App\Http\Controllers\HomeController@index');


//Formulario de Contacto ¿En uso?
Route::get('/contactanos', function () {
    return view('contacto');
});

//Prueba ¿En uso?
Route::view('/prueba', 'prueba');

//Politica de Privacidad
Route::get('/politica-de-privacidad', function () {
    return view('polpriv');
});

//Terminos y Condiciones
Route::get('/terminos-y-condiciones', function () {
    return view('terms');
});

//Iniciar Sesión
//Route::view('/iniciar-sesion', 'login')->name('/iniciar-sesion')->middleware('guest');

//Registrarse
Route::view('/registrarse', 'register')->name('/registrarse')->middleware('guest');

//Recuperar Contraseña
Route::get('/recuperacion-de-contrasenya', function () { return view('restore-pass'); });

//Elementos de la Plantilla
Route::get('/top-navbar', function () { return view('navbar-top'); });
Route::get('/combo-navbar', function () { return view('navbar-combo'); });

/*-------------------------------------------------------------------------- */


/*
|--------------------------------------------------------------------------
| Rutas que requieren autenticación - Administrador
|--------------------------------------------------------------------------
*/



//Vista de aprobación aspirantes
Route::view('/aprobacion', 'aprobacion')->middleware('auth');

//Vista de categorias
Route::view('/dashboard/categorias', 'categorias/index')->middleware('auth');
Route::view('/dashboard/categorias/crear', 'categorias/form')->middleware('auth');

//Vista mantenimiento productos
Route::view('/dashboard/productos', 'productos/index')->middleware('auth');
Route::view('/dashboard/productos/crear', 'productos/form')->middleware('auth');

//Vista de marcas
Route::view('/dashboard/marcas', 'marcas/index')->middleware('auth');
Route::view('/dashboard/marcas/crear', 'marcas/form')->middleware('auth');

//Vista de stock
Route::view('/dashboard/stock', 'stock/index')->middleware('auth');

//Vista de clientes
Route::view('/dashboard/clientes', 'clientes/index')->middleware('auth');

//Vista de aspirantes a clientes
Route::view('/dashboard/aspirantes', 'aspirantes/index')->middleware('auth');

//Vista de configuración CMS
Route::view('/dashboard/config', 'config/index')->middleware('auth');

//Vista de suscriptores
Route::view('/dashboard/suscriptores', 'boletin/index')->middleware('auth');

/*-------------------------------------------------------------------------- */


/*
|--------------------------------------------------------------------------
| Rutas que requieren autenticación - Cliente
|--------------------------------------------------------------------------
*/

//Vista de aspirantes para completar informacion
Route::view('/aspirantes-completar', 'aspirante_info')->middleware('auth');

//Vista Tienda y Producto
Route::view('/dashboard/tienda', 'productos/productos-grid')->middleware('auth');
Route::view('/dashboard/producto-detalle-test', 'productos/detalle-producto')->middleware('auth');

/*-------------------------------------------------------------------------- */







/*
Route::post('/iniciar-sesion', function () {

    $credentials = request()->only('correo','password');
    //return = request()->only('email', 'password');
    dump($credentials);

    if (Auth::attempt($credentials)) {
        request()->session()->regenerate();

        //return 'Has iniciado sesión exitosamente';
        return redirect('/dashboard');    
    }

    return redirect('/iniciar-sesion');
    
}); 
*/









