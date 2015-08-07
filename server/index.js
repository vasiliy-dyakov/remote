var connect = require('connect'),
    serveStatic = require('serve-static'),
    staticDir = __dirname.split('/').slice(0, -1).concat(['static']).join('/');

console.log('http://localhost:3000/');

connect().use(serveStatic(staticDir)).listen(3000);
