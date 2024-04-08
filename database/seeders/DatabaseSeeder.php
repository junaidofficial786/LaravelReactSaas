<?php

namespace Database\Seeders;

use App\Models\Feature;
use App\Models\Package;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Hashing\BcryptHasher;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Junaid Hassan',
            'email' => 'junaidhassan225588@gmail.com',
            'password' => bcrypt('password'),
        ]);

        Feature::create([
            'image' => 'https://static-00.iconduck.com/assets.00/plus-icon-2048x2048-z6v59bd6.png',
            'route_name' => 'feature1.index',
            'name' => 'Calculate sum',
            'description' => 'Calculate sum of 2 numbers',
            'required_credits' => 1,
            'active' => true,
        ]);

        Feature::create([
            'image' => 'https://static.vecteezy.com/system/resources/previews/009/267/401/original/minus-sign-icon-free-png.png',
            'route_name' => 'feature2.index',
            'name' => 'Calculate difference',
            'description' => 'Calculate difference of 2 numbers',
            'required_credits' => 2,
            'active' => true,
        ]);

        Package::create([
            'name' => 'Basic',
            'price' => 5,
            'credits' => 20,
        ]);

        Package::create([
            'name' => 'Silver',
            'price' => 20,
            'credits' => 100,
        ]);

        Package::create([
            'name' => 'Gold',
            'price' => 50,
            'credits' => 500,
        ]);
    }
}
