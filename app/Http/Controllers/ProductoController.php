<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Producto;
use App\Models\Categoria;
use App\Models\Marca;
use App\Models\EstadoProducto;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //paginate
        $productos = Producto::paginate();

        $categorias = Categoria::all();
        $marcas = Marca::all();
        $estadoProductos = EstadoProducto::all();

        return view('productos.index', compact('productos', 'categorias', 'marcas', 'estadoProductos'))
        ->with('i', (request()->input('page', 1) - 1) * $productos->perPage());
            
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $producto = new Producto();
        //relacionar con el modelo de categoria
        $categorias = Categoria::all();
        //relaciomar con el modelo de marca
        $marcas = Marca::all();
        //relacionar con el modelo de estado producto
        $estadoProductos = EstadoProducto::all();
        return view('productos.form', compact('categorias', 'marcas', 'estadoProductos'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        //validar campos
        $request->validate([
            'nombre' => 'required',
            'categoria_id' => 'required',
            'sku' => 'required',
            'descripcion' => 'required',
            'marca_id' => 'required',
            'lote' => 'required',
            'fecha_ingreso' => 'required',
            'existencia' => 'required',
            'existencia_limite' => 'required',
            'estado_producto_id' => 'required',
            'etiqueta_destacado' => 'required',
        ]);

        //almacenar datos
        $reg = new Producto();
        $reg->nombre = $request->get('nombre');
        $reg->categoria_id = $request->get('categoria_id');
        $reg->sku = $request->get('sku');
        $reg->descripcion = $request->get('descripcion');
        $reg->marca_id = $request->get('marca_id');
        $reg->oem = $request->get('oem');
        $reg->ref_1 = $request->get('ref_1');
        $reg->ref_2 = $request->get('ref_2');
        $reg->ref_3 = $request->get('ref_3');
        $reg->lote = $request->get('lote');
        $reg->fecha_ingreso = $request->get('fecha_ingreso');
        $reg->existencia = $request->get('existencia');
        $reg->existencia_limite = $request->get('existencia_limite');
        $reg->estado_producto_id = $request->get('estado_producto_id');
        //subir archivos pdf
        if ($request->hasFile('ficha_tecnica_herf')) {
            $file = $request->file('ficha_tecnica_herf');
            $file->move(public_path() . '/assets/pdf/productos/', $file->getClientOriginalName());
            $reg->ficha_tecnica_herf = $file->getClientOriginalName();
        }
        //subir archivos imagenes
        if ($request->hasFile('imagen_1_src')) {
            $file = $request->file('imagen_1_src');
            $file->move(public_path() . '/assets/img/products/', $file->getClientOriginalName());
            $reg->imagen_1_src = $file->getClientOriginalName();
        }
        if ($request->hasFile('imagen_2_src')) {
            $file = $request->file('imagen_2_src');
            $file->move(public_path() . '/assets/img/products/', $file->getClientOriginalName());
            $reg->imagen_2_src = $file->getClientOriginalName();
        }
        if ($request->hasFile('imagen_3_src')) {
            $file = $request->file('imagen_3_src');
            $file->move(public_path() . '/assets/img/products/', $file->getClientOriginalName());
            $reg->imagen_3_src = $file->getClientOriginalName();
        }
        if ($request->hasFile('imagen_4_src')) {
            $file = $request->file('imagen_4_src');
            $file->move(public_path() . '/assets/img/products/', $file->getClientOriginalName());
            $reg->imagen_4_src = $file->getClientOriginalName();
        }
        $reg->etiqueta_destacado = $request->get('etiqueta_destacado');
        $reg->garantia = $request->get('garantia');

        $reg->save();
        return redirect()->route('productos.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $producto = Producto::find($id);

        $categorias = Categoria::pluck('nombre', 'id');
        $marcas = Marca::pluck('nombre', 'id');
        $estadoProductos = EstadoProducto::pluck('estado', 'id');
        return view('productos.formEdit', compact('producto', 'categorias', 'marcas', 'estadoProductos'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Producto $producto)
    {
        request()->validate([
            'nombre' => 'required',
            'categoria_id' => 'required',
            'sku' => 'required',
            'descripcion' => 'required',
            'marca_id' => 'required',
            'lote' => 'required',
            'fecha_ingreso' => 'required',
            'existencia' => 'required',
            'existencia_limite' => 'required',
            'estado_producto_id' => 'required',
            'etiqueta_destacado' => 'required',
        ]);

        $producto->update($request->all());

        return redirect()->route('productos.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $producto = Producto::find($id)->delete();

        return redirect()->route('productos.index');
    }
}
