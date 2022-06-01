
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
    }
    return {playerClick}
}
const playerOne = newPlayer(0);
const playerTwo = newPlayer(1);

//Module which creates gameboard array with clickable elements
const gameBoard = (() => {
    const board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    const gameBoardContainer = document.querySelector('.gameBoardContainer');
    //Two loops for each dimension of board array
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            const newElement = document.createElement('div');
            newElement.setAttribute('class', 'squares');
            newElement.setAttribute('id', [i] + [j]);
            newElement.innerHTML = board[i][j];
            gameBoardContainer.appendChild(newElement);

            //newElement.addEventListener('click', playerOne.playerClick.bind(newElement));
            newElement.addEventListener('click', countClicks.bind(newElement));
        }    
    }
})();

let numberOfClicks = 0;
function countClicks(e) {
    if (numberOfClicks < 9) {
        if (numberOfClicks % 2 == 0) {
            numberOfClicks++;
            playerOne.playerClick(e);
        }
        else {
            numberOfClicks++;
            playerTwo.playerClick(e);
        }
    }
}


//Must allow unclicked element to become clicked and then switch to other player
/*function switchPlayers(e) {
    for (i=0; i<9;) {
        if (i % 2 == 0) {
            let returned = playerOne.playerClick.bind(e);
            i++;
            return returned
        }
        else {
            i++;
            return console.log('No')
        }
    }
}*/