const express = require('express');
const config = require('./config');
const sql = require('mysql2');


const app = express();

app.use(express.static(config.srcDir));

// const connectionURL = process.env.JAWSBD_URL; //|| 'mysql://user:password@host:name/defaul_schema'

app.listen(config.PORT, () => {
    console.log(`Server is running on PORT ${config.PORT}...`);
});

var connection = sql.createConnection({
    host: 'd3y0lbg7abxmbuoi.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user: 'm2725ei61timi8ut',
    password: 'vcae6egn6tnmmaio',
    database: 'b2v6pffi6qrk4ubk'
});

connection.connect(function(error) {
    if (error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/db.html', function(req, res) {
    connection.query('SELECT access.role, user.name FROM access, user WHERE access.user_id = user.id;', function(error, rows, fields) {
        if (error) {
            console.log('Error');
        } else {
            console.log(rows);
            res.send(rows);
        }
    });
});
