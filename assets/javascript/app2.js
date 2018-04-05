//Create objects - question, answer1, answer2, answer3, answer4

const question1 = {
    q : "What does 'Corgi' mean in Welsh?",
    a1: "Doomslayer",
    a2: "Dwarf Dog", //Correct
    a3: "Eater of Kilts",
    a4: "Royal Dog",
    correctAnswer : "a2"
}

const question2 = {
    q : "Why are dogs noses wet?",
    a1 : "It helps with their sense of smell.", //Correct
    a2 : "To protect their nose from bacteria.",
    a3 : "To improve doggie kisses",
    a4 : "Dedication to finally getting that callback for Kleenex commercials.",
    correctAnswer : "a1"

}

const question3 = {
    q : "What type of dog can't bark?",
    a1 : "Tibetan Cur",
    a2 : "Pug",
    a3 : "Eastern Australian Cattle Dog",
    a4 : "Basenji", //Correct
    correctAnswer : "a4"
}

const question4 = {
    q : "A guy with a dog is how much more likely to get a girl's phone number?",
    a1 : "5x",
    a2 : "3x", //Correct
    a3 : "2x",
    a4 : "The dog makes no difference",
    correctAnswer : "a2"
}

const question5 = {
    q : "What breed has 6 toes on each paw?",
    a1 : "Norwegian Lundehund", //Correct
    a2 : "Newfoundland",
    a3 : "Boston Terrier",
    a4 : "Chow Chow",
    correctAnswer : "a1"
}

const question6 = {
    q: "Which food is harmful for dogs?",
    a1 : "Pumpkins",
    a2 : "Green Beans",
    a3 : "Bananas",
    a4 : "Avacados", //Correct
    correctAnswer : "a4"
}

const question7 = {
    q : "What is the most popular breed in the United States?",
    a1 : "Golden Retriever",
    a2 : "Labradors", //Correct
    a3 : "Pit Bulls",
    a4 : "Tibetan Mastiff",
    correctAnswer : "a2"
}

const question8 = {
    q : "How many dogs are in the United States?",
    a1 : "42",
    a2 : "100 million",
    a3 : "100 billion billion",
    a4 : "75 million", //Correct
    correctAnswer : "a4"
}

const question9 = {
    q : "A dogs ear has at least how many muscles?",
    a1 : "42",
    a2 : "18", //Correct
    a3 : "We may never know",
    a4 : "100 billion billion",
    correctAnswer : "a2"
}

const question10 = {
    q : "What percentage of dogs sleep in their owner's bed?",
    a1 : "42%",
    a2 : "25%",
    a3 : "65%",
    a4 : "45%", //Correct
    correctAnswer : "a4"
}

//Create array of objects

const questionArray = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,5];

console.log("questionArray: " + questionArray);

//This is to start the game

window.onload = function() {
    gameAlgorithm()
}

//***************Global Variables

//Questions Correct
let wins = 0;
//Questions Wrong
let losses = 0;
// Questions Timed Out
let timeUps = 0;

let winner = false;
let loser = false;
let timeUpper = false;


// Time left in screen - timeRemaining = 0 means question timed out or intermittion screen will end
let timeRemaining;
//question count
let count = 0;
//lets algorithm function know to move on to next question
let nextQuestion = false;
//variable increased per second for setInterval
let time = 0;
//one second interval
let responseTime;
//time for each question
const questionTime = 25;
//time for each intermittion screen
const responseScreenTime = 3;

//***************INTERMITTION SCREEN DISPLAYS************************* */

//Create function for congratulation screen - 3 seconds
function congratulationsScreen () {
    console.log('congratulationsScreen');
    
    $('#question').text("You Are Correct!")
    $('#timer').empty();
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    $("#gif").show();
    startResponseScreen();
    winner = true;
}

//Create function for wrong answer screen - 3 seconds
function wrongAnswerScreen() {
    console.log('wrongAnswerScreen');
    $('#question').text("You Are Wrong!");
    $('#timer').empty();
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    $("#gif").show();
    startResponseScreen()
    loser = true;
}

//Create function for ran out of time screen - 3 seconds
function timeIsUpScreen() {
    console.log('timeIsUpScreen')
    $('#question').text("Time Is Up!")
    $('#timer').empty();
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    $("#gif").show();
    startResponseScreen()
    timeUpper = true;
}

