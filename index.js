const express = require('express');
const config = require('./config');
const mysql = require('mysql2');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src');

// function addDatabase(host, user, password, database) {
//     var sqlDatabase = mysql.createConnection({
//         host: host,
//         user: user,
//         password: password,
//         database: database
//     });
//     sqlDatabase.connect((error) => {
//         if (error) console.log(error);
//         console.log('Connected');
//         databases.push(database)
//     });
//     app.get('/', (req, res) => {
//         res.render('index', {databases})
//     });
// }

app.listen(config.PORT, () => {
    console.log(`Server is running on PORT ${config.PORT}...`);
});

var databases = []

var database = {
    host: 'd3y0lbg7abxmbuoi.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user: 'm2725ei61timi8ut',
    password: 'vcae6egn6tnmmaio',
    database: 'b2v6pffi6qrk4ubk'
}

var sqlDatabase = mysql.createConnection(database);
sqlDatabase.connect((error) => {
    if (error) console.log(error);
    console.log('Connected');
    databases.push(database)
});

app.get('/', (req, res) => {
    let sql = req.query.sql;
    if (sql) {
        sqlDatabase.query(sql, (error, result, fields) => {
            if (error) {
                console.log(error);
            }
            result = result.map(row => 
                fields.map(f => ({
                    name : f.name,
                    value : row[f.name]
                }))
                )
                console.log(result);
                res.render('index', {databases, result});
        });
    } else {
        res.render('index', {databases, result : {}})
    }
});
