const audio = document.querySelector("audio");
const bass = document.getElementById("bass");
const e1 = document.getElementById("1");
const background = document.querySelector("main");
const header = document.querySelector("h1");
const button = document.getElementById("button");
const icons = document.querySelectorAll("i");
const computer_choice = document.getElementById("computer-choice");
const player_choice = document.getElementById("player-choice");
const player_choices = Array.from(document.querySelectorAll(".note-choice"));
let timer = document.getElementById("timer");
let scoreBoard = document.getElementById("score");
let streakBoard = document.getElementById("streak");

let scorePlayer = 0;
let countQuestions = 0;
let streak = 0;



const notes = ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#","D",/*end of 10*/  "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", /*end of E string 20*/ "A#", "B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", /*end of A string 20*/ "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", /*end of D string 20*/ "G#", "A", "A#", "B", "C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#","D", "D#" /*open strings*/, "A", "D", "G"];


// const notes = ["E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1", "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6"];

const letters = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];

let previous_note;

function onLoad(){
    background.style.opacity = "1";
    header.style.fontSize = "7vh";
    computer_choice.innerHTML = "";
    setTimeout(() => { bass.style.transform = "translateX(0px)";}, 500);
    setTimeout(() => { button.style.opacity = "1"; }, 1000);      
    
}


function generateRandom (){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}

function generateRandomTwo (){
    let randomNumber = Math.floor(Math.random() * notes.length);
    return randomNumber;
}

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * letters.length);
    return randomNumber;
    };

function randomLetter (){
    let randomNumber = generateRandomNumber();
    let letter = letters[randomNumber];
    return letter;
}

function previousNumber (x){    
    previous_note = document.getElementById(x);
    computer_choice.innerHTML = notes[x];      
    
};

document.getElementById('button').addEventListener("click", function(){
    
    // activateChoices();
    activateTimer();
    countQuestions++;    
    scoreBoard.innerHTML = `Score: ${scorePlayer} / ${countQuestions}`;
    audio.src = "./audio/f1.mp3";   
    changeButtonToSkip(); 
    previous_note.style.opacity = "0";
    computer_choice.style.opacity = "0";
    player_choice.innerHTML = ""; //remove previous player choice
    player_choice.style.background = "linear-gradient(3600deg, #b96d41, #ffd587 100%)";
    let random = generateRandomTwo ();
    let note = document.getElementById(`${random}`);
    previousNumber(random);
    note.style.opacity = "1";
    audio.play();
});

function changeButtonToSkip(){
        button.innerHTML = "SKIP";        
        button.style.background = "orange";    
}

function changeButtonToPlay(){
    button.innerHTML = "PLAY!";        
    button.style.background = "#297416ec"; 
}

// ACTIVATE THE TIMER! ----------------------------------------------------------------------------------

function activateTimer(){
    console.log("jim");
    setInterval(myTimer, 1000);

    function myTimer() {
        const d = new Date();
        timer.innerHTML = `Timer: ${d.toLocaleTimeString()}`;
}
};

//PLAYERS CHOICE ----------------------------------------------------------------------

//Add event listeners to the player's options, match the index to the array 'letters', confirm player's choice. Change colours
// function activateChoices(){
player_choices.forEach(item => {
    item.addEventListener("click", function(){
        let index_of_choice = player_choices.indexOf(item);
        player_choice.innerHTML = letters[index_of_choice].toUpperCase();
        console.log(letters[index_of_choice].toUpperCase());
        computer_choice.style.opacity = "1";
        changeColor();        
        changeButtonToPlay();
    })
})
// }

function changeColor(){
    if (player_choice.innerHTML === computer_choice.innerHTML){
        player_choice.style.background = "#297416ec";
        earnPoint(); 
    } else {
        player_choice.style.background = "red";
    }
    streakCount();
};

function earnPoint(){   ////////////////NOT WORKING!!!
    scorePlayer++;
    scoreBoard.innerHTML = `Score: ${scorePlayer} / ${countQuestions}`;    
}

function streakCount(){
    if (player_choice.innerHTML === computer_choice.innerHTML){
        streak++;        
        console.log("streak");
    } else {
        console.log("streak lost!");
        streak -= streak;
    }
    streakBoard.innerHTML = `Streak: ${streak}`;
}



previousNumber(40);
onLoad();
// let note = `${randomLetter()}${generateRandom()}`;