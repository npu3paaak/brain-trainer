export function random(quantity) {
    let result = [];
    let copy = words.slice();
    let length = copy.length;
    let count = length < quantity ? length : quantity;

    for (let i = 0; i < count; i++) {
        let index = Math.floor(Math.random() * copy.length);
        result.push(copy[index]);
        copy.splice(index, 1);
    }

    return result;
}
let words = ["the", "of", "and", "to", "a", "in", "that", "it", "with", "as", "for", "was", "on", "are", "by", "be", "at", "this", "which", "or",
    "from", "but", "not", "what", "all", "were", "we", "when", "your",
    "can", "said", "there", "use", "an", "each", "which", "she", "do",
    "how", "their", "if", "will", "up", "other", "about", "out", "many",
    "then", "them", "these", "so", "some", "her", "would", "make", "like",
    "him", "into", "time", "has", "look", "two", "more", "write", "go",
    "see", "number", "no", "way", "could", "people", "my", "than", "first",
    "water", "been", "call", "who", "oil", "its", "now", "find", "long",
    "down", "day", "did", "get", "come", "made", "may", "part", "over",
    "new", "sound", "take", "only", "little", "work", "know", "place",
    "years", "live", "me", "back", "give", "most", "very", "after",
    "things", "our", "just", "name", "good", "sentence", "man", "think",
    "say", "great", "where", "help", "through", "much", "before", "line",
    "right", "too", "mean", "old", "any", "same", "tell", "boy", "follow",
    "came", "want", "show", "also", "around", "form", "three", "small",
    "set", "put", "end", "does", "another", "well", "large", "must",
    "big", "even", "such", "because", "turn", "here", "why", "ask",
    "went", "men", "read", "need", "land", "different", "home", "us",
    "move", "try", "kind", "hand", "picture", "again", "change", "off",
    "play", "spell", "air", "away", "animal", "house", "point", "page",
    "letter", "mother", "answer", "found", "study", "still", "learn",
    "should", "America", "world", "high", "every", "near", "add", "food",
    "between", "below", "country", "plant", "last", "school", "father",
    "keep", "tree", "never", "start", "city", "earth", "eye", "light",
    "thought", "head", "under", "story", "saw", "left", "don't", "few",
    "while", "along", "might", "close", "something", "seem", "next",
    "hard", "open", "example", "the", "of", "and", "to", "a", "in", "that", "it", "with", "as",
    "for", "was", "on", "are", "by", "be", "at", "this", "which", "or",
    "from", "but", "not", "what", "all", "were", "we", "when", "your",
    "can", "said", "there", "use", "an", "each", "which", "she", "do",
    "how", "their", "if", "will", "up", "other", "about", "out", "many",
    "then", "them", "these", "so", "some", "her", "would", "make", "like",
    "him", "into", "time", "has", "look", "two", "more", "write", "go",
    "see", "number", "no", "way", "could", "people", "my", "than", "first",
    "water", "been", "call", "who", "oil", "its", "now", "find", "long",
    "down", "day", "did", "get", "come", "made", "may", "part", "over",
    "new", "sound", "take", "only", "little", "work", "know", "place",
    "years", "live", "me", "back", "give", "most", "very", "after",
    "things", "our", "just", "name", "good", "sentence", "man", "think",
    "say", "great", "where", "help", "through", "much", "before", "line",
    "right", "too", "mean", "old", "any", "same", "tell", "boy", "follow",
    "came", "want", "show", "also", "around", "form", "three", "small",
    "set", "put", "end", "does", "another", "well", "large", "must",
    "big", "even", "such", "because", "turn", "here", "why", "ask",
    "went", "men", "read", "need", "land", "different", "home", "us",
    "move", "try", "kind", "hand", "picture", "again", "change", "off",
    "play", "spell", "air", "away", "animal", "house", "point", "page",
    "letter", "mother", "answer", "found", "study", "still", "learn",
    "should", "America", "world", "high", "every", "near", "add", "food",
    "between", "below", "country", "plant", "last", "school", "father",
    "keep", "tree", "never", "start", "city", "earth", "eye", "light",
    "thought", "head", "under", "story", "saw", "left", "don't", "few",
    "while", "along", "might", "close", "something", "seem", "next",
    "open", "example"

];