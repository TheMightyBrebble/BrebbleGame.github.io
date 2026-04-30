# Game Repository


## Objective
A simple quiz game based on shows such as Who wants to be a Millionaire, The Chaser and others.<br/>
Built using HTML, SCSS and JavaScript.

The quiz will be at least 5 questions long, with 4 answers for each. Each question will only have 1 correct answer and if submitted, will up the tally in the top right of the screen accordingly. There is also a home button which restarts the quiz and also a button that allows users to skip to the next question once they are finished.
<!-- Making quiz game 
https://js-quiz-git-master-jakealistairwood.vercel.app/
good example of a basic way to make the game 
-->
## HTML
- [x] Get layout for the quiz
- [x] Make div boxes
    - [x] header
    - [x] question + image
    - [x] 4 answer boxes
    - [x] footer
- [x] adding classes and ids for styling
    - [x] `.navbar`
    - [x] `.quiz_box`
    - [x] `.quiz_question`
    - [x] `.quiz_answer`
    - [x] `.proceed`
    - [x] `#navbar_score`
    - [x] `#quiz_answer1-4`
    - [x] `#quiz_question-text`
    - [x] `#proceed_timer`
    - [x] `#proceed_nextQ`


## CSS/SCSS
- [x] background colour
    - [x] body colour
    - [x] question box colour
    - [x] answer button colour
    - [x] next question button
- [x] border radius around buttons
- [x] Grid
    - [x] grid elements for answers
- [x] Text center for question
- [x] image fits into question box
- [x] hover effect for answers?

## JS Logic
- [x] When page is loaded, insert question into the page.
- [x] A timer has to continously tick down
- [x] When an answer is pressed, the id/class/tag can be checked to see if the answer is correct
    - [x] if its correct, up the user_score by 1 and potentially change the background colour to a more green colour
    - [x] if its incorrect, potentially change the background colour to a more red colour to show the answer was incorrect
    - [x] regardless of answer, timer needs to stop OR be set to 0
- [x] when next question button is pressed
    - [x] timer must be reset
    - [x] background color reset in case of wrong answer
    - [x] score_total += 1
    - [x] next question in the queue must be put onto the page
        - [x] image must be changed
        - [x] question text must be changed
        - [x] all answers must be changed
- [x] At end of quiz (potentially)
    - [x] display user_score and total_score as a pop up in fron of the quiz
    - [ ] show home to reset quiz with the score