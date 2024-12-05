/*
    This program will split the sentence into words,
    words to letters and we will remove letters,
    based on the length of word we need
*/

function rebuild_sentence(words, lengths) {
    /*
        The length will limit the word 
        and print it to the list
    */
    let split_words = []
    let count = 0
    for (let length_words = 0; length_words < lengths.length; length_words++) {
        let letters = words[count]
        if (lengths[length_words] > letters.length) {
            split_words.append(letters)
        }
        else {
            split_words.append(letters[lengths[length_words]])
        }
        count += 1
    }
    return split_words
}

let words_split = ["Mohammad", "Adada", "is", "smart"]
let length_word = [3, 5, 2, 3]
let control_length = rebuild_sentence(words_split, length_word)
console.log(control_length)
