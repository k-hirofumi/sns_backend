#Getting Start

1. .env.exapmleをコピーして.envファイルを作成。
　※APP_KEY=　はオフラインで連携します。
2.以下のコマンドを実行
`docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs`

3. `./vendor/bin/sail up` でコンテナを起動
4. `./vendor/bin/sail artisan migrate`を実行してDBにテーブルを作成
5. `./vendor/bin/sail npm i`でnpmのパッケージをインストール
6. `./vendor/bin/sail npm run dev`で管理画面を起動