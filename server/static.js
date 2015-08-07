var connect = require('connect'),
    serveStatic = require('serve-static'),
    port = 3000,
    staticDir = __dirname.split('/').slice(0, -1).concat(['static']).join('/');

connect().use(serveStatic(staticDir)).listen(port);
console.log('http://localhost:' + port + '/');
