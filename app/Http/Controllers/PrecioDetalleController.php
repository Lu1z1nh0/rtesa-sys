<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PrecioDetalle;
use App\Models\Precio;
use App\Models\Producto;

class PrecioDetalleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //paginate
        $precioDetalles = PrecioDetalle::paginate(10);
        //relacionar con precio
        $precios = Precio::all();
        //relacionar con producto
        $productos = Producto::all();
        return view('precios_detalle.index', compact('precioDetalles', 'precios', 'productos'));
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //paginate
        $precioDetalle = new PrecioDetalle();
        //relacionar con precio
        $precios = Precio::pluck('precio_Monto', 'id');
        //relacionar con producto
        $productos = Producto::pluck('nombre', 'id');
        return view('productos.create', compact('precioDetalle', 'precios', 'productos'));
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
            'precio_id' => 'required',
            'producto_id' => 'required',
        ]);
        //almacenar datos
        $reg = new PrecioDetalle();
        $reg->producto_id = $request->get('producto_id');
        $reg->precio_id = $request->get('precio_id');
        $reg->save();
        //redireccionar
        return redirect()->route('precios_detalle.index');
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
        $precioDetalle = PrecioDetalle::find($id);
        //relacionar con precio
        $precios = Precio::pluck('precio_Monto', 'id');
        //relacionar con producto
        $productos = Producto::pluck('nombre', 'id');
        return view('precios_detalle.edit', compact('precioDetalle', 'precios', 'productos'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PrecioDetalle $precioDetalle)
    {
        //poner todo en trycatch
        try {
            //validar campos
            $request->validate([
                'precio_id' => 'required',
                'producto_id' => 'required',
            ]);
            //almacenar datos
            $precioDetalle->producto_id = $request->get('producto_id');
            $precioDetalle->precio_id = $request->get('precio_id');
            $precioDetalle->update();
            //redireccionar
            return redirect()->route('precios_detalle.index');
        } catch (\Throwable $th) {
            //throw $th;
            echo $th;
            return redirect()->route('precios_detalle.index');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $precioDetalle = PrecioDetalle::find($id)->delete();
        return redirect()->route('precios_detalle.index');
    }
}
