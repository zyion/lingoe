
const { distance, ratio } = require('./src/levenshtien.js');

module.exports  = {
    Trie: require('./src/trie.js'),
    distance: distance,
    ratio: ratio
};
