// Generated by CoffeeScript 1.6.2
(function() {
  exports.parseArgs = function() {
    var defination, lastKey, nextIsValue, oneArg, result, _, _ref;

    defination = {
      '-l': 'local_port',
      '-p': 'server_port',
      '-s': 'server',
      '-k': 'password',
      '-c': 'config_file',
      '-m': 'method'
    };
    result = {};
    nextIsValue = false;
    lastKey = null;
    _ref = process.argv;
    for (_ in _ref) {
      oneArg = _ref[_];
      if (nextIsValue) {
        result[lastKey] = oneArg;
        nextIsValue = false;
      } else if (oneArg in defination) {
        lastKey = defination[oneArg];
        nextIsValue = true;
      }
    }
    return result;
  };

  exports.version = "shadowsocks-nodejs v1.2";

}).call(this);
