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
        Schema::create('used_features', function (Blueprint $table) {
            $table->id()->unsignedBigInteger();
            $table->integer('credits')->unsigned();
            $table->foreignId('feature_id')->constrained('features')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->jsonb('data')->nullable();
            $table->timestampsTz();

            $table->index(['feature_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('used_features');
    }
};
