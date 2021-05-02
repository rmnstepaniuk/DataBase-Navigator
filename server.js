// const path = require('path');
const app = require("./index")

const PORT = process.env.JAWSDB_URL || 8000;

/**
 * прив'язка та прослуховування з'єднань
 * @method listen
 * @param {string | number} PORT - вказаний хост та порт
 * @param {Function} callback - повертає повідомлення про запуск сервера
 */
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
});
