var app = require('express')(),
    fs = require('fs'),
    port = 3000,
    rootDir = __dirname.split('/').slice(0, -1).join('/'),
    staticDir = rootDir + '/static',
    clientStaticDir = '/static';

app.get('/*', function(request, response) {
    var path = request.path;

    response.send(
        /^\/static\//.test(path)
            ? fs.readFileSync(rootDir + path, {
                encoding: 'utf8'
            })
            : fs.readFileSync(staticDir + '/index.html', {
                encoding: 'utf8'
            }).replace(/\{\{staticDir\}\}/g, clientStaticDir)
    );
});

app.listen(port);
