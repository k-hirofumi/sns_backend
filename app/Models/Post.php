<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;

class Post extends Model
{
    use HasFactory, Notifiable, Uuids;

    // テーブル名
    protected $table = 'posts';

    // プリマリーキー
    protected $primaryKey = 'post_id';


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'post_user_id',
        'periods',
        'events',
        'images',
        'good',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [

    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'post_id' => 'string',
        'post_user_id' => 'string',
        'periods' => 'string',
        'events' => 'string',
        'images' => 'string',
        'good' => 'integer',
    ];

    const CREATED_AT = 'post_created_at';
    const UPDATED_AT = 'post_updated_at';
    const DELETED_AT = 'post_deleted_at';

    protected $dates = [
        'post_created_at',
        'post_updated_at',
        'post_deleted_at'
    ];

    /**
     * 商品グループを取得
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'post_user_id', 'user_id');
    }
}
