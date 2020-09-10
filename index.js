const { forkString } = require('child-process-fork-string');

const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');

const app = express();
const port = config.app.port;

const parseRawBody = function (req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    }
}

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.raw({ verify: parseRawBody, type: function () { return true } }));
app.use(bodyParser.json());

app.post('/submit', async (req, res, next) => {
    const { params, body } = req;

    const scriptAsText = body.toString('utf8');
    const jsRunner = forkString(scriptAsText, { silent: true, type: 'vm'});
    
    let results = '';
    let resultsWithError = '';

    jsRunner.stdout.on('data', (data) => {
        results += data;
    });
    
    jsRunner.stderr.on('data', (data) => {
        resultsWithError += data;
    });
    
    jsRunner.on('close', (code) => {
        res.send(code === 0 ? results : resultsWithError)
        next();
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})