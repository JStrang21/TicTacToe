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
            newElement.setAttribute('class', 'sqaures');
            newElement.setAttribute('id', [i] + [j]);
            newElement.innerHTML = board[i][j];
            gameBoardContainer.appendChild(newElement);
        }    
    }
})();

const newPlayer = (playerNumber) => {
    let playerSign;
    if (playerNumber == 0) {
        playerSign = 'X';
    }
    else if (playerNumber == 1) {
        playerSign = 'O';
    }
    else {console.log('Error: maximum player count is 2 players')}

    const playerClick = () => {
        
    }
    return {playerClick}
}

const playerOne = newPlayer(0);



const displayController = () {

}