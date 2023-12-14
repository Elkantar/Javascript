//const src = { nested: { key: 'peekaboo' } }

//const path = 'nested.key'

function get (src, path){
    var paths = path.split('.')
    , current = src
    , i;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}

console.log(get({ nested: { key: 'value' } }, 'nx.nx'))