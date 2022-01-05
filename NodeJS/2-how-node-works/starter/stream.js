const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // read all data and then display in res end
    const result = fs.readFile(
        `${__dirname}/test-file.txt`,
        'utf-8',
        (err, data) => {
            if (err) console.log('error', err);
            res.end(data);
        }
    );
    // read data in stream and then show the chunk data in res.write()
    // we have back pressure issue means incoming/read data is not much speed as receiving/write data
    const result1 = fs.createReadStream(`${__dirname}/test1-file.txt`, 'utf-8');
    result1.on('data', (chunk) => {
        res.write(chunk);
    });
    result1.on('end', () => {
        res.end();
    });
    result1.on('error', (err) => {
        console.log('error', err);
        res.statusCode = 500;
        res.end('file not found');
    });

    // use pipe to resolve the back pressure issues
    const result2 = fs.createReadStream(`${__dirname}/test1-file.txt`, 'utf-8');
    result2.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening 8000 server');
});
