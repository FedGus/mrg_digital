const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const dbConfig = require("./db.config.js");
const history = require("connect-history-api-fallback");
const app = express();
const port = process.env.PORT || 8085;
const serveStatic = require("serve-static");
const path = require("path"); 

// Обработка статических файлов
app.use("/", serveStatic(path.join(__dirname, "../dist/project")));

// Парсинг json
app.use(bodyParser.json());

// Парсинг запросов по типу: application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Обработка статических файлов
app.use("/", serveStatic(path.join(__dirname, "../dist/project")));

// Настройка CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, PUT, POST, DELETE, OPTIONS"
  );
  next();
});

// Создание соединения с базой данных
let connection;
if (process.env.NODE_ENV === "production") {
  connection = mysql.createPool({
    host: dbConfig.PROD.HOST,
    user: dbConfig.PROD.USER,
    port: dbConfig.PROD.PORT,
    password: dbConfig.PROD.PASSWORD,
    database: dbConfig.PROD.DB,
    charset: "utf8_general_ci",
    connectionLimit: 10,
  });
} else {
  connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    port: dbConfig.PORT,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    charset: "utf8_general_ci",
    connectionLimit: 10,
  });
}

connection.getConnection((err, connect) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  } else {
    connect.query('SET NAMES "utf8"');
    connect.query('SET CHARACTER SET "utf8"');
    connect.query('SET SESSION collation_connection = "utf8_general_ci"');
    console.log("Успешно соединено с БД");
  }
  if (connect) connect.release();
});

// Получение списка
app.get("/api/products", function (req, res) {
  try {
    connection.query(
      "SELECT * FROM `products`",
      function (error, results) {
        if (error) {
          res.status(500).send("Ошибка сервера при получении списка");
          console.log(error);
        }
        console.log("Результаты получения списка");
        console.log(results);
        res.json(results);
      }
    );
  } catch (error) {
    console.log(error);
  }
});
app.use(history());

if (process.env.NODE_ENV === "production") {
  // Информирование о запуске сервера и его порте
  app
    .use("/", serveStatic(path.join(__dirname, "../dist/project")))
    .listen(port, () => {
      console.log("Сервер запущен на http://localhost:" + port);
    });
} else {
  // Информирование о запуске сервера и его порте
  app.listen(port, () => {
    console.log("Сервер запущен на http://localhost:" + port);
  });
}