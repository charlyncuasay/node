const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/viewmore':
            path += 'view_more.html';
            res.statusCode = 200;
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        case '/school':
            path += 'school.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Read the appropriate HTML file and send it as a response
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

// Listen on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});
