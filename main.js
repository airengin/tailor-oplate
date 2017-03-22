'use strict';

const http = require('http');
const path = require('path');
const Tailor = require('node-tailor');
const tailor = new Tailor({
    amdLoaderUrl:'file://'+ path.join(__dirname,'portal/public/loader.js'),
    templatesPath: path.join(__dirname, 'templates/home'),
    routesPath:path.join(__dirname, 'conf/services'),
});
const server = http.createServer(function (request, response) {
    if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'});
        return response.end('');
    }
    return tailor.requestHandler(request, response);
});
server.listen(9090, () => {
    console.log('Tailor started at port 9090');
});

tailor.on('error', (request, error) => {
    console.log(error);
});