function clearTimer() {
    clearInterval(responseTime);
    time = 0;
    console.log("Response Time: " + responseTime);
    console.log("Time: " + time);
}


//********************FINAL SCREEN DISPLAY******************************** */

function finalScoreScreen() {
    console.log('finalScoreScreen')
    $("#timer").text("Correct: " + wins +"     Wrong: " + losses)
    $('#question').text("No Answers: " + timeUps)

    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    $("#gif").show();
}

//**Increase Timer In Game Screen */

function increase () {
    time++;
    var seconds = Math.floor(time/360);

    timeRemaining = questionTime - time;
    $("#timer").text("Time Remaining: " + timeRemaining + " seconds");
    console.log("Response Time: " + responseTime);
    console.log("Time is: " + time);

    if (questionTime === time){
        $('#timer').text("Time Is Up!");
        clearTimer()
        timeIsUpScreen()   
    }
}

//****Timer functions for Congrats / Loss / Time Up Screen */

function startResponseScreen() {
        responseTime = setInterval(increaseResponse,1000);
}

function increaseResponse () {
    time++;
    var seconds = Math.floor(time/360);

    timeRemaining = responseScreenTime - time;
    console.log("Response Time: " + responseTime);
    console.log("Time is: " + time);

    if (timeRemaining === 0){
        nextQuestion = true;
        clearTimer()
    }
    if (nextQuestion) {
        if (count === questionArray.length-1) {
            //Register Last Response
            if(winner) {
                wins++;
                winner = false;
            }
            if(loser) {
                losses++;
                loser = false;
            }
            if(timeUpper) {
                timeUps++;
                timeUpper = false;
            }
            //Show Final Score Screen
            clearTimer()
            finalScoreScreen()
        }
        else{
            //Move To Next Question
            clearTimer()
            gameAlgorithm()
        }
    }

}

function gameAlgorithm () {
    console.log("gameAlgorithm")
    console.log("Count at Game Algorithm is: " + count)
    console.log("Wins: " + wins)
    console.log("Loses: " + losses)
    console.log("TimeUp: " + timeUps)
    //Button was supposed to start the quiz
    $("#button").hide(); 
    $("#gif").hide();   
    //Initial #timer label
    $("#timer").text("Time Remaining: 25 seconds");
    //Creates Timer For Game
    responseTime = setInterval(increase,1000)

    //Question Section

    //Changes Display on screen to question
    $('#question').text(questionArray[count].q);
    $("#answer1").text(questionArray[count].a1);
    $("#answer2").text(questionArray[count].a2);
    $("#answer3").text(questionArray[count].a3);
    $("#answer4").text(questionArray[count].a4);
    count++;
    // create if statements with booleans to attempt to fix multiple win/lose/timeup counts
    if(winner) {
        wins++;
        winner = false;
    }
    if(loser) {
        losses++;
        loser = false;
    }
    if(timeUpper) {
        timeUps++;
        timeUpper = false;
    }
    console.log("Wins: " + wins)
    console.log("Loses: " + losses)
    console.log("TimeUp: " + timeUps)
    //Clicking on Answer 1
    $("#answer1").click(function() {
        if (questionArray[count-1].correctAnswer === 'a1') {
            clearTimer()
            congratulationsScreen()
        }
        else {
            clearTimer()
            wrongAnswerScreen()
        }
    });
    //Clicking on Answer 2
    $("#answer2").click(function() {
        if (questionArray[count-1].correctAnswer === 'a2') {
            clearTimer()
            congratulationsScreen()
        }
        else {
            clearTimer()
            wrongAnswerScreen()
        }
    });
    //Clicking on Answer 3
    $("#answer3").click(function() {
        if (questionArray[count-1].correctAnswer === 'a3') {
            clearTimer()
            congratulationsScreen()
        }
        else {
            clearTimer()
            wrongAnswerScreen()
        }
    });
    //Clicking on Answer 4
    $("#answer4").click(function() {
        if (questionArray[count-1].correctAnswer === 'a4') {
            clearTimer()
            congratulationsScreen()
        }
        else {
            clearTimer()
            wrongAnswerScreen()
        }
    });
}