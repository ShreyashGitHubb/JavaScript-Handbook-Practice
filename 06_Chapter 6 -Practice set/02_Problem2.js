// In Q1 use confirm to ask the user if he wants. to see the prompt again

let age;
do{
    age = prompt("Enter the age : ");
    
    if (age >= 18){
        alert("YES, You can drive!");
    }
    else { 
        alert("NO, You are not old enough to drive");
    }
}while(confirm("DO you want to see again the prompt"));