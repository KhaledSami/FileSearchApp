exports = module.exports = {};
exports.parse = function(args) {
    var options = {};
    for (var i in args) {
        var arg = args[i];
        if (arg.substr(0, 2) === '--') {
            arg = arg.substr(2);
            if (arg.indexOf('=') !== -1) {
                arg = arg.split('=');
                var key = arg.shift();
                var value = arg.join('=');
                if (/^[0-9]$/.test(value)) {
                    value = parseInt(value, 10);
                }
                options[key] = value;
            }
        }
    }
    return options;
}