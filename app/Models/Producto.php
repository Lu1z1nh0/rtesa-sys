<?php

namespace App\Models;

use App\Models\Orden;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{

    protected $fillable = [
        'nombre', 
        'categoria_id', 
        'sku', 
        'descripcion', 
        'marca_id', 
        'OEM', 
        'ref_1', 'ref_2','ref_3', 
        'estado_producto_id',
        'lote',
        'fecha_ingreso',
        'existencia',
        'existencia_limite',
        'estado_producto_id',
        'ficha_tecnica_href',
        'imagen_1_src',
        'imagen_2_src',
        'imagen_3_src',
        'etiqueta_destacado',
        'garantia'];

    protected $table='producto';

    public function Orden(){  return $this->belongsTo('App\Models\Orden', 'orden_id'); }
    public function Producto(){  return $this->belongsTo('App\Models\Producto', 'producto_id'); }

    public function Categoria(){  return $this->hasOne('App\Models\Categoria', 'id', 'categoria_id'); }
    public function Marca(){  return $this->hasOne('App\Models\Marca', 'id', 'marca_id'); }
    public function EstadoProducto(){  return $this->hasOne('App\Models\EstadoProducto', 'id', 'estado_producto_id'); }
    public function PrecioDetalle(){ return $this->hasOne('App\Models\PrecioDetalle', 'precio_id', 'id');}

    // public function PrecioDetalle(){  return $this->hasOne(PrecioDetalle::class); }
}
