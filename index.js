//Question Objects
//Each object contains the question, the image for the question, 4 answers and then one of the answers printed as correctAnswer
//That way we can compare correctAnswer and each answer to see which is correct. Means that when a button is pressed, the innerText can be compared to the question
const question1 = {
    question: "What is the capital city of Japan?",
    question_img: `<img id="quiz_question-img" src="icons/homeIcon.png" alt="Question Image" />`,
    answer1: "Osaka",
    answer2: "Kyoto",
    answer3: "Tokyo",
    answer4: "Yokohama",
    correctAnswer: "Tokyo",
};
const question2 = {
    question: "",
    question_img: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
};
const question3 = {
    question: "",
    question_img: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
};
const question4 = {
    question: "",
    question_img: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
};
const question5 = {
    question: "",
    question_img: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
};

let questionNumber = 1;
const questionText = document.querySelector("#quiz_question-text");
const questionImg = document.querySelector("#quiz_question-img");
const answer1 = document.querySelector("#quiz_answer1");
const answer2 = document.querySelector("#quiz_answer2");
const answer3 = document.querySelector("#quiz_answer3");
const answer4 = document.querySelector("#quiz_answer4");
const userScore = document.querySelector("#user_score");
const totalScore = document.querySelector("#total_score");
const timer = document.querySelector("#proceed_time");
const nextQuest = document.querySelector("#proceed_nextQ");

questionText.innerText = question1.question;
answer1.innerText = question1.answer1;
answer2.innerText = question1.answer2;
answer3.innerText = question1.answer3;
answer4.innerText = question1.answer4;

// CODE TO CHANGE IMAGE WITH EACH QUESTION
// NEEDS TO BE ADDED TO NEXTQ BUTTON WHEN SOLVED

// const newImg = document.createElement("img");
// const newQuestionImage = document.createTextNode(
//     `<img id="quiz_question-img" src="icons/homeIcon.png" alt="Question Image" />`,
// );
// newImg.appendChild(newQuestionImage);
// questionImg.appendChild(newImg);
// questionImg.innerHTML = question1.question_img;

//Countdown Timer for game - only works using function keyword
var timeLeft = 20;
var timerId = setInterval(countdown, 1000);
function countdown() {
    if (timeLeft == -1) {
        //INSERT CODE TO MAKE SCREEN CHANGE
        totalScore.innerHTML = questionNumber;
    } else {
        timer.innerText = timeLeft;
        timeLeft--;
    }
}

//Next Question button to go to the next question using Switch/Case
nextQuest.addEventListener("click", (event) => {
    
    timeLeft = 20;
    if (questionNumber <= 5) {
        
        questionNumber++;
    }
    console.log(questionNumber);
    switch (questionNumber) {
        case 2:
            questionText.innerText = question2.question;
            answer1.innerText = question2.answer1;
            answer2.innerText = question2.answer2;
            answer3.innerText = question2.answer3;
            answer4.innerText = question2.answer4;
            break;
        case 3:
            questionText.innerText = question3.question;
            answer1.innerText = question3.answer1;
            answer2.innerText = question3.answer2;
            answer3.innerText = question3.answer3;
            answer4.innerText = question3.answer4;
            break;
        case 4:
            questionText.innerText = question4.question;
            answer1.innerText = question4.answer1;
            answer2.innerText = question4.answer2;
            answer3.innerText = question4.answer3;
            answer4.innerText = question4.answer4;
            break;
        case 5:
            questionText.innerText = question5.question;
            answer1.innerText = question5.answer1;
            answer2.innerText = question5.answer2;
            answer3.innerText = question5.answer3;
            answer4.innerText = question5.answer4;
            break;      
    }
});
