// keep adding number to the array by 1 until 0 is added to the array 

let arr = [1,2,3,4,5,6,7]
let input = prompt("enter the number : ")
input = Number(input)
while(input!=0){
    arr.push(input)
    input = prompt("enter the number : ")
    input = Number(input)
}

console.log(arr)