//Question Objects
//Each object contains the question, the image for the question, 4 answers and then one of the answers printed as correctAnswer
//That way we can compare correctAnswer and each answer to see which is correct. Means that when a button is pressed, the innerText can be compared to the question
//Javascript is also designed in a way that adding another question to the array means
//the quiz can technically go infinite if chosen to.
const questions = [
    {
        question: "What is the capital city of Japan?",
        question_img: "icons/question1.png",
        answer1: "Osaka",
        answer2: "Kyoto",
        answer3: "Tokyo",
        answer4: "Yokohama",
        correctAnswer: "Tokyo",
    },
    {
        question:
            "What type of energy drink was a sponsor in the game Death Stranding?",
        question_img: "icons/heres-your-drink-norman-reedus.gif",
        answer1: "Red Bull",
        answer2: "Monster Energy",
        answer3: "Lucozade",
        answer4: "Rockstar",
        correctAnswer: "Monster Energy",
    },
    {
        question: "What was the pirate name for Edward Teach?",
        question_img: "icons/EdwardTeach.png",
        answer1: "The Gentleman Pirate",
        answer2: "Black Bart",
        answer3: "Captain Kidd",
        answer4: "Blackbeard",
        correctAnswer: "Blackbeard",
    },
    {
        question: "When did the first Superman comic release?",
        question_img: "icons/Superman.png",
        answer1: "June 1938",
        answer2: "July 1938",
        answer3: "August 1938",
        answer4: "April 1939",
        correctAnswer: "June 1938",
    },
    {
        question: "When was the global release date for the PS5?",
        question_img: "icons/PS5.png",
        answer1: "Oct 29, 2020",
        answer2: "Nov 12, 2020",
        answer3: "Nov 19, 2020",
        answer4: "Dec 10, 2020",
        correctAnswer: "Nov 19, 2020",
    },
];

//Necessary variables for the game to run
const questionText = document.querySelector("#quiz_question-text");
const questionImage = document.querySelector("#quiz_question-img");
const answer1 = document.querySelector("#quiz_answer1");
const answer2 = document.querySelector("#quiz_answer2");
const answer3 = document.querySelector("#quiz_answer3");
const answer4 = document.querySelector("#quiz_answer4");
const userScore = document.querySelector("#user_score");
const totalScore = document.querySelector("#total_score");
const timer = document.querySelector("#proceed_time");
const timerBox = document.querySelector(".proceed_timer");
const nextQuest = document.querySelector("#proceed_nextQ");

const amountOfTime = 20;
let questionNumber = 1;
let answerGiven = false;
let question = questions[0];
questionText.innerText = questions[0].question;
questionImage.src = questions[0].question_img;
answer1.innerText = questions[0].answer1;
answer2.innerText = questions[0].answer2;
answer3.innerText = questions[0].answer3;
answer4.innerText = questions[0].answer4;

//Countdown Timer for game - only works using function keyword
let timeLeft = amountOfTime;
let timerId = setInterval(countdown, 1000);
function countdown() {
    if (timeLeft == -1) {
        if (answerGiven == false) {
            timer.innerText = "You ran out of time.";
            document.body.style.backgroundColor = "#eb6534";
        }
        totalScore.innerHTML = questionNumber;
        answerGiven = true;
    } else {
        timer.innerText = `${timeLeft} seconds left`;
        timeLeft--;
    }
}

//Buttons for each question's answers to check if the score should be upped
answer1.addEventListener("click", (event) => {
    if (answerGiven === false) {
        correctAnswer(answer1);
    }
    answerGiven = true;
});
answer2.addEventListener("click", (event) => {
    if (answerGiven === false) {
        correctAnswer(answer2);
    }
    answerGiven = true;
});
answer3.addEventListener("click", (event) => {
    if (answerGiven === false) {
        correctAnswer(answer3);
    }
    answerGiven = true;
});
answer4.addEventListener("click", (event) => {
    if (answerGiven === false) {
        correctAnswer(answer4);
    }
    answerGiven = true;
});

//Next Question button to go to the next question using Switch/Case
nextQuest.addEventListener("click", (event) => {
    document.body.style.backgroundColor = "#ffcab1";
    if (questionNumber < questions.length){
        questionAdjustment(questions[questionNumber]);
    }
    if (questionNumber <= questions.length) {
        timeLeft = amountOfTime;
        totalScore.innerHTML = questionNumber;
        questionNumber++;
        answerGiven = false;
        if (questionNumber === 5) {
            nextQuest.innerHTML = "Final Score";
        }
        if (questionNumber > 5) {
            clearTimeout(timerId);
            timer.innerText =
                "Your final score is: " +
                userScore.innerHTML +
                "/" +
                totalScore.innerHTML;
            const newElement = document.createElement("p");
            const textNode = document.createTextNode(
                "The button in the top left will reset the game",
            );
            newElement.appendChild(textNode);
            timerBox.appendChild(newElement);
            timer.style.fontsize = "x-large";
            nextQuest.innerHTML = "The Game Is Over";
            //Potentially add another line about the home button resetting the game
        }
    }
});

//function for adding each question's text to the question box
const questionAdjustment = (questionNum) => {
    questionText.innerText = questionNum.question;
    answer1.innerText = questionNum.answer1;
    answer2.innerText = questionNum.answer2;
    answer3.innerText = questionNum.answer3;
    answer4.innerText = questionNum.answer4;
    questionImage.src = questionNum.question_img;
    question = questionNum;
};

//function to assess whether the answer is the same as the question's answer
const correctAnswer = (answer) => {
    if (answer.innerHTML === question.correctAnswer) {
        userScore.innerHTML++;
        totalScore.innerHTML = questionNumber;
        timer.innerText = `You got it correct!`;
        timeLeft = -1;
    } else {
        totalScore.innerHTML = questionNumber;
        timer.innerText = "You got it incorrect.";
        timeLeft = -1;
    }
    if (questionNumber === 5) {
        clearTimeout(timerId);
    }
};
