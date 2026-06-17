console.log("Multiplication Table");
// Print the multiplication table of a given number (e.g., 7) using a for loop.
 
function multiplicationTable(a : number) : void {
    for(let i = 1; i <= 10; i++){
        let b : number = a * i;
        console.log(`${a} X ${i} = ${b}`);
    }
}

multiplicationTable(7);

console.log();
console.log("Sum of Even Numbers");  
// Use a while loop to calculate the sum of all even numbers between 1 and 50.

let sum : number = 0;
let j : number = 1;

while(j <= 50) {
    if(j%2 === 0){
        sum +=j;
    }
    j++;
}

console.log(sum + "\n");

console.log("Array Iteration");  
// Given an array of employee names, print each name with its index using for...of or forEach.

const empNames : string [] = ["Priya", "Remya", "Bhavya", "Eswari", "Bilal", "Thangadurai", "Veera"];

empNames.forEach((name, index) => {
    console.log(`${index} : ${name}`);
})