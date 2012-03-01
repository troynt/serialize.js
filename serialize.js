 /**
   * @method serialize
   * @param {Object} obj the object to be serialized.
   */
  function serialize(obj, prefix) {
    var str = [];
    for (var p in obj) {
      var k = prefix ? prefix + '[' + p + ']' : p, v = obj[p];
      if (typeof v === 'function') {
        v = v();
      }

      if ( v instanceof String || v instanceof Number || v instanceof Date ) {
        v = v + '';
      }
      str.push(typeof v === 'object' ?
        serialize(v, k) :
        encodeURIComponent(k) + '=' + encodeURIComponent(v));
    }
    return str.join('&').replace(/%20/g, '+');
  }


