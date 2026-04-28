//Question Objects
const question1 = {
    question: "What is the capital city of Japan?",
    question_img: `<img id="quiz_question-img" src="icons/homeIcon.png" alt="Question Image" />`,
    answer1: "Osaka",
    answer2: "Kyoto",
    answer3: "Tokyo",
    answer4: "Yokohama",
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

const questionText = document.querySelector("#quiz_question-text");
const questionImg = document.querySelector("#quiz_question-img");
const answer1 = document.querySelector("#quiz_answer1");
const answer2 = document.querySelector("#quiz_answer2");
const answer3 = document.querySelector("#quiz_answer3");
const answer4 = document.querySelector("#quiz_answer4");
const userScore = document.querySelector("#user_score");
const totalScore = document.querySelector("#total_score");
const timeLeft = document.querySelector("#proceed_time");

questionText.innerText = question1.question;
answer1.innerText = question1.answer1;
answer2.innerText = question1.answer2;
answer3.innerText = question1.answer3;
answer4.innerText = question1.answer4;





const newImg = document.createElement("img");
const newQuestionImage = document.createTextNode(
    `<img id="quiz_question-img" src="icons/homeIcon.png" alt="Question Image" />`,
);
newImg.appendChild(newQuestionImage);
questionImg.appendChild(newImg);
// questionImg.innerHTML = question1.question_img;