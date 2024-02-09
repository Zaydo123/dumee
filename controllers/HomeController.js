const marked = require('marked');
const fs = require('fs');
const path = require('path');

exports.index = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../views/home.md');
        const data = await fs.promises.readFile(filePath, 'utf8');
        res.send(marked.parse(data));
    } catch (err) {
        res.status(500).send({ error: 'Error reading markdown file', details: err });
    }
};