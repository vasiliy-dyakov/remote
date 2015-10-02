require('babel/register');
require('debug').enable(require('../configs/env').DEBUG);
new (require('./Application'));
