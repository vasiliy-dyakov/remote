import _ from 'lodash';

var env = _.defaults(process.env, {
    NODE_ENV: 'development',
    PORT: 3000,
    PROJECT_NAME: 'Remote',
    DEBUG: '*'
});

export default env;

