
// Computer selection function
const computerSelection = function() {
    const choices = ["rock", "paper", "scissors"];
    const randomize = Math.floor(Math.random() * choices.length);
    return choices[randomize];
};

// Player selection function
document.querySelectorAll(".button-wrapper .btn").forEach(function(button){
    let playersChoice;
    const playerSvg = document.querySelector(".player .player-inner");
    button.addEventListener("click", function() {
        
        if (button.id === "rockBtn") {
            playersChoice = "rock";
            playerSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.96 257.23"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M180.49,80V26.61a26.59,26.59,0,0,0-53.18,0V78.54h46.9A14.23,14.23,0,0,1,180.49,80Z"/><path class="a" d="M57.47,78.54V24.59a22.22,22.22,0,0,0-44.44,0V91.07A56.19,56.19,0,0,1,48.45,78.54Z"/><path class="a" d="M213.22,134.07a32.72,32.72,0,0,1-28.31-16.37,49.64,49.64,0,0,1-46,31.11H105.67a54.64,54.64,0,0,1,26.2,46.63v15a4,4,0,0,1-8,0v-15a46.69,46.69,0,0,0-46.63-46.63h-.71a4,4,0,0,1-4-4h0a4,4,0,0,1,4-4h62.39a41.6,41.6,0,0,0,41.57-41.56V92.82a6.28,6.28,0,0,0-6.28-6.28H48.45a48.42,48.42,0,0,0-36.94,17.13c-.67.79-1.33,1.59-1.94,2.42-.26.34-.5.69-.74,1-.61.86-1.2,1.73-1.75,2.63-.18.29-.35.59-.52.89-.56,1-1.09,1.94-1.59,2.93l-.24.49c-.56,1.16-1.06,2.34-1.52,3.54-.06.16-.13.31-.19.47-.45,1.21-.85,2.45-1.21,3.7a2.14,2.14,0,0,1-.13.48C1.33,123.48,1,124.75.8,126l-.09.5c-.23,1.29-.41,2.6-.53,3.91v.46C.07,132.26,0,133.62,0,135c0,3.3.16,6.55.42,9.78,5,62.85,57.71,112.46,121.82,112.46h14.54A101.33,101.33,0,0,0,238,156.06V122.72A32.65,32.65,0,0,1,213.22,134.07Z"/><path class="a" d="M119.31,26.91a26.92,26.92,0,0,0-53.84,0v51.6h53.84Z"/><path class="a" d="M213.22,39a24.76,24.76,0,0,0-24.73,24.74v37.6a24.74,24.74,0,0,0,49.47,0V63.74A24.77,24.77,0,0,0,213.22,39Z"/></svg>';
        } else if (button.id === "paperBtn") {
            playersChoice = "paper";
            playerSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.63 335.83"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M254.56,45.58a18.08,18.08,0,0,0-18.07,18.06V150a4,4,0,0,1-8,0V21.18a21.18,21.18,0,1,0-42.36.11V150a4,4,0,0,1-8,0V22.86A22.9,22.9,0,0,0,155.27,0C141,0,132.41,12.36,132.41,24.3V150a4,4,0,0,1-8,0V47a21.21,21.21,0,0,0-21.18-21.18C90,25.85,82.05,37.3,82.05,48.38V204.67h47A64.51,64.51,0,0,1,177.9,227a4,4,0,0,1-6.05,5.23,56.53,56.53,0,0,0-42.8-19.6h-51a3.07,3.07,0,0,1-.53,0h-.21a4.43,4.43,0,0,1-1-.32l-.21-.11a3.75,3.75,0,0,1-.74-.51l-.1-.08L55.48,193a37.68,37.68,0,0,0-52.56.73,9.79,9.79,0,0,0-.3,13.64l75.11,81.49c30.13,33.4,60.75,47,105.69,47,49.19,0,89.21-40.43,89.21-90.14V64.53C272.67,55.34,266.3,45.58,254.56,45.58Z"/></svg>';
        } else if (button.id === "scissorsBtn") {
            playersChoice = "scissors";
            playerSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228.51 367.31"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M75,202.49h40V158.65a32.28,32.28,0,0,1,10.14-23.46L140.49,26.26A22.69,22.69,0,0,0,95.56,20L74.34,165.47a4,4,0,0,1-7.92,0L45.15,19.54A22.68,22.68,0,1,0,.22,25.84c5.87,43.8,10.31,75.05,13.56,97.87,8.22,57.79,9.61,67.63,9.85,108.53A59.4,59.4,0,0,1,75,202.49Z"/><path class="a" d="M204.13,251.3a32.39,32.39,0,0,1-27-14.54,44.77,44.77,0,0,1-41.89,29.1h-16a51.37,51.37,0,0,1,23.89,43.37v14a4,4,0,0,1-8,0v-14a43.41,43.41,0,0,0-43.4-43.32,4,4,0,0,1-4-4h0a4,4,0,0,1,4-4h43.52A36.59,36.59,0,0,0,159,249.17a37.19,37.19,0,0,0,8.16-9.85A36.28,36.28,0,0,0,171.91,222v-.82a9.25,9.25,0,0,0-.17-1.66v-.39a10.69,10.69,0,0,0-10.48-8.63H75a51.44,51.44,0,0,0-51.36,51.37h0c0,30.59,11.51,58.23,32.4,77.82a103,103,0,0,0,76.84,27.37c53.59-3.47,95.58-50,95.58-105.84v-21A32.3,32.3,0,0,1,204.13,251.3Z"/><path class="a" d="M204.13,159.91a24.41,24.41,0,0,0-24.38,24.38v34.32a17,17,0,0,1,.2,2.57v.61a24.36,24.36,0,0,0,48.56-2.85V184.28A24.39,24.39,0,0,0,204.13,159.91Z"/><path class="a" d="M139.5,135.61a25.39,25.39,0,0,0-2,.83c-.3.16-.72.33-1.07.51l-.92.49c-.38.21-.75.44-1.11.68s-.52.32-.78.5-.77.56-1.14.86c-.22.17-.44.33-.65.51a24.35,24.35,0,0,0-8.74,18.66v43.84h38.27a18.47,18.47,0,0,1,10.48,3.23V158.65A24.4,24.4,0,0,0,150,134.41a22.94,22.94,0,0,0-2.49-.13,22.53,22.53,0,0,0-2.32.12,7,7,0,0,0-.92.12c-.3,0-.9.12-1.34.21l-1.09.24c-.36.08-.74.18-1.11.29Z"/></svg>';
        }
        playRound(playersChoice);
    });
});

