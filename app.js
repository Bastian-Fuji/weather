const express = require("express");
const request = require("request");
const dotenv = require("dotenv").config();
const path = require("path");

const app = express();  // ← この行が必要です！
const PORT = 3001;      // サーバーが動作するポート番号

// 静的ファイルの設定
app.use(express.static(path.join(__dirname, 'public')));

// ルートページを表示
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

// 天気情報を取得して結果を表示
app.get("/weather", (req, res) => {
    const city = req.query.city || "Tokyo"; // デフォルトは東京
    const apiKey = process.env.API_KEY;

    const options = {
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
        method: "GET",
        json: true
    };

    request(options, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            return res.send("天気情報を取得できませんでした。");
        }

        res.send(`
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/style.css">
                    <title>天気情報</title>
                </head>
                <body>
                    <div class="container">
                        <h1>現在の${city}の気温は${body.main.temp}度です。</h1>
                        <p class="weather-info">天気: ${body.weather[0].main}</p>
                        <a href="/">別の都市を検索する</a>
                    </div>
                </body>
            </html>
        `);
    });
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました。`);
});
