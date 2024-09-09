// write a program in Q1 using for in loop

let marks = {
    harry: 98, 
    rohan: 70, 
    aakash: 73
}

for (const key in marks) {
    console.log("the marks of " + key + " are " + marks[key]);
}