// Scoreboard variables
let round = 1;
let playerWinsTotal = 0;
let tiesTotal = 0;
let computerWinsTotal = 0;

// Play round function
const playRound = function(playersChoice) {
    const player = playersChoice;
    const computer = computerSelection();
    const playerWins = document.querySelector(".player-wins .text");
    const ties = document.querySelector(".ties .text");
    const computerWins = document.querySelector(".computer-wins .text");
    const computerSVG = document.querySelector(".computer .computer-inner");
    
    document.querySelector(".col .player-inner").classList.remove("winner");
    document.querySelector(".col .computer-inner").classList.remove("winner");

    switch(player) {

        case "rock":
            if (computer === "scissors") {
                playerWinsTotal++;
                playerWins.innerHTML = playerWinsTotal;
                document.querySelector(".col .player-inner").classList.add("winner");
            } else if(computer ==="paper") {
                computerWinsTotal++;
                computerWins.innerHTML = computerWinsTotal;
                document.querySelector(".col .computer-inner").classList.add("winner");
            } else {
                tiesTotal++;
                ties.innerHTML = tiesTotal;
            }
            break;

        case "paper":
            if (computer === "rock") {
                playerWinsTotal++;
                playerWins.innerHTML = playerWinsTotal;
                document.querySelector(".col .player-inner").classList.add("winner");
            } else if (computer === "scissors") {
                computerWinsTotal++;
                computerWins.innerHTML = computerWinsTotal;
                document.querySelector(".col .computer-inner").classList.add("winner");
            } else {
                tiesTotal++;
                ties.innerHTML = tiesTotal;
            }
            break;

        case "scissors":
            if (computer === "paper") {
                playerWinsTotal++;
                playerWins.innerHTML = playerWinsTotal;
                document.querySelector(".col .player-inner").classList.add("winner");
            } else if (computer === "rock") {
                computerWinsTotal++;
                computerWins.innerHTML = computerWinsTotal;
                document.querySelector(".col .computer-inner").classList.add("winner");
            } else {
                tiesTotal++;
                ties.innerHTML = tiesTotal;
            }
            break;
    }

    if (computer === "rock") {
        computerSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.96 257.23"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M180.49,80V26.61a26.59,26.59,0,0,0-53.18,0V78.54h46.9A14.23,14.23,0,0,1,180.49,80Z"/><path class="a" d="M57.47,78.54V24.59a22.22,22.22,0,0,0-44.44,0V91.07A56.19,56.19,0,0,1,48.45,78.54Z"/><path class="a" d="M213.22,134.07a32.72,32.72,0,0,1-28.31-16.37,49.64,49.64,0,0,1-46,31.11H105.67a54.64,54.64,0,0,1,26.2,46.63v15a4,4,0,0,1-8,0v-15a46.69,46.69,0,0,0-46.63-46.63h-.71a4,4,0,0,1-4-4h0a4,4,0,0,1,4-4h62.39a41.6,41.6,0,0,0,41.57-41.56V92.82a6.28,6.28,0,0,0-6.28-6.28H48.45a48.42,48.42,0,0,0-36.94,17.13c-.67.79-1.33,1.59-1.94,2.42-.26.34-.5.69-.74,1-.61.86-1.2,1.73-1.75,2.63-.18.29-.35.59-.52.89-.56,1-1.09,1.94-1.59,2.93l-.24.49c-.56,1.16-1.06,2.34-1.52,3.54-.06.16-.13.31-.19.47-.45,1.21-.85,2.45-1.21,3.7a2.14,2.14,0,0,1-.13.48C1.33,123.48,1,124.75.8,126l-.09.5c-.23,1.29-.41,2.6-.53,3.91v.46C.07,132.26,0,133.62,0,135c0,3.3.16,6.55.42,9.78,5,62.85,57.71,112.46,121.82,112.46h14.54A101.33,101.33,0,0,0,238,156.06V122.72A32.65,32.65,0,0,1,213.22,134.07Z"/><path class="a" d="M119.31,26.91a26.92,26.92,0,0,0-53.84,0v51.6h53.84Z"/><path class="a" d="M213.22,39a24.76,24.76,0,0,0-24.73,24.74v37.6a24.74,24.74,0,0,0,49.47,0V63.74A24.77,24.77,0,0,0,213.22,39Z"/></svg>';
    } else if (computer === "paper") {
        computerSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.63 335.83"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M254.56,45.58a18.08,18.08,0,0,0-18.07,18.06V150a4,4,0,0,1-8,0V21.18a21.18,21.18,0,1,0-42.36.11V150a4,4,0,0,1-8,0V22.86A22.9,22.9,0,0,0,155.27,0C141,0,132.41,12.36,132.41,24.3V150a4,4,0,0,1-8,0V47a21.21,21.21,0,0,0-21.18-21.18C90,25.85,82.05,37.3,82.05,48.38V204.67h47A64.51,64.51,0,0,1,177.9,227a4,4,0,0,1-6.05,5.23,56.53,56.53,0,0,0-42.8-19.6h-51a3.07,3.07,0,0,1-.53,0h-.21a4.43,4.43,0,0,1-1-.32l-.21-.11a3.75,3.75,0,0,1-.74-.51l-.1-.08L55.48,193a37.68,37.68,0,0,0-52.56.73,9.79,9.79,0,0,0-.3,13.64l75.11,81.49c30.13,33.4,60.75,47,105.69,47,49.19,0,89.21-40.43,89.21-90.14V64.53C272.67,55.34,266.3,45.58,254.56,45.58Z"/></svg>';
    } else if (computer === "scissors") {
        computerSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228.51 367.31"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M75,202.49h40V158.65a32.28,32.28,0,0,1,10.14-23.46L140.49,26.26A22.69,22.69,0,0,0,95.56,20L74.34,165.47a4,4,0,0,1-7.92,0L45.15,19.54A22.68,22.68,0,1,0,.22,25.84c5.87,43.8,10.31,75.05,13.56,97.87,8.22,57.79,9.61,67.63,9.85,108.53A59.4,59.4,0,0,1,75,202.49Z"/><path class="a" d="M204.13,251.3a32.39,32.39,0,0,1-27-14.54,44.77,44.77,0,0,1-41.89,29.1h-16a51.37,51.37,0,0,1,23.89,43.37v14a4,4,0,0,1-8,0v-14a43.41,43.41,0,0,0-43.4-43.32,4,4,0,0,1-4-4h0a4,4,0,0,1,4-4h43.52A36.59,36.59,0,0,0,159,249.17a37.19,37.19,0,0,0,8.16-9.85A36.28,36.28,0,0,0,171.91,222v-.82a9.25,9.25,0,0,0-.17-1.66v-.39a10.69,10.69,0,0,0-10.48-8.63H75a51.44,51.44,0,0,0-51.36,51.37h0c0,30.59,11.51,58.23,32.4,77.82a103,103,0,0,0,76.84,27.37c53.59-3.47,95.58-50,95.58-105.84v-21A32.3,32.3,0,0,1,204.13,251.3Z"/><path class="a" d="M204.13,159.91a24.41,24.41,0,0,0-24.38,24.38v34.32a17,17,0,0,1,.2,2.57v.61a24.36,24.36,0,0,0,48.56-2.85V184.28A24.39,24.39,0,0,0,204.13,159.91Z"/><path class="a" d="M139.5,135.61a25.39,25.39,0,0,0-2,.83c-.3.16-.72.33-1.07.51l-.92.49c-.38.21-.75.44-1.11.68s-.52.32-.78.5-.77.56-1.14.86c-.22.17-.44.33-.65.51a24.35,24.35,0,0,0-8.74,18.66v43.84h38.27a18.47,18.47,0,0,1,10.48,3.23V158.65A24.4,24.4,0,0,0,150,134.41a22.94,22.94,0,0,0-2.49-.13,22.53,22.53,0,0,0-2.32.12,7,7,0,0,0-.92.12c-.3,0-.9.12-1.34.21l-1.09.24c-.36.08-.74.18-1.11.29Z"/></svg>';
    }

    round++;
    document.querySelector("#roundCount").innerHTML = `Round ${round}`;
};