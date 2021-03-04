const path = require('path');

const PORT = process.env.PORT || 3000;
const srcDir = path.resolve(__dirname, 'src');

module.exports = {PORT : PORT, srcDir : srcDir};
