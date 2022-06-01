const gameBoard = (() => {
    const board = [
        ['X','X','X'],
        ['X','X','X'],
        ['X','X','X']
    ];
    const gameBoardContainer = document.querySelector('.gameBoardContainer');
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            const newElement = document.createElement('div');
            newElement.innerHTML = board[i][j];
            gameBoardContainer.appendChild(newElement);
            newElement.addEventListener('click', () => {newElement.style.backgroundColor = 'red'})
        }
    }
})();

const newPlayer = (name) => {
     
}