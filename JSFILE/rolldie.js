const Die = {
    sides: 6,
    value: 1,
    roll() {
        this.value = Math.floor(Math.random() * this.sides) + 1;
    }
};

function rollDice() {
    const die1 = Object.create(Die);
    const die2 = Object.create(Die);
    die1.roll();
    die2.roll();
    let resultText = `You rolled a ${die1.value} and a ${die2.value}.`;
    if (die1.value === die2.value) {
        resultText += " It's a double!";
    }
    document.getElementById("result-container").textContent = resultText;
}

document.getElementById("roll-button").addEventListener("click", rollDice);