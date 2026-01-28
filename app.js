(function () {
  'use strict';

  const WIN_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let board = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';
  let gameOver = false;

  const statusEl = document.getElementById('status');
  const gridEl = document.getElementById('grid');
  const restartEl = document.getElementById('restart');

  function getCells() {
    return Array.from(gridEl.querySelectorAll('.cell'));
  }

  function updateStatus(message) {
    statusEl.textContent = message;
  }

  function checkWinner() {
    for (let i = 0; i < WIN_LINES.length; i++) {
      const [a, b, c] = WIN_LINES[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return { winner: board[a], line: WIN_LINES[i] };
      }
    }
    return null;
  }

  function isDraw() {
    return board.every(function (cell) {
      return cell !== '';
    });
  }

  function highlightWinningLine(indices) {
    const cells = getCells();
    indices.forEach(function (i) {
      cells[i].classList.add('winner');
    });
  }

  function endGame(result) {
    gameOver = true;
    gridEl.querySelectorAll('.cell').forEach(function (cell) {
      cell.disabled = true;
    });
    if (result.winner) {
      updateStatus('Player ' + result.winner + ' wins!');
      highlightWinningLine(result.line);
    } else {
      updateStatus("It's a draw!");
    }
  }

  function makeMove(index) {
    if (gameOver || board[index] !== '') {
      return;
    }
    board[index] = currentPlayer;
    const cell = getCells()[index];
    cell.textContent = currentPlayer;
    cell.setAttribute('data-value', currentPlayer);
    cell.classList.add('taken');
    cell.disabled = true;

    const result = checkWinner();
    if (result) {
      endGame(result);
      return;
    }
    if (isDraw()) {
      endGame({});
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus("Player " + currentPlayer + "'s turn");
  }

  function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    updateStatus("Player X's turn");
    getCells().forEach(function (cell) {
      cell.textContent = '';
      cell.removeAttribute('data-value');
      cell.classList.remove('taken', 'winner');
      cell.disabled = false;
    });
  }

  gridEl.addEventListener('click', function (e) {
    const cell = e.target.closest('.cell');
    if (!cell) return;
    const index = parseInt(cell.getAttribute('data-index'), 10);
    makeMove(index);
  });

  restartEl.addEventListener('click', reset);
})();
