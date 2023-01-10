<?php

namespace App\Models;

use App\Models\Cliente;
use App\Models\Producto;

use Illuminate\Database\Eloquent\Model;

class Carrito extends Model
{
    protected $table='carrito';

    public function Cliente(){  return $this->belongsTo('App\Models\Cliente', 'cliente_id'); }
    public function Producto(){  return $this->belongsTo('App\Models\Producto', 'producto_id'); }
}
