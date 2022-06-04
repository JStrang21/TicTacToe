const newPlayer = (playerNumber) => {
    let playerSign;
    let playerName;
    let winCount = 0;
    if (playerNumber == 0) {
        playerSign = 'X';
    }
    else if (playerNumber == 1) {
        playerSign = 'O';
    }
    else {console.log('Error: maximum player count is 2 players')}

    const playerClick = (e) => {
        e.target.innerHTML = playerSign;
        e.target.removeAttribute('class', 'aiFunctionality');
        e.target.classList.add(`checked`, 'gameElements');
    }
    return {playerClick, playerSign, playerName, winCount}
}
const playerX = newPlayer(0);
const playerO = newPlayer(1);

//IFFE Module which creates gameboard checkedArray with clickable elements
const gameBoard = (() => {
    let board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    const gameBoardContainer = document.querySelector('.gameBoardContainer');
    //Two loops for each dimension of board checkedArray
    let elementID = 0;
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            const newElement = document.createElement('div');
            newElement.setAttribute('id', `${elementID}`);
            newElement.classList.add('aiFunctionality', 'gameElements');
            elementID++;
            newElement.innerHTML = board[i][j];
            gameBoardContainer.appendChild(newElement);

            //Eventlistener to add player click
            newElement.addEventListener('click', countClicks.bind(newElement));
        }    
    }
})();


//Counts clicks and has user 1 or 2 click depending on if counter is even or odd
let numberOfClicks = 0;
function countClicks(e) {
    //If tile hasn't been clicked then continue
    if (this.innerHTML === '') {
        if (numberOfClicks < 9) {
            if (numberOfClicks % 2 == 0) {
                numberOfClicks++;
                playerX.playerClick(e);
                checkGame(e);
            }
            else if (numberOfClicks % 2 != 0) {
                numberOfClicks++;
                playerO.playerClick(e);
                checkGame(e);
            }
            else {
                console.log('error')
            }
        }
    }
    else {
        console.log('Error: tile already placed')
    }
}

let checkedArray = [1,2,3,4,5,6,7,8,9];
const checkGame = (e) => {
    let elementPosition = e.target.id;
    checkedArray[elementPosition] = e.target.innerHTML;
    
    //Checks columns for win
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            if ((checkedArray[0] === checkedArray[3]) && (checkedArray[0] === checkedArray[6])) {
                winner(checkedArray[0]);
            }
        }
        if (i = 1) {
            if ((checkedArray[1] === checkedArray[4]) && (checkedArray[1] === checkedArray[7])) {
                winner(checkedArray[1]);
            }
        }
        if (i = 2) {
            if ((checkedArray[2] === checkedArray[5]) && (checkedArray[2] === checkedArray[8])) {
                winner(checkedArray[2]);
            }
        }
    }
    //Checks rows for win
    for (j = 0; j < 7; j++) {
        if (j = 0) {
            if ((checkedArray[0] == checkedArray[1]) && (checkedArray[0] == checkedArray[2])) {
                winner(checkedArray[0]);
            }
        }
        if (j = 3) {
            if ((checkedArray[3] == checkedArray[4]) && (checkedArray[3] == checkedArray[5])) {
                winner(checkedArray[3])
            }
        }
        if (j = 6) {
            if ((checkedArray[6] == checkedArray[7]) && (checkedArray[6] == checkedArray[8])) {
                winner(checkedArray[6])
            }
        } 
    }
    //Checks diagonals for win
    if ((checkedArray[0] == checkedArray[4]) && (checkedArray[0] == checkedArray[8])) {
        winner(checkedArray[0])
    }
    else if ((checkedArray[2] == checkedArray[4]) && (checkedArray[2] == checkedArray[6])) {
        winner(checkedArray[2])
    }
    if (numberOfClicks < 9) {
        if (numberOfClicks % 2 != 0) {
            const possibleElements = document.getElementsByClassName('aiFunctionality');
            let maximum = possibleElements.length
            let randomPosition = getRandomInt(maximum);
            //possibleElements[randomPosition].removeAttribute('class', 'aiFunctionality')
            possibleElements[randomPosition].click(countClicks.bind(possibleElements[randomPosition]))
        }
    }
}

function getRandomInt(maximum) {
    return Math.floor(Math.random() * maximum);
}

//Declares winner when three in a row are found
const winnerOutput = document.getElementById('winner');
const winner = (e) => {
    if (e == playerX.playerSign) {
        playerX.winCount++;
        winnerOutput.innerHTML = playerX.playerName + ' wins';
        if (playerX.winCount >= 3) {
            winnerOutput.innerHTML = playerX.playerName + ' won ';
        }
    }
    else if (e == playerO.playerSign) {
        playerO.winCount++;
        winnerOutput.innerHTML = playerO.playerName +' wins';
        if (playerO.winCount >= 3) {
            winnerOutput.innerHTML = playerO.playerName + ' won ';
        }
    }
    else {
        console.log('Error')
    }
}

//Player name input and create new player with inputted name
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
    const playerOneName = document.getElementById('playerOneInput').value;
    const playerTwoName = document.getElementById('playerTwoInput').value;
    playerX.playerName = playerOneName;
    playerO.playerName = playerTwoName;

    const form = document.getElementById('myForm');
    form.style['display'] = 'none';
})

const namesButton = document.getElementById('namesButton');
namesButton.addEventListener('click', () => {
    const form = document.getElementById('myForm');
    form.style['display'] = '';
})

//Reset function
const resetBoard = () => {
    const gameBoardElementsOne = Array.from(document.querySelectorAll('.gameElements'));
    //gameBoardElementsOne.classList.add('aiFunctionality', 'gameElements')
    for (element in gameBoardElementsOne) {
        gameBoardElementsOne[element].innerHTML = '';
        gameBoardElementsOne[element].removeAttribute('class', 'checked');
        gameBoardElementsOne[element].classList.add('aiFunctionality', 'gameElements');
    }
    winnerOutput.innerHTML = ''
    checkedArray = [1,2,3,4,5,6,7,8,9];
    numberOfClicks = 0;
    return {numberOfClicks, checkedArray}
}

//Reset button which resets board by removing checks, resetting numberOfClicks, and resetting checkedArray
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetBoard)

function aiPlayer() {
    playerO.aiFunction
}

const aiButton = document.getElementById('aiToggle');
aiButton.addEventListener('click', aiPlayer);
