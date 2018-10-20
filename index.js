function unLoad() {

    const who = [
        'my dog',
        'my grandma',
        'a car',
        'my bird'
    ]

    const what = [
        'ate her sock',
        'pissed',
        'fell',
        'pooped'
    ]

    const when = [
        'before the class',
        'when I woke up',
        'when I was waking up',
        'while I was eating lunch',
        'while I was praying'
    ]




let randomWho = who[Math.floor(Math.random() * who.length)];
let randomWhat = what[Math.floor(Math.random() * what.length)];
let randomWhen = when[Math.floor(Math.random() * when.length)];

document.getElementById("secondSentence").innerHTML = randomWho + ' ' + randomWhat + ' ' + randomWhen + '.';


};

