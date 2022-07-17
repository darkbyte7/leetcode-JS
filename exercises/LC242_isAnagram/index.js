function isAnagram(s, t) {
    // if lengths of s and t are unequal, then not anagram.
    if (s.length !== t.length) {
        return false;
    }

    const sCharsMap = {}; // { H:1, E:1, L:2, O:1}

    // populate character map of s - sCharsMap
    for (let c of s) {
        sCharsMap[c] = (sCharsMap[c] || 0) + 1;
    }

    for (let c of t) {
        if (!sCharsMap[c]) return false;
        sCharsMap[c]--;
    }

    return true;
}

module.exports = isAnagram;
