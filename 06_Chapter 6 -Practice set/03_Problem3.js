// In the previous question, use console error to log the error if the age entered is negative

let age;
do{
    age = prompt("Enter the age : ");
    if (age > 0){
        if (age >= 18){
            alert("YES, You can drive!");
        }
        else { 
            alert("NO, You are not old enough to drive");
        }
    }
    else{
        console.error("error: Invalid age!")
    }    
}while(confirm("DO you want to see again the prompt"));