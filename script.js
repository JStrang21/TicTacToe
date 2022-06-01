//Module which creates gameboard array with clickable elements
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

            newElement.addEventListener('click', playerOne.playerClick.bind(newElement));
        }    
    }
})();


//Must allow unclicked element to become clicked and then switch to other player
