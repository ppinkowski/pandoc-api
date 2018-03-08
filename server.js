const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const shortId = require('shortid');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const app = express();

app.use(bodyParser.raw());
app.use(bodyParser.text());

app.post('/convert/:sourceType?', async (req, res) => {
    const sourceType = req.params.sourceType || 'md';
    const fileId = shortId.generate();
    await fs.writeFile(`./${fileId}.${sourceType}`, req.body);
    await exec(`pandoc ./${fileId}.${sourceType} -o ./${fileId}.pdf`);
    res.download(`./${fileId}.pdf`, async () => {
        await fs.unlink(`./${fileId}.${sourceType}`);
        await fs.unlink(`./${fileId}.pdf`);
    });
});

app.listen(8080);
