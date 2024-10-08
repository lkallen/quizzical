# Quizzical

### Overview:
- This is a trivia/quiz app I built based on a solo project suggested as part of a React course on Scrimba, with some modifications.
- The app uses the Open Trivia Database API to retrieve a random selection of 5 questions, each with multiple choice options
- The player can select an answer choice and can see instant feedback regarding if the choice was correct or incorrect, and if incorrect, the player can then try another choice. The immediate feedback and additional guesses (as opposed to answering each question and then seeing a final score after submission) was one of the major differences as compared to the guidelines included with Scrimba.

### Tech & Resources:
- React app created using Vite
- Open Trivia Database API
    - https://opentdb.com/
- Dependencies: html-entities
    - https://www.npmjs.com/package/html-entities
    - needed in order to decode text from the API response and replace entities with characters
- Deployed via Vercel

### Live Project:
https://quizzical-lake.vercel.app/

