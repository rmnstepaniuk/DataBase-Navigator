const express = require('express');
const config = require('./config');
const mysql = require('mysql2');

// ініціалізація додатку
const app = express();

// підключення npm-ejs
app.set('view engine', 'ejs');
// зміна стандартної папки npm-ejs
app.set('views', 'src');

// додавання нової бази даних до масиву (in dev)
// function addDatabase(host, user, password, name) {
//     var database = {
//         host: host,
//         user: user,
//         password: password,
//         database: name
//     }
//     var sqlDatabase = mysql.createConnection(database);
//     sqlDatabase.connect((error) => {
//         if (error) console.log(error);
//         else {
//             console.log('Connected');
//             databases.push(database)
//         }
//     });
//     app.get('/', (req, res) => {
//         res.render('index', {databases})
//     });
// }

// використовується для прив'язки та прослуховування з'єднань на вказаному хості та порту
// () => - call-back функція, яка сигналізує про успішний запуск сервера
app.listen(config.PORT, () => {
    console.log(`Server is running on PORT ${config.PORT}...`);
});

// масив з базами даних
var databases = []
// тестова база даних
var database = {
    host: 'd3y0lbg7abxmbuoi.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user: 'm2725ei61timi8ut',
    password: 'vcae6egn6tnmmaio',
    database: 'b2v6pffi6qrk4ubk'
}
// створення з'єднання з базою даних
var sqlDatabase = mysql.createConnection(database);
sqlDatabase.connect((error) => {
    if (error) console.log(error);
    else {
        console.log('Connected');
        // у разі успішного з'єднання 
        // база даних додається у масив
        databases.push(database)
    }
});

// візуалізація веб-сторінки
app.get('/', (req, res) => {
    let sql = req.query.sql;
    // якщо запит НЕ порожній
    if (sql) {
        // обробка SQL запиту
        sqlDatabase.query(sql, (error, result, fields) => {
            // error-hadler: перерівка на помилки (синтаксис SQL, наявність запитаних полів у базі даних і тд)
            if (error) {
                message = error.message.split("; ");
                // посилання повідомлення про помилку на веб-сторінку
                res.render('index', {databases, result : {}, error : message[0]})
            }
            else {
                // створення масиву з результатами обробки запиту
                // у форматі 'key : value'
                result = result.map(row => 
                    fields.map(f => ({
                        name : f.name,
                        value : row[f.name]
                    }))
                );
                // посилання результатів на веб-сторінку для відображення
                res.render('index', {databases, result, error : ''});
            }
        });
    // запит порожній
    } else {
        res.render('index', {databases, result : {}, error : ''})
    }
});
