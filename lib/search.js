var fs = require('fs');

exports = module.exports = {};
exports.scan = function(dir, depth, done) {
    depth--;
    var result = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, result);
            file = dir + '/' + file;
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    if (depth !== 0) {
                        var nDepth = depth > 1 ? depth - 1 : 1;
                        exports.scan(file, nDepth, function(err, res) {
                            result = result.concat(res);
                            next();
                        });
                    } else {
                        next();
                    }
                } else {
                    result.push(file);
                    next();
                }
            });
        })();
    });
}

exports.match = function(query, files) {
    var matches = [];
    files.forEach(function(file) {
        if (file.indexOf(query) !== -1) {
            matches.push(file);
        }
    });
    return matches;
}