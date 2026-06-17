console.log("-----Function Without Parameters & Without Return-----"+"\n");

console.log("Write a function that prints 'Hello, TypeScript!' to the console.");

function printstatement() : void{
    console.log("Hello, TypeScript!"+"\n");
}

printstatement();

console.log("Create a function that logs the current date and time.");

function dateTimeLog(): void{
    const now = new Date();
    console.log("Current date and time : " + now.toString() + "\n");
}

dateTimeLog();

console.log("Build a function that displays a motivational quote.");

function dailyQuote() : void{
    console.log("The time is always right to do what is right."+"\n");
}

dailyQuote();

console.log("-----Function With Parameters & Without Return-----"+"\n");

console.log("Write a function that accepts a string name and prints 'Welcome, <name>.'");

function welcome (a : string) : void {
    console.log(`Welcome, ${a}.` + "\n");
}

welcome("Nirupama");

console.log("Create a function that takes two numbers and logs their sum.");

function sumTwoNumbers (a: number, b: number) : void {
    console.log(a+b + "\n");
}

sumTwoNumbers(420, 425);

console.log("Build a function that accepts a list of city names (string[]) and prints each one.");

function cityNames (cities : string[]) : void {
    for(let city of cities){
        console.log(city);
    }
}

cityNames(["Chennai", "Mumbai", "Banglore", "Hyderabad", "Kolkatha", "New Delhi"]);

console.log("-----Function Without Parameters & With Return-----"+"\n");

console.log("Write a function that returns today’s date as a string.");

function todaysDate() : string {
    let today = new Date();
    return today.toLocaleDateString();
}

console.log(`Today's date : ${todaysDate()}` + "\n");

console.log("Create a function that returns a random number between 1 and 100.");

function returnRandomNumber () : number {
    let a : number = Math.floor(Math.random() * 100) + 1;
    return a;
}

console.log(returnRandomNumber() + "\n");

console.log("Build a function that returns a fixed string 'TypeScript is powerful!'.");

function returnstring() : string {
    const a : string = "TypeScript is powerful!"
    console.log(a + "\n");
}

returnstring();

console.log("-----Function With Parameters & With Return-----"+"\n");

console.log("Write a function that accepts two numbers and returns their product.");

function product(a : number, b : number) : number {
    
    return a * b;
}

const x : number = 420;
const y : number = 425;
console.log(`Product of ${x}, ${y} : ` + product(420, 425) + "\n");

console.log("Create a function that takes a string and returns the number of vowels in it.");

function totalVowels (a : string) : number {
    let vowelCount : number = 0;
    const vowels : string[] = ["a", "e", "i", "o", "u"];

    for(let i : number = 0; i < a.length; i++) {
        const char = a[i]!.toLowerCase();

        if(vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

const input : string = "Enthusiasm";

console.log(`Total vowels in string ${input} : ` + totalVowels(input) + "\n");

console.log("Build a function that accepts an array of numbers and returns only the even ones.");

function onlyEvens(a : number []) : number [] {
    let evens : number []  = [];
    for(let i of a) {
        if(i % 2 === 0) {
            evens.push(i);
        }
    }
    
    return evens;
}

console.log(onlyEvens([23, 33, 34, 46, 92, 100]) + "\n");

console.log("-----Function With Optional Parameters-----"+"\n");
console.log("Write a function that accepts a name and an optional age. If age is provided, print 'Name: X, Age: Y', else just 'Name: X'.");

console.log("Create a function that takes a string message and an optional boolean flag to log it in uppercase.");

console.log("Build a function that accepts a number and an optional multiplier. If not provided, default multiplier is 1. Return the product.");