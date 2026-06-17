console.log("Student Grade Evaluation"); 
/*Write a program that takes a student’s marks as input and prints:
"Distinction" if marks ≥ 75
"Pass" if marks ≥ 40 and < 75
"Fail" if marks < 40 */

const marks : number = 8;
console.log(`Your marks are : ${marks}`);
if(marks >= 75) {
    console.log("Grade : Distinction" + "\n");
}
else if(marks >= 40 && marks < 75){
    console.log("Grade : Pass" + "\n");
}
else{
    console.log("Grade : Fail" + "\n")
}

console.log("Discount Calculator"); 
/* Create a program that applies discounts based on purchase amount:
≥ 5000 → 20% discount
≥ 2000 → 10% discount
Otherwise → No discount */

function discountCalculator (amount : number): number {
    let toPay : number = amount;
    if(amount >= 5000){
        toPay -= toPay * 0.2;
    }
    else if(amount >= 2000){
        toPay -= toPay * 0.1;
    }
    return toPay;
}

console.log(`Amount to be paid after discount : ${discountCalculator(2500)}` + "\n");

console.log("Day of the Week");
// Use a switch statement to print whether the given day is a weekday or weekend.

let day : string = "Monday";

switch(day.toUpperCase()) {
    case "SUNDAY" :
        console.log(`${day.toUpperCase()} is a WEEKEND!`);
        break;
    case "MONDAY" :
        console.log(`${day.toUpperCase()} is a week day!`);
        break;
    case "TUESDAY" :
        console.log(`${day.toUpperCase()} is a week day!`);
        break;
    case "WEDNESDAY" :
        console.log(`${day.toUpperCase()} is a week day!`);
        break;
    case "THURSDAY" :
        console.log(`${day.toUpperCase()} is a week day!`);
        break;
    case "FRIDAY" :
        console.log(`${day.toUpperCase()} is a week day!`);
        break;
    case "SATURDAY" :
        console.log(`${day.toUpperCase()} is a WEEKEND!`);
        break;
    default:
        console.log("Invalid Input");
}
