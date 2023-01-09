<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            // $table->ulid('user_id')->primary();
            // $table->timestampTz('user_created_at')->nullable();
            // $table->timestampTz('user_updated_at')->nullable();
            // $table->timestampTz('user_deleted_at')->nullable();
            // $table->string('name');
            // $table->string('email')->unique();
            // $table->timestamp('email_verified_at')->nullable();
            // $table->string('password');
            // $table->rememberToken();
            $table->uuid('user_id')->primary();
            $table->timestampTz('user_created_at')->nullable();
            $table->timestampTz('user_updated_at')->nullable();
            $table->timestampTz('user_deleted_at')->nullable();
            $table->string('name');
            $table->string('email')->unique();
            // $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('user_image', 1000)->nullable();
            // $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
