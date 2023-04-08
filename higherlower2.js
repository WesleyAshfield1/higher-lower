//prompt


function get_number(prompt) {
    let valid_input = false;
    let number_choice, input;
 

    while(!valid_input) {
        input = window.prompt(prompt);

        number_choice = Number(input);

        number_choice = Math.round(input)

        random_number = Math.floor(Math.random() * number_choice) + 1
        
        if(number_choice !=0 && number_choice > 0) {
            valid_input = true;
        }
        if(number_choice < 0) {
            valid_input = false
        }
    }
    return random_number
}



let num = get_number("What should the Maximum amount of numbers be?")
 
// loop
let guess = []; // empty array


for (let i = 0; i > 0; i++) {
    count_guess.push(guess)
}



function log_results(num_guess, guess) {
    console.log(`You guessed ${num_guess} times...`);
    for(let i = 0; i < guess.length; i++) {
        let num = i+1;
        let count = guess[i];
    
        console.log(`You guessed ${count} times`)
    }
}





let count_guess = []; // empty array




var guesses = [] 
var count = 0

console.log(num);

//guess


function do_guess() {
    let guess = Number(document.getElementById("guess").value);


    let message = document.getElementById("message");
    
    
    
     for (let i = 0; i > 0; i++) {
    count_guess.push(guess)
    }

    
    
    if (isNaN(guess)) {
        message.innerHTML = "Thant is not a number!";
    }
    else if (guesses.filter((num) => num == guess).length) {
        message.innerHTML = "Number already entered!";
        return;
      }
    else if(guess == num) {
        guesses.push(guess);
        count += 1;
        message.innerHTML = "You got it! It took you " + count + " tries and your guesses were " + guesses.join(", ");
        
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        guesses.push(guess);
        count += 1;
    }
    else if (guess < num  && guess > 0) {
        message.innerHTML = "No, try a higher number.";
        guesses.push(guess);
        count += 1;
    }
     //else if (guess < 1 && guess > number_choice) {
       // message.innerHTML = "That number is not in range! Please try again!"
    //}
    else {
        message.innerHTML = "That number is not in range! Please try again!"
    }
}   
