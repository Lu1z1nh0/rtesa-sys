<?php

namespace App\Models;
use App\Models\Rol;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table='usuario';

    protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'cliente_id_interno',
        'correo',
        'password',
        'direccion',
        'nombre_empresa',
        'municipio',
        'departamento',
        'telefono',
        'whatsapp',
        'website',
        'estado',
        'clasificacion',
        'boletin',
        'imagen_perfil_src',
        'notas',
        'estatus',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime:d-m-Y H:i:s',
        'fecha_registro' => 'datetime:d-m-Y H:i:s',
    ];

    /// Agregar las variables de estado

    public function rol(){ return $this->belongsTo(\App\Models\Rol::class); }

    public function rolName(){ return  Rol::find($this->rol_id)->nombre; }





}
