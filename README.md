# Tic Tac Toe

A small web app built with plain HTML, CSS, and JavaScript (no frameworks).

## Run locally

1. Open the project folder in your terminal.
2. Serve the files with any static server, for example:

   **Python 3:**
   ```bash
   python3 -m http.server 8000
   ```

   **Node (npx):**
   ```bash
   npx serve .
   ```

3. In your browser, go to `http://localhost:8000` (or the port shown by your server).

You can also open `index.html` directly in the browser, but using a local server avoids some path/security quirks.

## How to play

- Click an empty cell to place X or O (X goes first).
- First to get three in a row (horizontal, vertical, or diagonal) wins.
- Use **Restart** to clear the board and play again.
