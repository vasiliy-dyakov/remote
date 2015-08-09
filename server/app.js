var app = require('express')(),
    fs = require('fs'),
    args = process.argv.slice(2),
    port = args[0] || 3000,
    rootDir = __dirname.split('/').slice(0, -1).join('/'),
    staticDir = rootDir + '/static',
    clientStaticRoot = '/static';

app.get('/static/*', function(request, response) {
    response.sendFile(rootDir + request.path);
});

app.get('/*', function(request, response) {
    response.send(fs.readFileSync(staticDir + '/views/app.html', {
        encoding: 'utf8'
    }).replace(/\{%staticRoot%\}/g, clientStaticRoot));
});

app.listen(port);
console.log('http://localhost:' + port + '/');
