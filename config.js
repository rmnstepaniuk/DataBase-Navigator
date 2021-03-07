const path = require('path');

const PORT = process.env.JAWSDB_URL || 3306;
const srcDir = path.resolve(__dirname, 'src');

module.exports = {PORT : PORT, srcDir : srcDir};
