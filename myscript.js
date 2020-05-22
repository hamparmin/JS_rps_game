function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }
function computerPlay(){
    let answer=""
    switch(getRandomInt(1,4)){
        case 1:
            answer="rock";
            break;
        case 2:
            answer="paper";
            break;
        case 3:
            answer="scissors";
            break;
    }
    return answer
}
function evaluate(a1,a2){
    let answer=""
    // returns true if a1 wins, false otherwise
    if (a1=="rock"){
        switch(a2){
            case "rock":
                answer="draw";
                break;
            case "paper":
                answer="lose";
                break;
            case "scissors":
                answer="win";
                break;
        }
    } else if (a1=="paper"){
        switch(a2){
            case "rock":
                answer="win";
                break;
            case "paper":
                answer="draw";
                break;
            case "scissors":
                answer="lose";
                break;
        }                
    } else if (a1=="scissors"){
        switch(a2){
            case "rock":
                answer="lose";
                break;
            case "paper":
                answer="win";
                break;
            case "scissors":
                answer="draw";
                break;
    }
    } return answer
}
function playRound(){
    let playerInput=window.prompt("Rock,paper or scissors?");
    playerInput=playerInput.toLowerCase();
    let computerInput=computerPlay();
    console.log("You played:"+playerInput+"\n The computer played:"+computerInput);
    let result=evaluate(playerInput,computerInput);
    console.log(result)
    return result
}
function returnChoice(e){
    const choice=e.target.value;
    console.log("choice")
    let computerInput=computerPlay();
    addPlayText("You played: "+choice+"\n The computer played: "+computerInput);
    let result=evaluate(choice,computerInput);
    addPlayText("\nThe match is a "+result);
}
function addPlayText(text){
    const main=document.querySelector(".main");
    const p =document.createElement('p');
    p.textContent=text;
    p.classList.add("playtext");
    main.appendChild(p);

}
function playGame(){
    addPlayText("Let's begin! Rock, paper or scissors?")
    let playerInput=buttons;
    console.log(playerInput);
}

// add click listener
const buttons=Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener('click',returnChoice));

//add let's play listener
const letsplay=document.querySelector("#letsplay");
letsplay.addEventListener('click',playGame);


// function playFive(){
//     let playerTally=0;
//     let computerTally=0;
//     let result="";
//     for (i=0;i<5;i++) {
//         result=playRound()
//         if (result=="win"){
//             playerTally+=1;
//         } else if(result=="lose"){
//             computerTally+=1;
//         }
//     }
//     if (playerTally==computerTally){
//         console.log("Its a draw!")
//     } else if (playerTally>computerTally){
//         console.log("You won.")
//     } else if (playerTally<computerTally){
//         console.log("You lost.")
//     }
// }