

let attempts = 0; let bulls = 0; let cows = 0;
let secretNumber = generrateSecretNumber();
console.log(secretNumber);

let roundStats ={
    round: 1,
    wins: 0,
    loses: 0,
}

function checkGuess(){
    let guess = document.getElementById("guessInput").value;
    let secretString = secretNumber.join('');
    bulls = 0; cows = 0;

    const checkGuessLength= new Set(guess);

    if (guess.length !== checkGuessLength.size || guess.length !== 4);{
        document.getElementById("jeuxRea").value += `${guess} est invalide, veuillez entrer un nombre composé de 
        exactement 4 chiffres differents.\n`;
        return null;
    
} 
   attempts += 1;

   for(let i =0; i< 4; i += 1){
    if (secretString[i] === guess[i]){
        bulls += 1;
    } else if (secretString.includes(guess[i])){
        cows +=1;
    }
   }
   if (bulls ===4){
    document.getElementById("jeuxRea").value += `${secretString} | Bravo, vous avez gagné en ${attempts} essais.\n`;
    roundStats.wins +=1;
   } else if (attempts ===10){
    document.getElementById("jeuxRea").value += `${guess} | Domange, vous avez perdu en ${attempts}essais.\n`;
    roundStats.loses += 1;
    return playAgain();
   }

   document.getElementById("jeuxRea").value += `${guess} - ${bulls}B ${cows}c, try: ${attempts} \n`;
   printGameStats();
  }
function playAgain(){
    roundStats.round+= 1;
    printGameStats();
    attempts = 0; bulls =0; cows = 0;
    secretNumber = generrateSecretNumber();
}

function printGameStats(){
    const gameStats= document.getElementById("gameStats");
    gameStats.innerHTML=`R: ${roundStats.round} | V: ${roundStats.wins} | D:${roundStats.loses}`;
}

function generrateSecretNumber(){
    const numbers = Array.from({length: 9}, (V, k) => k + 1);
    let currentIndex = numbers.length, randomIndex;

    while(currentIndex!= 0){
        randomIndex= Math.floor(Math.random() * currentIndex);
        currentIndex-= 1;

        [numbers[currentIndex], numbers[randomIndex]] = [numbers[randomIndex], numbers[currentIndex]];
    }

    return numbers.slice(0, 4);
}
function clearJeux(){
    document.getElementById("jeuxRea").value="";

}

function printRules(){

}
