const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/users");
dotenv.config();

const app = express();
const { PORT, API_URL = "http://127.0.0.1" } = process.env;
const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello World!!!");
};
app.get("/", helloWorld);
// app.get("/users/34", (request, response) => {
//   response.status(200);
//   response.send("User with id: 34");
// });
app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello POST!");
});
app.use(userRouter);
app.listen(PORT, () => {
  console.log(`Сервер запущен по адрессу ${API_URL}:${PORT}`);
});
