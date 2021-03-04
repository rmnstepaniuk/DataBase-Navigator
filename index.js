const express = require('express');
const config = require('./config');

const app = express();

app.use(express.static(config.srcDir));

app.listen(config.PORT, () => {
    console.log(`Server is running on PORT ${config.PORT}...`);
});
