<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Marca;

class MarcaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //paginate
        $marcas = Marca::paginate(10);

        return view('marcas.index', compact('marcas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //paginate
        $marca = new Marca();
        return view('marcas.create', compact('marca'));
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
            'nombre' => 'required',
            'estado' => 'required',
        ]);
        //almacenar datos
        $reg = new Marca();
        $reg->nombre = $request->get('nombre');
        $reg->estado = $request->get('estado');
        //subir archivos imagenes
        if ($request->hasFile('logo_src')) {
            $file = $request->file('logo_src');
            $file->move(public_path() . '/assets/img/logos/', $file->getClientOriginalName());
            $reg->logo_src = '/assets/img/logos/' . $file->getClientOriginalName();
        }
        $reg->save();
        notify()->success('Welcome to Laravel Notify ⚡️');
        //redireccionar
        return redirect()->route('marcas.index');
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
        //paginate
        $marca = Marca::find($id);
        return view('marcas.edit', compact('marca'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Marca $marca)
    {
        //validar campos
        $request->validate([
            'nombre' => 'required',
            'estado' => 'required',
        ]);
        //almacenar datos
        $marca->nombre = $request->get('nombre');
        $marca->estado = $request->get('estado');
        if ($request->hasFile('logo_src')) {
            $file = $request->file('logo_src');
            $file->move(public_path() . '/assets/img/logos/', $file->getClientOriginalName());
            $marca->logo_src = '/assets/img/logos/' . $file->getClientOriginalName();
        }
        $marca->update();
        //redireccionar
        return redirect()->route('marcas.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $marca = Marca::find($id);
        if ($marca->logo_src){
            if (file_exists('/assets/img/logos/'.$marca->logo_src)){
                unlink('/assets/img/logos/'.$marca->logo_src);
            }
        }
        $marca->delete();
        return redirect()->route('marcas.index');
    }
}
