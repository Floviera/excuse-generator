function unLoad() {

    const who = [
        'the dog',
        'my granma',
        'his turtle',
        'my bird'
    ]

    const what = [
        'eat',
        'pissed',
        'crushed',
        'broked'
    ]

    const when = [
        'before the class',
        'right in time',
        'when I finished',
        'during my lunch',
        'while I was praying'
    ]




let randomWho = who[Math.floor(Math.random() * who.length)];
let randomWhat = what[Math.floor(Math.random() * what.length)];
let randomWhen = when[Math.floor(Math.random() * when.length)];

document.getElementById("secondSentence").innerHTML = randomWho + ' ' + randomWhat + ' ' + randomWhen + '.';


};

