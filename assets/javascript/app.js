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
    correctAnswer : 'a1'

}

const question3 = {
    q : "What type of dog can't bark?",
    a1 : "Tibetan Cur",
    a2 : "Pug",
    a3 : "Eastern Australian Cattle Dog",
    a4 : "Basenji", //Correct
    correctAnswer : 'a4'
}

const question4 = {
    q : "A guy with a dog is how much more likely to get a girl's phone number?",
    a1 : "5x",
    a2 : "3x", //Correct
    a3 : "2x",
    a4 : "The dog makes no difference",
    correctAnswer : 'a2'
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

const questionArray = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];

console.log(questionArray)


//*********************TIMER FUNCTIONS************************** */
//This is for the click event
window.onload = function() {
    $("#button").click(gameAlgorithm)
}

//Global Variables

let wins = 0;
let losses = 0;
let timeUps = 0;

//Timer Variables
let clockRunning = false;
let time = 0;
let responseTime;
const questionTime = 25;
const responseScreenTime = 5;

function clearTimer() {
    clearInterval(responseTime);
    responseTime = 0;
    time = 0;
    console.log(responseTime);
    console.log(time);
    clockRunning = false;
}

//Create Timer function for each question
function start() {
    if (!clockRunning) {
        clockRunning = true;
        console.log(clockRunning);
        $("#timer").text("Time Remaining: 25 seconds");
        responseTime = setInterval(increase,1000); 
    }
}

function increase () {
    time++;
    var seconds = Math.floor(time/360);

    let timeRemaining = questionTime - time;
    $("#timer").text("Time Remaining: " + timeRemaining + "seconds!");
    console.log(responseTime);
    console.log(questionTime)
    console.log("Time is: " + time);

    if (questionTime === time){
        $('#timer').text("Time Is Up!");
        clearTimer()   
    }

}

//Create Timer For Each Response Screen

function startResponseScreen() {
    if (!clockRunning) {
        clockRunning = true;
        console.log(clockRunning);
        responseTime = setInterval(increase,1000); 
    }
}

function increase () {
    time++;
    var seconds = Math.floor(time/360);

    let timeRemaining = responseScreenTime - time;
    console.log(responseTime);
    console.log("Time is: " + time);

    if (questionTime === time){
        clearTimer()
        $("#gif").removeAttr('src')   
    }

}


//**********************QUESTION SCREEN DISPLAY******************** */

//Hide Start Button

function startButtonHide() {
    $("#button").hide();
}

function questionScreen() {
    start()
    startButtonHide()
    $('#question').text(questionArray[i].q);
    $("#answer1").text(questionArray[i].a1);
    $("#answer2").text(questionArray[i].a2);
    $("#answer3").text(questionArray[i].a3);
    $("#answer4").text(questionArray[i].a4);
    if (('#timer').attr('text').indexOf("Time Is Up!") === -1) {
        clearTimer()
        timeIsUpScreen()
    }
    $("answer1").on('click', function() {
        if (questionArray[i].correctAnswer === 'a1') {
            clearTimer()
            congratulationsScreen()
        }
        else {
            clearTimer()
            wrongAnswerScreen()
        }
    });
    $("answer2").on('click', function() {
        if (questionArray[i].correctAnswer === 'a2') {
            clearTimer()
            congratulationsScreen()
        }
        else {
            clearTimer()
            wrongAnswerScreen()
        }
    });
    $("answer3").on('click', function() {
        if (questionArray[i].correctAnswer === 'a3') {
            clearTimer()
            congratulationsScreen()
        }
        else {
            clearTimer()
            wrongAnswerScreen()
        }
    });
    $("answer4").on('click', function() {
        if (questionArray[i].correctAnswer === 'a4') {
            clearTimer()
            congratulationsScreen()
        }
        else {
            clearTimer()
            wrongAnswerScreen()
        }
    });
    
    
}

//***************INTERMITTION SCREEN DISPLAYS************************* */

//Create function for congratulation screen - 3 seconds
function congratulationsScreen () {
    console.log('congratulationsScreen');
    
    $('#question').text("You Are Correct!")
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    $("#gif").attr('src',"images/performing season 15 GIF-downsized.gif")
    startResponseScreen()
    wins++;
}

//Create function for wrong answer screen - 3 seconds
function wrongAnswerScreen() {
    console.log('wrongAnswerScreen');
    $('#question').text("You Are Wrong!");
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    $("#gif").attr('src',"images/performing season 15 GIF-downsized.gif");
    startResponseScreen()
    losses++;
}

//Create function for ran out of time screen - 3 seconds
function timeIsUpScreen() {
    console.log('timeIsUpScreen')
    $('#question').text("Time Is Up!")
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    $("#gif").attr('src',"images/performing season 15 GIF-downsized.gif")
    startResponseScreen()
    timeUps++;
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
    $("#gif").attr('src',"images/performing season 15 GIF-downsized.gif")
    timeUps++;
}
//**********************ANSWER TRACKER FUNCTION**************************** */


//Create function that tracks correct / incorrect / timeout answers



//*******************************ACTIONS ALGORITHM*********************** */
function gameAlgorithm () {
    for (let j = 0; j < questionArray.length; j++) {
        questionScreen()
        console.log(j)
    }
    finalScoreScreen()
}
//Get Ready / Explain Rules Screen

//Question Screen

//Congratulations Screen

//Right/Wrong Screen



//*****************EXTRA STUFF*************************** 

// ### Create a README.md

// Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

// * [About READMEs](https://help.github.com/articles/about-readmes/)

// * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

// - - -

// ### Add To Your Portfolio

// After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

// - - -


