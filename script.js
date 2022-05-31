const gameBoard = (() => {
    const board = [
        ['X','X','X'],
        ['X','X','X'],
        ['X','X','X']
    ];
    const gameBoardContainer = document.querySelector('.gameBoardContainer');
    for (element in board) {
        const newElement = document.createElement('div');
        newElement.innerHTML = board[element];
        gameBoardContainer.appendChild(newElement);
        newElement.addEventListener('click', () => {console.log('Hello')})
    }
})();

const newPlayer = (name) => {
     
}