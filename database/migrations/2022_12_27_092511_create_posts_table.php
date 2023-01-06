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
        Schema::create('posts', function (Blueprint $table) {
            $table->uuid('post_id')->primary();
            $table->timestampTz('post_created_at')->nullable();
            $table->timestampTz('post_updated_at')->nullable();
            $table->timestampTz('post_deleted_at')->nullable();
            $table->string('post_user_id', 36)->nullable()->default(null);
            $table->string('periods', 120)->nullable();
            $table->string('events', 2100)->nullable();
            $table->string('images', 1000)->nullable();
            $table->foreign('post_user_id')->references('user_id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
