世界各地の天気や気温をリアルタイムで調べることが出来る簡単なWebアプリです。  

このアプリを使用する手順

1. このリポジトリをローカルにクローン

2. `npm install` で依存をインストール

3. OpenWeather の API キーを取得し、.envファイルに「API_KEY=YOUR_OPENWEATHER_API_KEY」を書き込む。

4. ターミナルにnode app.jsを入力して実行すると、「サーバーがポート3001で起動しました。」と表示される。

5. 「http://localhost:3001/」
   のフォームを送信すると、リクエストがNode.jsで処理される。

7. 検索バーに英語で世界の都市名、地域名を入力（例：Tokyo, Parisなど）すると、その地域の天気が表示される。
