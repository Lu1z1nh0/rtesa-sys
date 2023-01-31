<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Precio;

class PrecioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //paginate
        $precios = Precio::paginate(10);
        return view('precios.index', compact('precios'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $precio = new Precio();
        return view('precios.create_precio', compact('precio'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validar campos
        $request->validate([
            'precio_Tipo' => 'required',
            'precio_Monto' => 'required',
            'estado' => 'required'
        ]);

        //crear nuevo precio
        $reg = new Precio();
        $reg->precio_Tipo = $request->get('precio_Tipo');
        $reg->precio_Monto = $request->get('precio_Monto');
        $reg->estado = $request->get('estado');
        $reg->save();
        
        //redireccionar
        return redirect()->route('precios.index');
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
        $precio = Precio::find($id);
        return view('precios.edit', compact('precio'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Precio $precio)
    {
        //validar campos
        $request->validate([
            'precio_Tipo' => 'required',
            'precio_Monto' => 'required',
            'estado' => 'required'
        ]);

        $precio->precio_Tipo = $request->get('precio_Tipo');
        $precio->precio_Monto = $request->get('precio_Monto');
        $precio->estado = $request->get('estado');
        $precio->update();

        return redirect()->route('precios.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $precio = Precio::find($id)->delete();
        return redirect()->route('precios.index');
    }
}
