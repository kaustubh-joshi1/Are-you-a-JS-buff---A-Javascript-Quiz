var readlineSync = require("readline-sync");
const chalk = require('chalk');
const log = console.log;

var score = 0;

// data of high score
var highScores = [
    {
      name: "Kaustubh",
      score: 3,
    },
  
    {
      name: "Yogesh",
      score: 2,
    },
  ]

  //array of objects
  var questions = [{
    array : ["100-10", 110, 90, "10010"],
    question: `let x = "100";
let y = "10";
let z = x – y;
The value of Z will be __? `,
    answer: "90"
  }, 
  
  {
    array : ["100-10", 110, 90, "10010"],
    question: `let x = "100";
let y = "10";
let z = x + y;
The value of Z will be __? `,
    answer: "10010"
  },
  
  {
    array : ["New array length", "Original Array", "Empty String", "Does not have a return value"],
    question: "What does the push() array method returns ? ",
      answer: "New array length"
  },
  
  {
      array : ["Array of elements that were popped out from the array", "Original Array", "New array length", "Does not have a return value"],
      question: "What does the pop() array method returns? ",
      answer: "Array of elements that were popped out from the array"
  },
  
  {
    array : ["Yes", "No"],
    question: "Can concat() method take string as an argument?  ",
    answer: "Yes"
  }];

  


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}



function welcome() {
 var userName = readlineSync.question("What's your name? ");
 const userCaps = userName.split(' ').map(capitalize).join(' ');
 log(chalk `{blue ${userCaps}}` + ' Welcome to' + chalk.blue(' The Javascript Quiz'));
console.log('Instructions: ');
console.log('1.There are total 5 Questions');
console.log('2. Quiz is comprised of 3 levels. Each level has 2 questions.');
console.log('3.If you answer 1 or more question right from the 2 questions in the level, you got to the next Level.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
}



// play function
function play(listOfAnswers,question,answer) {
    let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);

  if (listOfAnswers[userAnswer] == answer) { // branching
    log(chalk.green("Right!"));
    score = score + 1;
    
  } else {
    log(chalk.red("Wrong!"));
   
  }

  log(chalk`Current score: {blue ${score}}`);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    
    // introduce levels in quiz
    if(i==2&&score>=1){
        log(chalk.green("Proceeding to next level"));
    }
    if(i==2&&score<1){
        log(chalk.red("Sorry you can't compete this level."));
        log(chalk.red("Better Luck next time"));
        break;
    }
    if(i==4&&score>=2){
        log(chalk.green("Proceeding to next level"));
    }
    if(i==4&&score<2){
        log(chalk.red("Sorry you can't compete this level."));
        log(chalk.red("Better Luck next time"));
        break;
    }


    var currentQuestion = questions[i];
    play(currentQuestion.array, currentQuestion.question, currentQuestion.answer);
    
  }
}

function showScores() {
    log(chalk`YAY! You SCORED: {blue ${score}}`);
  
    console.log("Check out the high scores, if you should be there ping me and I'll update it");
  
    highScores.map(user => log(chalk` {blue ${user.name} : ${user.score}}`))
  
    // check if current user's score is a high score
    for (var i=0; i<highScores.length; i++){
      var ch=highScores[i];
      if (score > ch.score + 1) {
       score = 'highest';
      }
    }
    if (score === "highest"){
      log(chalk.green("Congratulations!, You have high scored among the friends who have taken this quiz so far. Please send me a screenshot of this page and I'll update this page."));
      }
  }


welcome();
game();
showScores();

