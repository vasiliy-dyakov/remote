app.factory('path', function() {
    return {
        staticRoot: function(path) {
            return STATIC_ROOT + path;
        }
    };
});
