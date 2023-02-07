// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesleft = 3;

    // UI Element
    const game = document.querySelector('#game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector('#guess-btn'),
          guessInput = document.querySelector('#guess-input'),
          message = document.querySelector('.message');

        //   Assign UI min and max
        minNum.textContent = min;
        maxNum.textContent = max;

        // Play Again event listener
        game.addEventListener('mousedown', function (e) {
            if(e.target.className === 'play-again'){
              window.location.reload();
            }
        });
        // listen for guess

        guessBtn.addEventListener('click', function(){
            let guess = parseInt(guessInput.value);
        

            // Validate
            if(isNaN(guess) || guess < min || guess > max){
                setMessage(`Please enter a number between ${min} and ${max}`, 'red');
            }
                
                // Check if won 
        if( guess === winningNum){
            //    Gameover - won
            gameOver(true, `${winningNum} is correct! YOU WIN!`);
           
        }else{
            // wrong number
            guessesleft -= 1;
            if(guessesleft === 0){
                // Gameover - lost
                gameOver(false, `Game over , you lost. The correct number is ${winningNum}`);
          
            }else{
                // Game contineus - answer wrong

                // Change border color
            guessInput.style.borderColor = 'red';

            // Clear input
            guessInput.value = '';

            // Tell user its the wrong number 
            setMessage(`${guess} is not correct ${guessesleft} guesses left`,'red');
            }
        }
        });

        // Game over 
          function gameOver(won, msg){
              let color;
              won === true ? color = 'green' : color = 'red';

               //   Disable input
            guessInput.disabled = true; 
            // Change border color
            guessInput.style.borderColor = color;
            // set text color
            message.style.color = color;
            // set message 
            setMessage(msg);
            // Play Again
            guessBtn.value = 'Play Again';
            guessBtn.className += 'play-again';
          }
        //   Get winning Number
        function getRandomNum(min,max){
           return (Math.floor(Math.random()*(max-min+1)+min));
        }
    
       
           function setMessage(msg, color){
               message.style.color = color;
               message.textContent = msg;
           }