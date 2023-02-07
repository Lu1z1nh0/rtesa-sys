<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
//use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SessionsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;

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

//Página de Inicio y carga datos (CMS)
Route::get('/', function () { return view('welcome'); })->middleware('auth');
Route::get('/', [HomeController::class, 'create'])->middleware('guest')->name('home.index');


//Iniciar Sesión
//Carga vista
Route::get('/iniciar-sesion', [SessionsController::class, 'create'])->middleware('guest')->name('login.index');
//Inicio de sesión
Route::post('/iniciar-sesion', [SessionsController::class, 'store'])->name('login.store');


//Cerrar Sesión
Route::get('/cerrar-sesion', [SessionsController::class, 'destroy'])->middleware('auth')->name('login.destroy');


//Dashboard Admin y SuperAdmin
Route::get('/dashboard', [AdminController::class, 'index'])->middleware('isAdmin')->name('admin.index');



/*
|--------------------------------------------------------------------------
| Rutas publicas
|--------------------------------------------------------------------------
*/

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
Route::resource('/dashboard/categorias', App\Http\Controllers\CategoriaController::class)->middleware('auth');

//vista de mantenimiento de productos - prueba de vista publica - con controllador de productos
Route::resource('/dashboard/productos', App\Http\Controllers\ProductoController::class)->middleware('auth');

//vista de precio detalles de productos - prueba de vista publica - con controllador de productos
Route::resource('/dashboard/precios_detalle', App\Http\Controllers\PrecioDetalleController::class)->middleware('auth');

//vista de precio de productos - prueba de vista publica - con controllador de productos
Route::resource('/dashboard/precios', App\Http\Controllers\PrecioController::class)->middleware('auth');

//Vista de marcas
Route::resource('/dashboard/marcas', App\Http\Controllers\MarcaController::class)->middleware('auth');

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
Route::resource('/dashboard/tienda', App\Http\Controllers\TiendaController::class)->middleware('auth');

/*-------------------------------------------------------------------------- */







