// Use reduce to calculate factorial number from an numbers (n factoriest of natureven Caring areay nene first to be calculated)

let num = [1,2,3,4,5];

let factorials = num.reduce(function( X1 , X2){
    return X1 * X2 ;
});

console.log(factorials);
