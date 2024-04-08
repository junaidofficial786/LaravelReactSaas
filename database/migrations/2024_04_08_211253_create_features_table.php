<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('features', function (Blueprint $table) {
            $table->id()->unsignedBigInteger()->autoIncrement();
            $table->string('image', 255)->nullable();
            $table->string('route_name', 255);
            $table->string('name', 255);
            $table->text('description')->nullable();
            $table->unsignedSmallInteger('required_credits')->default(0);
            $table->boolean('active')->default(true);
            $table->timestampsTz();
            $table->unique('route_name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('features');
    }
};
