// Write a program to print the marks of a student in an object using for loop object { harry: 98, rohan: 70, aakash: 73 }

let marks = {
    harry: 98, 
    rohan: 70, 
    aakash: 73
}

for (let i = 0; i < Object.keys(marks).length ; i++) {
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}