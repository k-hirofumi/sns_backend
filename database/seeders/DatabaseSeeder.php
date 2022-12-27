<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Staff::factory(1)->create([
            'name' => 'Test Staff',
            'email' => 'test@example.com',
            'password' => Hash::make('123456')
        ]);

        \App\Models\User::factory(1)->create([
            'name' => 'Test User',
            'email' => 'user1@example.com',
            'password' => Hash::make('123456'),
            // 'remember_token' => Str::random(10),
        ]);
    }
}
