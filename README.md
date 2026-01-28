# tictactoe
tic tac toe game generated with AI following increasing prompt details

Prompting Excercise

0) The naive prompt (baseline)

Use this first so you have something to compare against.
Prompt A (zero-shot, vague)
Please build a tic tac toe game.
Expected issues:

* Unclear platform (CLI? web? React? Python?)
* No tests
* Missing win/draw logic edge cases
* No instructions on file structure


1) “Better prompt” without asking for chain-of-thought explicitly

This usually improves results more than “think step by step”.
Prompt B (spec + constraints + deliverables)
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

Why this works:

* You removed ambiguity and forced the agent to produce a complete, runnable artifact.


2) Planning + self-check (chain-of-thought-ish, but safe)

Instead of “show your chain-of-thought”, you ask for a plan + checklist, then code.
Prompt C (plan, then implement, then verify)
You are building a tiny product, not a snippet.
 Step 1: Write a short implementation plan (5–8 bullets) and a checklist of acceptance criteria.
 Step 2: Implement the Tic Tac Toe web app using plain HTML/CSS/JS (no frameworks), with files index.html, style.css, app.js.
 Step 3: Verify against the checklist and, if anything is missing, fix it before final output.
 Constraints:

* No external libraries
* Keep JS under ~150 lines if possible
* Handle all win/draw edge cases
     Output format:
* Start with PLAN.md
* Then CHECKLIST.md
* Then code blocks for each file

This gives you the “reasoning benefit” without forcing the model to dump hidden reasoning.

3) When it “doesn’t work as expected”: use an iterative repair prompt

In Cursor, the fast loop is: run → see bug → paste error/behavior → repair.
Prompt D (debug + minimal change)
The current implementation has this issue:
 [paste bug description or screenshot / console error]
Diagnose the cause. Then propose the smallest code change that fixes it.
 Rules:

* Do not rewrite the entire project
* Only change what’s necessary
* Output a unified diff patch for the file(s) you modify
* After the patch, explain in 3 bullets why it fixes the issue

This is the most useful prompt you’ll reuse across projects.

4) Add a “quality gate” to stop sloppy output

If you want to train yourself to prompt for quality, do this:
Prompt E (quality rubric + self-critique)
Before you output code, score your solution from 1–5 on: correctness, completeness, readability, and UX.
If any score is <4, revise the code until all scores are ≥4.
Then output the final files.
This prevents “it mostly works” outputs.

A/B test you can actually run

Try this sequence:

1. Prompt A → run it → note what’s missing
2. Prompt B → compare completeness
3. Prompt C → compare edge case handling + structure
4. If something breaks, use Prompt D
5. Optionally add Prompt E to see if it improves UX polish

Keep a tiny log: prompt version → result → what improved.
