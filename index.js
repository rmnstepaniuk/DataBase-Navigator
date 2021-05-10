const express = require('express');
const mysql = require('mysql2');

const app = initApp();
/**
 * масив з базами даних
 * @var databases
 * @type {Array<{Object}>}
 */
var databases = []
/**
 * тестова база даних
 * @var database
 * @type {{host: string, user: string, password: string, database: string}}
 */
 var db = {
    host: 'd3y0lbg7abxmbuoi.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user: 'm2725ei61timi8ut',
    password: 'vcae6egn6tnmmaio',
    database: 'b2v6pffi6qrk4ubk'
}
var Connection = connectDatabase(db);
/**
 * візуалізація веб-сторінки
 * @method get
 * @param {string} route
 * @param {Function} callback
 * @param {any} callback.request
 * @param {any} callback.response
 */
app.get('/', (req, res) => {
    /**
     * запит отриманий від користувача
     * @var sqlQuery
     */
    let sqlQuery = req.query.sql;
    try {
        /**
         * обробка SQL запиту
         * @method query 
         * @param {string} sql - запит користувача
         * @param {Function} callback
         * @param {mysql.QueryError} callback.error - помилка запиту
         * @param {mysql.RowDataPacket} callback.result - містить рядки, повернені сервером
         * @param {mysql.FieldPacket} callback.fields - містить додаткові метадані про результати, якщо такі є
         */
        Connection.query(sqlQuery, (error, result, fields) => {
            // перерівка на помилки (синтаксис SQL, наявність запитаних полів у базі даних і тд)
            try {
                errorMessage = ''
                /**
                 * створення масиву з результатами обробки запиту
                 * @var queryResult - масив з результатами, які будуть відправлятись на веб-сторінку
                 * @type {Array.<{Object}>}
                 */
                queryResult = result.map(row => 
                    fields.map(f => ({
                        name : f.name,
                        value : row[f.name]
                    }))
                );
                // console.log(queryResult);
                // return [queryResult, errorMessage]

                res.render('index', {databases, result : queryResult, error : errorMessage});
            } catch {
                errorMessage = error.message.split("; ")[0];
                queryResult = {};

                // посилання повідомлення про помилку на веб-сторінку
                res.render('index', {databases, result : queryResult, error : errorMessage})

                // return [queryResult, errorMessage]
            }
        });
        /**
         * посилання результатів на веб-сторінку для відображення
         * @method render
         * @param {string} file - файл для рендерингу
         * @param {Object} data - дані, які будуть додаватись до сторінки
         */
        // res.render('index', {databases, result, error})
    // якщо запит порожній
    } catch {
        res.render('index', {databases, result : {}, error : ''})
    }
});

module.exports = app;

/**
 * ініціалізація додатку
 * @returns
 */
function initApp() {
    var app = express();
    /**
     * конфігурація налаштувань npm-ejs
     * @method set
     * @param {string} param1 - перший параметр: яке налаштування ми хочемо змінити
     * @param {string} param2 - другий параметр: нове значення цього налаштування
     */
    /**
     * підключення npm-ejs
     */
    app.set('view engine', 'ejs');
    /**
     * зміна стандартної папки npm-ejs
     */
    app.set('views', 'src');

    return app;
}
/**
 * створення з'єднання з базою даних
 * @param {Object} database 
 * @returns
 */
function connectDatabase(database) {
    /**
     * @var Connection
     * @type {mysql.Connection} 
     * @method createConnection
     * @param {Object} database
     */
    var Connection = mysql.createConnection(database);
    /**
     * @method connect
     * @param {Function} callback - у разі успішного з'єднання база даних додається у масив
     * @param {mysql.QueryError} callback.error - якщо виникне помилка, вона виведеться у консоль
     */
    Connection.connect((error) => {
        if (error) console.log(error);
        else {
            console.log('Connected');
            databases.push(database);
    }
    });

    return Connection;
}
