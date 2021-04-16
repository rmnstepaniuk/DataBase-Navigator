const path = require('path');

const PORT = process.env.JAWSDB_URL || 8000;
const srcDir = path.resolve(__dirname, 'src');

module.exports = {PORT : PORT, srcDir : srcDir};
