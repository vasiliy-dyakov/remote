app.factory('path', function() {
    var STATIC_DIR = '/static';

    return {
        staticRoot: function(path) {
            return STATIC_DIR + path;
        }
    };
});
