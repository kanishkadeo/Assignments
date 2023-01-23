
let maximum = parseInt(prompt("Enter the Maximum Number !"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a Valid Number !"));
}

const targetNum = Math.floor(Math.random() * maximum + 1);
console.log(targetNum);

let guess = parseInt(prompt("Enter your First guess !!"));

let attempts = 1;


while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = (prompt("Too High !! Enter a New Guess :- "));
    }
    else {
        guess = (prompt("Too Low !! Enter a New guess :- "));
    }
}
if (guess === 'q') {
    console.log("OK YOU QUIT !!");
}
else {
    console.log("CONGRATS YOU WIN !!")
    console.log(`You Got IT , ITS TOOK YOU ${attempts} GUESSES !!`);
}