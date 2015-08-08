var app = require('express')(),
    fs = require('fs'),
    port = 3000,
    rootDir = __dirname.split('/').slice(0, -1).join('/'),
    staticDir = rootDir + '/static',
    clientStaticDir = '/static';

app.get('/static/*', function(request, response) {
    response.sendFile(rootDir + request.path);
});

app.get('/*', function(request, response) {
    response.send(fs.readFileSync(staticDir + '/views/app.html', {
        encoding: 'utf8'
    }).replace(/\{\{staticRoot\}\}/g, clientStaticDir));
});

app.listen(port);
