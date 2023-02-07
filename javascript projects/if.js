// let highScore = 800;
// let userScore = 950;

// if(userScore >= highScore){
//   console.log(`Congrates you have beat your high score of ${highScore} and you have now high score of ${userScore}`);
// }else{
//     console.log(`You can't reach high score of ${highScore} `);
// }

// let password = 'Hello Muneer';

// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log('Valid password');
//     }else{
//         console.log('Password is long enough, but cannot contain spaces');
//     }
// }else{
//     console.log('password is short');
// }

//     // Switch statment
//     let day = 8;
//     switch(day){
//         case 1:
//         console.log('MONDAY');
//         break;

//         case 2:
//         console.log('TUESDAY');
//         break;

//         case 3:
//         console.log('WEDNESDAY');
//         break;

//         case 4:
//         console.log('THURSDAY');
//         break;

//         case 5:
//         console.log('FRIDAY');
//         break;

//         case 6:
//         console.log('SATURDAY');
//         break;

//         case 7:
//         console.log('SUNDAY');
//         break;

//         default:
//         console.log('INVALID NUMBER');

//     }

//     let Num = [23,54,65,4,45,67];

//     console.log(Num);

//     let Mixed = [23,true,null,undefined];
//     console.log(Mixed);

//     let Fruit = ['apple','pineapple','mango'];

//     console.log(Fruit.push('Banana','Orange'));

//     console.log(Fruit.pop('',''));

//     console.log(Fruit.shift('Grapes','Lemon'));

//     let sub = ['school','college','university'];

//     let go = ['vice','ice','milk'];

//     console.log(go.concat(sub));

    // let letters = ['R','E','S','P','E','C','T'];

    // console.log(letters.reverse());
    // console.log(letters.reverse().join('.'));

    // let animals = ['shark','lion','monkey','rabbit','cat','cow','fish'];

    // animals.splice(1,0,'donkey');

    // const cricket = [
    //     ['shahid','umar'],
    //     ['shahzad','shoaib'],
    //     ['amir','shaheen']
    // ];

    // Object literals
    // let fitbitBody = {
    //     totalSteps : 308950,
    //     totalMiles : 211.5,
    //     avgCalorieBurn : 4050,
    //     workoutsThisWeek : '5 of 7',
    //     avgGoodSleep : '2:13'
    // };
     
    // console.log(fitbitBody);
    // console.log(fitbitBody.avgGoodSleep);
    // console.log(fitbitBody.totalSteps);

    // const userReviews = {}

    // userReviews.queenBee49 = 4.0;

    // userReviews.queenBee49 ++;

    // console.log(userReviews.queenBee49);

    // userReviews['mrSmith65'] =3.5;
    // userReviews['mrSmith65'] += 2;

    // console.log(userReviews.mrSmith65);

    // let nums = [ 1,2,3];
    // let same = [ 1,2,3];

    // let moreNums = nums;

    // For loops
    // for(let num = 1; num <= 20; num++){
    //     console.log(`${num}*${num} = ${num * num}`);
    // }

    // const word = 'stressed';
    // let reversedWord = '';

    // for(let i = word.length-1; i >= 0; i--){
    //     reversedWord += word[i];
    // }
    // console.log(reversedWord);

    // const gameBoard = [
    //     [4,65,43,65],
    //     [76,54,3,45],
    //     [98,87,5,79],
    //     [95,89,66,7]
    // ];

    // for(let i = 0; i < gameBoard.length; i++){
    //     let row = gameBoard[i];
    //     console.log(row);
    //     for(let j = 0; j < row.length; j++){
    //         console.log(row[j]);
    //     }
    // }

    // While loop
    // const target = Math.floor(Math.random()*10);
    // let guess = Math.floor(Math.random()*10);

    // while(guess !== target){
    //     console.log(`Target is: ${target} And Guess is:${guess}`);
    //     guess = Math.floor(Math.random()*10);
    // }

    // console.log(`Target is: ${target} And Guess is:${guess}`);

    // For...of loop
    // let animals = ['cat', 'dog', 'lion', 'monkey'];

    // for(let sub of animals){
    //     console.log(sub);
    // }

    // Anamalia = '';
    // for (let core of 'Anamalia'){
    //     console.log(core.toUpperCase());
    // }

    // Function 
    // function rollDie(){
    //     let roll = Math.floor(Math.random() * 6 ) + 1;
    //     console.log(`Rolled: ${roll}`);
    // }

    // function throwDie (numRolls){
    //     for(let i = 0; i < numRolls; i++){
    //         rollDie();
    //     }
    // }
    
    // Password validation

    // function isValidPassword (password,username){
    //       const enough =   password.length < 8;
    //       const Index =  password.indexOf(' ') !== -1;
    //       const similar =  password.indexOf(username) !== -1;
    //        if (!enough && !Index && !similar)return true;
    //        return false;
