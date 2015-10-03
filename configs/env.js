import _ from 'lodash';

var env = _.defaults(process.env, {
    NODE_ENV: 'development',
    PORT: 3000,
    DEBUG: 'Application:*'
});

export default env;

