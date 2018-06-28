# Lingoe
Word search algorithms


## Install
### Node.js
```bash
npm install lingoe
```


## Usage

Add node module
```js
const Lingoe = require('lingoe');
```

Trie
```js
let trie = new Lingoe.Trie();

let words = ['word', 'the', 'apple', 'there', 'ape', 'bananas'];
for (let i in words) {
	trie.add(words[i]);
}

console.log(trie.contains('apple'));
// outputs true

console.log(trie.prefixes('ap'));
// outputs ['apple', 'ape']

console.log(trie.words());
// outputs ['word', 'the', 'apple', 'there', 'ape', 'bananas']
```

Levenshtien Distance
```js
console.log(Lingoe.distance('kitten', 'sitting'));
// outputs 3
```

Levenshtien Distance Ratio
```js
console.log(Lingoe.ratio('flaw', 'lawn'));
// outputs 0.5
```
