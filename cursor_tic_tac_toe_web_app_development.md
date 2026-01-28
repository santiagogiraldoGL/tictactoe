# Tic Tac Toe web app development
_Exported on 1/28/2026 at 11:47:27 GMT-5 from Cursor (2.3.41)_

---

**User**

Build a Tic Tac Toe game as a small web app using plain HTML/CSS/JS (no frameworks).
Requirements:

* 3x3 grid UI, click to place X/O
* Show current player
* Detect win (rows/cols/diagonals) and draw
* Highlight winning line
* “Restart” button resets state
* Prevent moves after game ends
     Deliverables:
* Provide 3 files: index.html, style.css, app.js
* Keep JS readable and modular (functions for makeMove, checkWinner, reset)
* Include brief instructions to run locally

---

**Cursor**


Creating the three files for the Tic Tac Toe web app.



Adding a brief README with instructions to run locally:



Starting a local server and testing the game in the browser:



Playing a quick game to verify win detection and highlighting:



Verifying the Restart button:



Summary of what’s in place:

---

## Tic Tac Toe Web App

### Files

1. **`index.html`** – Structure: heading, status text, 3×3 grid of buttons, Restart button.
2. **`style.css`** – Dark theme, grid layout, hover/active states, X/O colors, winning-line highlight.
3. **`app.js`** – Logic in an IIFE with:
   - **`makeMove(index)`** – Places X/O, updates DOM, then checks win/draw.
   - **`checkWinner()`** – Returns `{ winner, line }` for any winning row/col/diagonal, or `null`.
   - **`reset()`** – Clears board and UI state and re-enables cells.

### Behavior

- 3×3 grid; click a cell to place X or O (X first).
- Status line shows “Player X’s turn” / “Player O’s turn” and “Player X/O wins!” or “It’s a draw!”
- Win detection for all 8 lines; winning cells get the `.winner` class (green highlight).
- Draw when the board is full with no winner.
- Restart clears the board and status; all cells become clickable again.
- After win or draw, cells are disabled so no further moves are allowed.

### Run locally

From the project folder:

```bash
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

`README.md` has these run instructions plus short play instructions. The app was tested in the browser: win detection, status updates, and Restart all work as intended.

