/*
Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, 
тип операційної системи, час роботи системи в хвилинах (використати модуль OS), 
поточну робочу директорію і назву файлу сервера (використати модуль path).
*/

const http = require("http");

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    `Name of OS: ${process.platform} \nUsername: ${
      require("os").userInfo().username
    } \nSystem operating time (min): ${
      require("os").uptime() / 60
    } \nWorking directory: ${
      require.main.filename
    } \nServer name: ${require("os").hostname()}`
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
