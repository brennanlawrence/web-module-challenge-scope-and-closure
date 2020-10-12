// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 sets a variable to the value of a function—and is a function expression. While counter is just a function declaration.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter2 uses a closure: It invokes a variable that is defined outside of the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * If I knew I needed to keep track of multiple counts I would probably use count1 since it keeps the variable "count" inside the function instead of outside the function.
 * 
 * For small projects, counter2 is much more elegant and simple. If you only have one counter it's great. 
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// counter2 code
let count = 0;

function counter2() {
  return count++;
}
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let score = (Math.floor(Math.random() * 3));
  return score;
}
// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 



function finalScore(callback, num){
  let finalScore = {Home:0, Away:0}
  let getInningScore = [
    {Home:0, Away:0},
    {Home:0, Away:0},
    {Home:0, Away:0},
    {Home:0, Away:0},
    {Home:0, Away:0},
    {Home:0, Away:0},
    {Home:0, Away:0},
    {Home:0, Away:0},
    {Home:0, Away:0}
  ]
  for(i = 0; i < num; i++){
    finalScore.Home = finalScore.Home + callback();
    getInningScore[i].Home = callback(); 
    finalScore.Away = finalScore.Away + callback(); 
    getInningScore[i].Away = callback(); 
  }
  console.log(getInningScore);
  return finalScore;
}
// console.log(finalScore(inning, 7));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

// get inningScore takes inning and creates a score and console.logs each inning 
//
function getInningScore(inning) {
  let inningScore = {Home:0, Away:0};
  inningScore.Home = inning();
  inningScore.Away = inning(); 
  return inningScore;
}

// console.log(getInningScore(inning));

function scoreboard(getInningScore, inning, num) {
  let finalScore = {Home: 0, Away: 0};
  for(i = 0; i < num; i++){
    let homeScore = getInningScore(inning).Home;
    let awayScore = getInningScore(inning).Away;
    function styleNums(inNum) {
      if(inNum === 2) {
        return inNum = inNum + "nd";
      }else if(inNum === 3){
        return inNum = inNum + "rd";
      }else if(inNum === 1) {
        return inNum = inNum + "st";
      }else {
        return inNum = inNum + "th";
      }
    } 
    let inningNumber = styleNums(i+1);
    console.log(`${inningNumber} Inning: Home: ${homeScore} -- Away: ${awayScore}`);
    finalScore.Home = finalScore.Home + homeScore;
    finalScore.Away = finalScore.Away + awayScore;
  }
  console.log(`Final Score: Home: ${finalScore.Home} -- Away: ${finalScore.Away}`);
  return;
}

console.log(scoreboard(getInningScore, inning, 9));