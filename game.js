const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const board = document.getElementById('board');
const statusEl = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let state = {
  cells: Array(9).fill(null),
  currentPlayer: 'X',
  gameOver: false
};

function checkWinner() {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    const val = state.cells[a];
    if (val && state.cells[a] === state.cells[b] && state.cells[b] === state.cells[c]) {
      return { winner: val, line };
    }
  }
  return null;
}

function isDraw() {
  return state.cells.every(Boolean) && !checkWinner();
}

function setStatus(text, className = '') {
  statusEl.textContent = text;
  statusEl.className = 'status ' + className;
}

function updateUI(winResult) {
  const cells = board.querySelectorAll('.cell');
  state.cells.forEach((value, i) => {
    const cell = cells[i];
    cell.textContent = value || '';
    cell.classList.toggle('taken', !!value);
    cell.classList.toggle('x', value === 'X');
    cell.classList.toggle('o', value === 'O');
    cell.classList.remove('winning');
  });

  if (winResult) {
    winResult.line.forEach(i => cells[i].classList.add('winning'));
    setStatus(`${winResult.winner} wins!`, `winner-${winResult.winner.toLowerCase()}`);
  } else if (isDraw()) {
    setStatus("It's a draw!", 'draw');
  } else {
    setStatus(`${state.currentPlayer}'s turn`);
  }
}

function handleCellClick(e) {
  const button = e.target.closest('.cell');
  if (!button || state.gameOver) return;

  const index = parseInt(button.dataset.index, 10);
  if (state.cells[index] !== null) return;

  state.cells[index] = state.currentPlayer;
  const winResult = checkWinner();

  if (winResult) {
    state.gameOver = true;
    updateUI(winResult);
    return;
  }

  if (isDraw()) {
    state.gameOver = true;
    updateUI(null);
    return;
  }

  state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
  updateUI(null);
}

function restart() {
  state = {
    cells: Array(9).fill(null),
    currentPlayer: 'X',
    gameOver: false
  };
  updateUI(null);
}

board.addEventListener('click', handleCellClick);
restartBtn.addEventListener('click', restart);

updateUI(null);
