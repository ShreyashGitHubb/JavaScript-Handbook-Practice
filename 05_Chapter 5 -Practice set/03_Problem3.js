// filtered the number which is divisiable by 10 in given array

let numarr = [10,43,6,4,30,20,45,50,60,90,87];
let filt = numarr.filter(function (numarr) {
   return numarr % 10 == 0; 
});

console.log("Number which is divisible by 10 : ",filt);