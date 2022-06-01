//Module which creates gameboard array with clickable elements
const gameBoard = (() => {
    const board = [
        ['X','X','X'],
        ['X','X','X'],
        ['X','X','X']
    ];

    const gameBoardContainer = document.querySelector('.gameBoardContainer');
    //Two loops for each dimension of board array
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            const newElement = document.createElement('div');
            newElement.innerHTML = board[i][j];
            gameBoardContainer.appendChild(newElement);
            //newElement.addEventListener('click', )
        }
    }
})();

const newPlayer = () => {
    let playerSign;
    let playerCount = 0;
    if (playerCount == 0) {
        playerSign = 'X';
    }
    else if (playerCount == 1) {
        playerSign = 'O';
    }
    else {console.log('Error: maximum player count is 2 players')}

    const playerClick = () => {
         this.innerHTML = playerSign;
         console.log('Hello')
    }
    playerCount++;
    return {playerClick}
}

const playerOne = newPlayer();

console.log(newPlayer.playerCount)

