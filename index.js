const express = require('express');
const mysql = require('mysql2');
/**
 * ініціалізація додатку
 * @constant app
 * @type {Express}
 */
const app = express();
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
    host: '',
    user: '',
    password: '',
    database: ''
}
/**
 * створення з'єднання з базою даних
 * @var sqlDatabase
 * @type {mysql.Connection} 
 * @method createConnection
 * @param {Object} database - база даних
 */
var sqlDatabase = mysql.createConnection(db);
/**
 * @method connect
 * @param {Function} callback - у разі успішного з'єднання база даних додається у масив
 * @param {mysql.QueryError} callback.error - якщо виникне помилка, вона виведеться у консоль
 */
sqlDatabase.connect((error) => {
    if (error) console.log(error);
    else {
        console.log('Connected');
        databases.push(db)
}
});
/**
 * візуалізація веб-сторінки
 * @method get
 * @param {string} route - шлях
 * @param {Function} callback
 * @param {any} callback.request - об'єкт, який містить інформацію про запит HTTP, що викликав подію
 * @param {any} callback.response - відправляє бажану відповідь HTTP
 */
app.get('/', (req, res) => {
    /**
     * запит отриманий від користувача
     * @var sql
     */
    let sql = req.query.sql;
    // var sqlDatabase = databaseConnection(db);
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
        sqlDatabase.query(sql, (error, result, fields) => {
            // перерівка на помилки (синтаксис SQL, наявність запитаних полів у базі даних і тд)
            try {
                /**
                 * створення масиву з результатами обробки запиту
                 * @var result - масив з результатами, які будуть відправлятись на веб-сторінку
                 * @type {Array.<{Object}>}
                 */
                result = result.map(row => 
                    fields.map(f => ({
                        name : f.name,
                        value : row[f.name]
                    }))
                );
                /**
                 * посилання результатів на веб-сторінку для відображення
                 * @method render
                 * @param {string} file - файл для рендерингу
                 * @param {Object} data - дані, які будуть додаватись до сторінки
                 */
                res.render('index', {databases, result, error : ''});
            } catch {
                message = error.message.split("; ");
                // посилання повідомлення про помилку на веб-сторінку
                res.render('index', {databases, result : {}, error : message[0]})
            }

        });
    // якщо запит порожній
    } catch {
        res.render('index', {databases, result : {}, error : ''})
    }

});

module.exports = app;
