# Tic Tac Toe — Implementation Plan

- **Markup & layout**: Single-page `index.html` with a 3×3 grid of clickable cells, a status line for turn/winner/draw, and a restart button. No external scripts or styles.
- **Styling**: `style.css` for grid, cells, typography, and clear X/O visuals. Responsive enough to work on small screens; focus on readability and a minimal, game-like look.
- **State & turns**: In `app.js`, keep board state (array or string), current player (X or O), and game-over flag. On cell click, if cell empty and game not over, set cell to current player and switch turn.
- **Win detection**: After each move, check all 3 rows, 3 columns, and 2 diagonals. If any line has three same marks, set winner and stop further moves.
- **Draw detection**: When the board is full (9 moves) and no winner, declare draw and disable further moves.
- **Restart**: Restart button clears board state, resets current player and game-over flag, and re-renders the grid so play can start again.
- **Edge cases**: Ignore clicks on filled cells and after game over; ensure draw is only when board is full with no winner; no duplicate win/draw messages.
