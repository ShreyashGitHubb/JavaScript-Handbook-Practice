// write a program to print "try again" unitl the user will enter the correct number 

// NOTE that this program will work in the browser environment 
let correctNumber = 8;
let guessedNumber = null ;

do {
    guessedNumber = parseInt(prompt("enter the number : "));

    if(correctNumber !== guessedNumber){
        alert("try again");

    }
} while (correctNumber !== guessedNumber);

alert("Congratulations! You've entered the correct number.")