// }

    //  Function Average
    // function avg (arr){
    //     let total = 0;
         
    //     for (let num of arr){
    //         total += num;
    //     }
    //     return Math.floor(total / arr.length);
        
    // }

    // Pangram
    // Pangram is a sentence which contains every letter of the alphabit

    // isPangram('The five boxing wizards jump quickly'); true

    // function isPangram (sentence){
    //     let lowerCased = sentence.toLowerCase();
    //     for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    //     if(lowerCased.indexOf(char) === -1){
    //         return false;
    //     }
    //     }
    //     return true;
    //     }

    // Function Playcard
    // function pick(arr){
    //  const idx = Math.floor(Math.random()*arr.length);
    //  return arr[idx];
    // }

    // function getCards(){
    //     const values = ['1','2','3','4','5','6','7','8','9','10','A','J','K','Q'];
    //    const suits = ['clubs','spades','hearts','diamonds'];
    //    return {value : pick(values), suit: pick(suits)
    //    };
    // }

    // Function Scope 
    // function birdWatch(){
    //     let name = 'Micheal';
    //     const age = 20;
    //     var color = 'white';
        
    // }

    // function person(){
    //     let name = 'Bracewell';
    //     const age = 25;
    //     var color = 'black';
       
    // }

    // console.log(birdWatch()); 
    // console.log(person());

    // Block Scope

    // function doubleArr(arr){
    //     const result = [];
    //     for(let num of arr){
    //         let double = num * 2;
    //         result.push(double);
    //     }
    //     return result;
    // }

    // Lexical Scope
    // function outer(){
    //     let movie = 'Amadeus';

    // function inner(){
    //     let movie = 'The Shining';
    // function extrainner(){
    //     console.log(movie.toUpperCase());
    // }
    // extrainner();

    // }
    // inner();
    // }

    // Function Expression
    // function add(x,y){
    //     return x + y;
    // }

    // Ananomas Function
    // const sum = function (x, y){
    //     return x + y;
    // }

    // Named Function
    // const product = function multiply(x, y){
    //     return x * y;
    // }

    // Higher Order Function
    // function add(x,y){
    //         return x + y;
    //     }

    // const subtract = function (x, y){
    //     return x - y;
    // }
    // function multiply(x , y){
    //     return x * y;
    // }
    // const divide = function (x,y){
    //     return x / y;
    // }

    // const operation = [add, subtract , multiply, divide];
     
    // for(let func of operation){
    //     let result = func(30,5);
    //     console.log(result);
    // }
    

    // Function as return values

    // function makeBetweenFunc (x,y){
    //     return function (num){
    //         return num >= x && num <= y;
    //     }
    // }

    // const isChild = makeBetweenFunc(0,18);
    // const isInNinties = makeBetweenFunc(1980,2000);
    // const isNiceWeather = makeBetweenFunc(60,79);

    // Filter 
    // const nums = [34,56,78,90,45,37,64,32,109,123];

    // const odds = nums.filter(n => (n % 2 === 1));
    // const evens = nums.filter(n => (n % 2 === 0));

    // const bigNums = nums.filter(n => (n > 50));

    // Every
    // const words = ['dig','dog','log','leg','bag','big'];

    // const length = words.every(e => (e.length === 3));

    // const endInG = words.every (e =>{
    //     const last = e.length-1;
    //     return e[last] === 'g';
    // })

    // const words = ['big','bog','bog','beg','bag','big'];

    // const length = words.every(e => (e.length === 3));

    // const beginB = words.every (e =>{
    //     const last = e.length === 1;
    //     return e[last] === 'b';
    // })

    // const everyStartB = words.every(e => (e[0] === 'b'));

    // Some

    // const words = ['big','dog','log','leg','bag','big'];

    // const someStartB = words.some(e => (e[0] === 'b'));

    // Sort
    // const nums = [77,56,78,90,45,37,64,32,109,123]; 

    // const positive = nums.sort((a,b) => b-a);

    // Spread Array Literals 
    // const animal = ['dog','cat','donkey','monkey'];
    // const books = ['english','urdu','chemistry','maths'];

    // const invert = [...animal,...books];

    // Spread Object Literals 
    // const animals = {
    //       family : 'lion',
    //       legs : 'four',
    //       qulaity : 'king'
    // }
    // const books = {
    //     name : 'lonely man',
    //     auther : 'jhon walker',
    //     ratings : 4.25
    // }    

    // const root = {
    //     ...animals,
    //     ...books
    // }

    // const multiply = () =>{
    //     const argArr = [...arguments];
    //     return argArr.reduce((total, currVal) => {
    //         return total * currVal;
    //     });
    // }

    // Rest 
    // const multiply = (...nums) => (
    //     nums.reduce((total, currVal) => total * currVal)
    // )

    // Destructuring Array 
    //  const response = ['OK','FORBIDDEN','SOMETHING'];

    //  function postResponse ([params,cool,nothing]){
    //      console.log(`Status: ${params}`);
    //  }

    // Keyword this

    // function num(){
    //     console.log(this);
    // }

    // const multiply = (x, y) => (x * y);
    // const square = (x) => multiply(x, x);

    //  const isRightTriangle = (a,b,c) => {
    //     return square (a) + square (b) === square (c);
    //  };

    //  isRightTriangle(3,4,5);
    const temp = 45;
    if(temp > 40){
        console.log("it is hot outside");
    }
     else {
        console.log("it is pretty nice weather");
    }

     