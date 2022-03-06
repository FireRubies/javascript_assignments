var words = ["This", "is", "JavaScript", "BootCamp!"];

function createSentence(arr) {
    let sentence = "";

    for (var i = 0; i < arr.length; i++) {
        sentence += arr[i] + " "
    }
    return sentence.trim();
}

console.log(createSentence(words));