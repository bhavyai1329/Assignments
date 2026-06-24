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

console.log("Create a function that logs the multiplication table of 5 using a loop.");

function mulTable() : void {
    let n = 10;
    for(let i : number = 1; i <= n; i++){
        let product = 5 * i;
        console.log(`5 x ${i} = ${product}`);
    }
}
mulTable();
console.log();

console.log("Write a function that prints all prime numbers between 1 and 50.");

function onlyPrimes() : void {
    let primes : number [] = [];

    for(let i = 2; i < 50; i++) {
        let isPrime = true;

        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i%j === 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            primes.push(i);
        }
    }

    console.log(primes);
}

onlyPrimes();

console.log("Build a function that logs the Fibonacci sequence up to 10 terms.");

/* console.log("-----Function With Parameters & Without Return-----"+"\n");

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

function personDetails(name : string, age? : number) : any {
    if(age !== undefined){
        console.log(`Name : ${name}, Age: ${age}` + "\n");
    }
    else{
        console.log(`Name : ${name}` + "\n");
    }
    return;
}

personDetails("Niru");

console.log("Create a function that takes a string message and an optional boolean flag to log it in uppercase.");

function logMessage(input : string, toUpperCase? : boolean) : string {
    if(toUpperCase !== undefined) {
        if(toUpperCase) {
            const b = input.toUpperCase();
            console.log(b + "\n");
            return b;
        }
        else {
            const b = input
            console.log(b + "\n");
            return b;
        }
    }
    else{
        const c = input
        console.log(c);
        return c;
    }
}

logMessage("nandan", false);

function logMessage1(input : string, toUpperCase? : boolean) : string {
    const output = toUpperCase ? input.toUpperCase() : input ;
    console.log(output + "\n");
    return output;
}
logMessage1("rajesh");

console.log("Build a function that accepts a number and an optional multiplier. If not provided, default multiplier is 1. Return the product.");

function optionalMultiplier(input : number, multiplier : number = 1) : number {
    return input * multiplier;
}
console.log(optionalMultiplier(420, 425));

console.log("-----Function With Rest Parameters-----"+"\n");

console.log("Write a function that accepts any number of numbers and returns their sum.");

function sumOf(...nums : number []) : number {
    let sum : number = 0;

    for(let n of nums) {
        sum = sum + n;
    }

    return sum;
}
console.log(sumOf(2,45,3,43,56) + "\n");


console.log("Create a function that takes a string prefix and multiple string words, then concatenates them with the prefix.");

function stringConcate(prefix : string, ...words : string []) : string {
    let output : string = "";
    for(let n of words) {
        output += `${prefix}${n} `;
    }
    return output.trim();
}
console.log(stringConcate("Mr." , "Rajesh", "Sujith") + "\n");

function stringConcate1(prefix: string, ...words: string[]): string {
    // Map each word with the prefix, then join them with spaces
    const output = words.map(word => `${prefix}${word}`).join(" ");
    return output;
}
console.log(stringConcate1("Mr." , "Rajesh", "Sujith") + "\n");

console.log("Build a function that accepts multiple boolean values and returns how many are true.");

function returnTotalBooleans(...values : boolean []) : number {
    let totalTrue : number = 0;

    for(let n of values){
        if(n) {
            totalTrue++;
        }
    }
    return totalTrue;
}
console.log(returnTotalBooleans(true, false, true, true, false) + "\n"); */