const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const { PORT, API_URL = 'http://127.0.0.1' } = process.env;
console.log(process.env.PORT);
app.get("/", (request, response) => {
  response.status(200);
  response.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Сервер запущен по адрессу ${API_URL}:${PORT}`);
});
