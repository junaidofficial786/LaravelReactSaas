<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsedFeature extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function casts(): array
    {
        return [
            'data' => 'array'
        ];
    }

    public function feature() {
        return $this->belongsTo(Feature::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
