
const newPlayer = (playerNumber) => {
    let playerSign;
    if (playerNumber == 0) {
        playerSign = 'X';
    }
    else if (playerNumber == 1) {
        playerSign = 'O';
    }
    else {console.log('Error: maximum player count is 2 players')}

    const playerClick = (e) => {
        e.target.innerHTML = playerSign;
        e.target.setAttribute('class', `checked`);
    }
    const winStatus = () => {

    }
    return {playerClick, winStatus}
}
const playerOne = newPlayer(0);
const playerTwo = newPlayer(1);

//IFFE Module which creates gameboard checkedArray with clickable elements
const gameBoard = (() => {
    const board = [
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
            elementID++;
            newElement.innerHTML = board[i][j];
            gameBoardContainer.appendChild(newElement);

            //Eventlistener to add player click
            newElement.addEventListener('click', countClicks.bind(newElement));
           
            //Eventlistener to check for tie/win
            //newElement.addEventListener('mouseup', checkGameResults(newElement));
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
                playerOne.playerClick(e);
                checkGame(e);
            }
            else {
                numberOfClicks++;
                playerTwo.playerClick(e);
                checkGame(e);
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
    console.log(checkedArray);
  
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            if ((checkedArray[0] === checkedArray[3]) && (checkedArray[0] === checkedArray[6])) {
                console.log('1st column same')
            }
            else {
                console.log('Not same')
            }
        }
        if (i = 1) {
            if ((checkedArray[1] === checkedArray[4]) && (checkedArray[1] === checkedArray[7])) {
                console.log('2nd column same')
            }
            else {
                console.log('Not same')
            }
        }
        if (i = 2) {
            if ((checkedArray[2] === checkedArray[5]) && (checkedArray[2] === checkedArray[8])) {
                console.log('3rd column same')
                console.log(checkedArray[2], checkedArray[5], checkedArray[8])
            }
            else {
                console.log('Not same')
            }
        }
    }
    for (j = 0; j < 7; j++) {
        if (j = 0) {
            if ((checkedArray[0] == checkedArray[1]) && (checkedArray[0] == checkedArray[2])) {
                console.log('1st Row same')
            }
            else {
                console.log('Not same')
            }
        }
        if (j = 3) {
            if ((checkedArray[3] == checkedArray[4]) && (checkedArray[3] == checkedArray[5])) {
                console.log('2nd Row same')
            }
            else {
                console.log('Not same')
            }
        }
        if (j = 6) {
            if ((checkedArray[6] == checkedArray[7]) && (checkedArray[6] == checkedArray[8])) {
                console.log('3rd Row same')
            }
            else {
                console.log('Not same')
            }
        } 
    }
    if ((checkedArray[0] == checkedArray[4]) && (checkedArray[0] == checkedArray[8])) {
        console.log('Cross win')
    }
    else if ((checkedArray[2] == checkedArray[4]) && (checkedArray[2] == checkedArray[6])) {
        console.log('Cross win')
    }
}

   
