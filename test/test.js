
const { assert } = require('chai');

const Lingoe = require('../index.js');


describe('Testing Trie Data Structure', () => {
    let trie = new Lingoe.Trie();

    let words = ['word', 'the', 'apple', 'there', 'ape', 'bananas'];
    for (let i in words) trie.add(words[i]);

    it('Is an Object', () => {
        assert.isObject(trie);
    });

    // contains

    it('Contains added word', () => {
        assert.isTrue(trie.contains('apple'));
    });

    it('Case insensitive', () => {
        assert.isTrue(trie.contains('ApPle'));
    });

    it('Doesn\'t contain partial word', () => {
        assert.isFalse(trie.contains('app'));
    });

    it('Doesn\'t contain word', () => {
        assert.isFalse(trie.contains('apples'));
    });

    it('Doesn\'t contain unadded word', () => {
        assert.isFalse(trie.contains('pear'));
    });

    // words list

    it('Words returned in array', () => {
        assert.isArray(trie.words());
    });

    it('Contains all words', () => {
        assert.sameMembers(trie.words(), words);
    });

    it('Doesn\'t contain words', () => {
        assert.notIncludeMembers(trie.words(), ['apples', 'pineapple']);
    });

    // prefixes

    it('Can find all prefixes', () => {
        assert.sameMembers(trie.prefixes('ap'), ['apple', 'ape']);
        assert.sameMembers(trie.prefixes('th'), ['there', 'the']);
    });

});

describe('Testing Levenshtien Distance', () => {

    it('Is a function', () => {
        assert.isFunction(Lingoe.distance);
    });

    it('Calculate the correct distance for empty string', () => {
        assert.equal(2, Lingoe.distance('hi', ''));
        assert.equal(2, Lingoe.distance('', 'ho'));
        assert.equal(0, Lingoe.distance('', ''));
    });

    it('Is case insensitive', () => {
        assert.equal(0, Lingoe.distance('kitten', 'KiTTen'));
    });

    it('Calculate the correct distance', () => {
        assert.equal(3, Lingoe.distance('kitten', 'sitting'), 'kitten - sitting');
        assert.equal(4, Lingoe.distance('apples', 'pineapples'), 'apples - pineapples');
        assert.equal(2, Lingoe.distance('flaw', 'lawn'), 'flaw - lawn');
    });

});

describe('Testing Levenshtien Ratio', () => {

    it('Is a function', () => {
        assert.isFunction(Lingoe.ratio);
    });

    it('Calculate the correct ratio for empty string', () => {
        assert.equal(0, Lingoe.ratio('hi', ''));
        assert.equal(0, Lingoe.ratio('', 'ho'));
    });

    it('Is case insensitive', () => {
        assert.equal(1, Lingoe.ratio('kitten', 'KiTTen'));
    });

    it('Calculate the correct ratio', () => {
        assert.equal(1 - (3 / 7), Lingoe.ratio('kitten', 'sitting'), 'kitten - sitting');
        assert.equal(1 - (4 / 10), Lingoe.ratio('apples', 'pineapples'), 'apples - pineapples');
        assert.equal(1 - (2 / 4), Lingoe.ratio('flaw', 'lawn'), 'flaw - lawn');
    });

});
