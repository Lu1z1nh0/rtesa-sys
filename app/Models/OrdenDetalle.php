<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrdenDetalle extends Model
{
    protected $table='orden_detalle';

    public function Orden(){  return $this->belongsTo('App\Models\Orden', 'orden_id'); }
    public function Producto(){  return $this->belongsTo('App\Models\Producto', 'producto_id'); }
}
