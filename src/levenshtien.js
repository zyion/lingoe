
/*
    Levenshtien Distance between two strings
    https://en.wikipedia.org/wiki/Levenshtein_distance
    Calculates the number of deletions, insertions and substitutions required to transform string A into string B
    returns the difference as an integer value
 */
function distance (a, b) {
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    if (a.length > b.length) {
        let temp = a;
        a = b;
        b = temp;
    }
    a = a.toLowerCase();
    b = b.toLowerCase();
    let row = Array(a.length + 1);
    for (let i = 0; i <= a.length; i++) {
        row[i] = i;
    }
    for (let i = 1; i <= b.length; i++) {
        let last = i;
        for (let j = 1; j <= a.length; j++) {
            let distance = a[j - 1] === b[i - 1] ? row[j - 1] : Math.min(
                row[j] + 1,     // delete
                last + 1,       // insert
                row[j - 1] + 1  // substitute
            );
            row[j - 1] = last;
            last = distance;
        }
        row[a.length] = last;
    }
    return row[a.length];
}


/*
    Levenshtien Distance ratio between two strings
    returns the difference as a ratio value from 0.0 to 1.0
 */
function ratio (a, b) {
    return 1.0 - (distance(a, b) / Math.max(a.length, b.length));
}


module.exports = {
    distance: distance,
    ratio: ratio
};
