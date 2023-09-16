const messages = []

function writeCards(names, event) {
    for (let i = o; names.lenght > i; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown() {
    let count = 0;
    while (count < 11) {
        console.log(count++);
    }
}