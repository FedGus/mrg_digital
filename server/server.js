const express = require("express");
const bodyParser = require("body-parser"); //body-parser разбирает JSON-тело POST-запросов
const mysql = require("mysql2");
const dbConfig = require("./db.config.js");
const history = require("connect-history-api-fallback");
const app = express();
const port = 8085;

// Парсинг json
app.use(bodyParser.json());

// Парсинг запросов по типу: application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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
connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT,
  charset: "utf8_general_ci",
  connectionLimit: 10,
});

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

//Обработка получения списка заметок
app.get("/api/products/", function (req, res) {
  try {
    connection.query(
      `SELECT * FROM products`,
      function (error, results) {
        if (error) {
          res.status(500).send("Ошибка сервера при получении информации");
          console.log(error);
        }
        console.log("Результаты получения информации о продукте");
        console.log(results);
        res.json(results);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.use(history()); 

// Информирование о запуске сервера и его порте
app.listen(port, () => {
  console.log("Сервер запущен на http://localhost:" + port);
});