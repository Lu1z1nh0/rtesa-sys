<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PrecioDetalle extends Model
{
    protected $table='precio_detalle';

    public function Precio(){  return $this->belongsTo('App\Models\Precio', 'precio_id'); }
    public function Producto(){  return $this->belongsTo('App\Models\Producto', 'producto_id'); }

    // public function Precio(){ return $this->hasOne(PrecioDetalle::class);}
}
