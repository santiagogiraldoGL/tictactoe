(function () {
  const LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  let board = Array(9).fill(null);
  let currentPlayer = 'X';
  let gameOver = false;

  const statusEl = document.getElementById('status');
  const boardEl = document.getElementById('board');
  const restartEl = document.getElementById('restart');

  function getWinner() {
    for (var i = 0; i < LINES.length; i++) {
      var a = LINES[i][0], b = LINES[i][1], c = LINES[i][2];
      if (board[a] && board[a] === board[b] && board[a] === board[c])
        return board[a];
    }
    return null;
  }

  function isDraw() {
    return board.every(Boolean) && !getWinner();
  }

  function setStatus() {
    var winner = getWinner();
    if (winner) {
      statusEl.textContent = winner + ' wins!';
      return;
    }
    if (isDraw()) {
      statusEl.textContent = 'Draw!';
      return;
    }
    statusEl.textContent = currentPlayer + "'s turn";
  }

  function render() {
    var cells = boardEl.querySelectorAll('button[data-index]');
    board.forEach(function (val, i) {
      var cell = cells[i];
      cell.textContent = val || '';
      cell.className = val ? val.toLowerCase() : '';
      cell.disabled = !!val || gameOver;
    });
    setStatus();
  }

  function play(index) {
    if (board[index] || gameOver) return;
    board[index] = currentPlayer;
    gameOver = !!getWinner() || isDraw();
    if (!gameOver) currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    render();
  }

  function restart() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    gameOver = false;
    render();
  }

  boardEl.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-index]');
    if (btn) play(parseInt(btn.getAttribute('data-index'), 10));
  });
  restartEl.addEventListener('click', restart);

  render();
})();
