

/*
    Trie Data Structure
    https://en.wikipedia.org/wiki/Trie

 */

class Node {

    constructor () {
        this.end = false;
        this.nodes = [];
    }

}

module.exports = class Trie {

    constructor () {
        this.root = new Node();
    }

    add (key) {
        key = key.toLowerCase();
        let node = this.root;
        for (let i = 0; i < key.length; i++) {
            if (!node.nodes[key[i]]) node.nodes[key[i]] = new Node();
            node = node.nodes[key[i]];
        }
        node.end = true;
    }

    contains (key) {
        key = key.toLowerCase();
        let node = this.root;
        for (let i = 0; i < key.length; i++) {
            if (!node.nodes[key[i]]) return false;
            node = node.nodes[key[i]];
        }
        return (node && node.end);
    }

    prefixes (key) {
        key = key.toLowerCase();
        let words = [];
        let builder = (node, word) => {
            if (node.end) words.push(word);
            for (let i in node.nodes) {
                builder(node.nodes[i], word + i);
            }
        };
        let word = '';
        let node = this.root;
        for (let i = 0; i < key.length; i++) {
            word += key[i];
            if (!node.nodes[key[i]]) return words;
            node = node.nodes[key[i]];
        }
        builder(node, word);
        return words;
    }

    words () {
        let words = [];
        let node = this.root;
        let builder = (node, word) => {
            if (node.end) words.push(word);
            for (let i in node.nodes) {
                builder(node.nodes[i], word + i);
            }
        };
        builder(this.root, '');
        return words;
    }

}
