console.log("================Array (single type)================" + "\n");

console.log("Create an array of integers representing exam scores and calculate the highest score." + "\n");

let examScores: number[] = [28, 45, 75, 12, 99, 5];
let highestScore: number = 0;

for(let i=0; i < examScores.length; i++){
  if(examScores[i] > highestScore){
    highestScore = examScores[i];
  }
}
console.log(`Highest score: ${highestScore}`);
console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Store an array of strings for city names and print them in alphabetical order." + "\n");

let cityNames: string[] = ["Paris", "London", "Brussels", "Tokyo"];

for(let i=0; i < cityNames.length-1; i++){
  for(let j=0; j< cityNames.length-j-1; j++){
    if(cityNames[j] > cityNames[j+1]){
      let temp = cityNames[j];
      cityNames[j] = cityNames[j+1];
      cityNames[j+1] = temp;
    }
  }
}

for(let i = 0; i < cityNames.length; i++){
  console.log(cityNames[i]);
}

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Build an array of booleans for attendance and count how many students are present (true)." + "\n");

let isPresent: boolean[] = [true, false, true, true, true, false];
let present: number = 0;
for(let i=0; i < isPresent.length; i++){
  if(isPresent[i]){
    present++
  }
}

console.log(`Total students present: ${present}` + "\n");


console.log("================Array (union type)================" + "\n");

console.log("Create an array that can hold both numbers and strings (e.g., roll numbers and names) and print each element type." + "\n");

let studentDetails: (number | string)[] = ["Abhi","Nina", 425, "Ram", 420];

for(let i=0; i<studentDetails.length; i++){
  console.log(`Datatype of ${studentDetails[i]} is ${typeof studentDetails[i]}`);
}

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Build an array that stores either string or boolean values (e.g., Completed, true) and filter only the booleans." + "\n");

let array: (string | boolean)[] = ["city", true, "true", "Sita", false, "false", false];

for(let i=0; i < array.length; i++){
  if(typeof array[i] === 'boolean'){
    console.log(`${array[i]}`);
  }
}

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Make an array that holds number | null values (e.g., test scores where some are missing) and replace null with 0." + "\n");

let testScores: (number | null)[] = [25, null, 30, 45, null, null];
for(let i=0; i < testScores.length; i++){
  if(testScores[i]==null){
    testScores[i] = 0;
  }
}

for(let i=0; i < testScores.length; i++){
  console.log(testScores[i]);
}

console.log();

console.log("================Object================" + "\n");

console.log("Create an object representing a book with title, author, price, and print details." + "\n");

interface bookDetails {
  title: string,
  author: string,
  price: number
}

let bookinfo: bookDetails = {
  title: "ABC",
  author: "Sriram",
  price: 200
}

for(let key in bookinfo){
  console.log(`${key} : ${bookinfo[key as keyof bookDetails]}`)
}

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Build an object for a student with name, rollNumber, marks, and write a function to check if they passed (marks > 40)." + "\n");

interface studentdets {
  name : string,
  rollNumber : number,
  marks : number
}

let studentinfo : studentdets = {
  name : "Priya",
  rollNumber : 25,
  marks : 4
}

function isPass (mark : number) : void {
  if(mark > 40){
    console.log(`Student exam result: Pass`);
  }
  else{
    console.log(`Student exam result: Fail`);
  }
}

isPass(studentinfo.marks);

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Make an object for a movie with title, rating, releaseYear, and display if it’s a blockbuster (rating > 4)." + "\n");

interface movieDetails {
  title : string,
  rating : number,
  releaseYear : number
}

let movie : movieDetails = {
  title : "Baahubali",
  rating : 4.9,
  releaseYear : 2020
}

function isBlockbuster (rating: number) : void {
  if(rating > 4){
    console.log("Movie is a BLOCKBUSTER" + "\n");
  }
  else{
    console.log("Movie is a FLOP" + "\n");
  }
}

isBlockbuster(movie.rating);


console.log("================Tuple================" + "\n");

console.log("Define a tuple [id, name, salary] for an employee and print it neatly." + "\n");

let empDetails: [number, string, number] = [1, "Manas", 25000];

console.log("Employee Details");
console.log(`ID : ${empDetails[0]}`);
console.log(`Name : ${empDetails[1]}`);
console.log(`Salary : Rs.${empDetails[2]}`);

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Create a tuple [latitude, longitude] for a location and display coordinates." + "\n");

let coordinates: [number, number] = [20.0, 35];
console.log(`Co-ordinates are [${coordinates[0]}, ${coordinates[1]}]`);

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Build a tuple [studentName, rollNumber, grade] and format it into a sentence." + "\n");

let stuDetails : [string, number, string] = ["Kalyan", 11, "A"];

console.log(`Grade of ${stuDetails[0]} is ${stuDetails[2]}. Student rollnumber is ${stuDetails[1]}` + "\n");

console.log("================Function================" + "\n");

console.log("Write a function that takes two numbers and returns their product." + "\n");

function productOfNumbers (a: number, b: number) : number {
  let product = (a*b);
  console.log(`Product of ${a}, ${b} is ${product}`);
  return product;

}

productOfNumbers(25, 4);

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Create a function that accepts a string and returns the number of vowels in it." + "\n");

function totalVowels (a : string) : number {
  let isVowel: number = 0;
  for(let i: number = 0; i < a.length; i++){
    let char = a[i].toLowerCase();
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
      isVowel++;
    }
  } 
  console.log(`Total number of vowels in ${a} : ${isVowel}`);
  return isVowel;
}

totalVowels("Annual");

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Build a function that takes an array of numbers and returns only the even ones." + "\n");

function getEvenNumbers (num : number[]) : number[] {
  let evens : number[] = [];
  for(let i : number = 0; i < num.length; i++){
    if( num[i] %2 === 0 ){
      evens.push(num[i]);
    }
  }
  return evens;
}

console.log(getEvenNumbers([3,5,6,7,8,9,10])); 

console.log("================Map================" + "\n");

console.log("Create a Map<number, string> to store roll numbers and student names, then print all entries." + "\n");

let students : Map<number, string> = new Map();

students.set(405, "Sunil");
students.set(416, "Uma");
students.set(420, "Nirupama");

console.log("Student List:");
for (let [rollNo, name] of students) {
  console.log(`Roll No: ${rollNo}, Name: ${name}`);
}

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Build a Map<string, number> to store product names and prices, then calculate the total cost." + "\n");

let productDetails : Map<string, number> = new Map();

productDetails.set("Perfume",100);
productDetails.set("Soap",28);
productDetails.set("Comb",10);
productDetails.set("Shampoo",385);
productDetails.set("Conditioner",325);

let totalCost : number = 0;
for(let [name, price] of productDetails){
  totalCost += price;
}

console.log(`Total cost : ${totalCost}`);

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Make a Map<number, boolean> to store employee IDs and their active status, then count how many are active." + "\n");

let employeeStatus : Map<number, boolean> = new Map();

employeeStatus.set(1, true);
employeeStatus.set(2, true);
employeeStatus.set(3, false);
employeeStatus.set(4, true);
employeeStatus.set(5, false);

let totalActive : number = 0;

for(let [empID, activeStatus] of employeeStatus){
  if(activeStatus){
    totalActive++
  }
}

console.log(`Total active employees: ${totalActive}` + "\n");

let studentMarkss : Map<string, number> = new Map();

studentMarkss.set("Ram", 37);
studentMarkss.set("Shyam", 57);
studentMarkss.set("Ramu", 97);
studentMarkss.set("Shyamu", 27);

let highestMark : number = 0;

for(let [name, marks] of studentMarkss){
  console.log(`${name} : ${marks}`);
}

for(let[name, marks] of studentMarkss){
  if(marks > highestMark){
    highestMark = marks;
  }
}

console.log(`Student with highest marks is`);

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Create a Map<number, string> where the key is a roll number and the value is the grade. 
Add 5 students, then print only those who scored grade A.`);

let grades: Map<number,string> = new Map();

grades.set(1,'C');
grades.set(2,'C');
grades.set(3,'A');
grades.set(4,'B');
grades.set(5,'A');

for(let [rollnumber, grade] of grades){
  if(grade ==='A'){
    console.log(`${rollnumber} : ${grade}`);
  }
}

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Store book IDs as keys and book titles as values. 
Write a function to check if a book exists in the library and print its title.` + "\n");

let bookTitles : Map <number, string> = new Map();

bookTitles.set(1,"Ramayanam");
bookTitles.set(2,"Maha Bharat");
bookTitles.set(3,"Sundara Kandam");
bookTitles.set(4,"Quran");
bookTitles.set(5,"Bible");

function doesBookExists(library : Map<number, string>, bookTitle: string) : void {
  for(let [, title] of library){
    let found: boolean = false;
    if(title === bookTitle){
      console.log(`${bookTitle} is present in the library`);
      found = true;
      break;
    }
  }
}

doesBookExists(bookTitles, "Bible");

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Build a Map<string, string> with country names as keys and capitals as values. 
  Print all countries whose capital starts with the letter B`+ "\n");

let countries : Map< string, string > = new Map();

countries.set("India", "New Delhi");
countries.set("China", "Beijing");
countries.set("Sri Lanka", "Columbo");
countries.set("Germany", "Berlin");
countries.set("Belgium", "Brussels");

const result : string[] = [];

for(let [country, capital] of countries){
  if(capital.startsWith("B")){
    result.push(country);
  }
}

console.log("Countries whose capital starts with the letter B: " + result.join(", "));

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Use a Map<number, number> where the key is an account number and the value is the balance. 
  Write logic to deposit, withdraw, and print updated balances.`+ "\n");

let accountBalances : Map<number, number> = new Map();

accountBalances.set(500124870480, 25678);

function updateBalance(accountBalances : Map<number, number>, accountNumber : number, credit : number, debit : number) : void {
  if(accountBalances.has(accountNumber)){
    let balance = accountBalances.get(accountNumber);
    if(credit !==0){
      balance! += credit;
    }
    if(debit !==0){
      balance! -= debit;
    }
    console.log("Updated account balance is: " + balance);
  }
  else{
    console.log(`Account number ${accountNumber} not found`);
  }
}

updateBalance(accountBalances, 500124870480, 420, 425);

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log("Store product names as keys and quantities as values. Add items, update quantities, and print the final cart summary." + "\n");

let cart : Map<string, number> = new Map();

cart.set("Soap", 5);
cart.set("Brush", 2);
cart.set("Shampoo", 2);

function updateCart(productCart : Map<string, number>, product : string, newQuantity: number){
  
  if(productCart.has(product)){
    let quantity: number = productCart.get(product);
    quantity += newQuantity;
    productCart.set(product, quantity);
  }
  else{
    productCart.set(product,newQuantity);
  }
}

updateCart(cart, "Soap", -2);
updateCart(cart, "Tooth Paste", 1); 

console.log("Updated Cart Details");
for(const [product,qty] of cart){
  console.log(`${product} : ${qty}`);
}

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Create a Map<string, string> where the key is employee name and the value is department. 
  Print all employees in IT department.` + "\n");

let empDepartments : Map<string, string> = new Map();

empDepartments.set("Bhavya", "QA");
empDepartments.set("Praveen", "HR");
empDepartments.set("Thomas", "IT");
empDepartments.set("Irfan", "HR");
empDepartments.set("Hari", "IT");

function findDepEmp (depDetails : Map<string, string>, depName: string){
  for(const [empName, deptName] of depDetails){
    if(deptName == depName){
      console.log(empName)
    }
  }
}

findDepEmp(empDepartments, "IT");

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Build a Map<string, string> with names as keys and phone numbers as values. 
  Write a function to search by name and return the number.` + "\n");

let phoneDirectory : Map<string, string> = new Map();

phoneDirectory.set("Nirupama","9987898789");
phoneDirectory.set("Anupama","8987898789");
phoneDirectory.set("Rajesh","7987898789");

function searchPhoneNumber(directory : Map<string, string>, name : string){
  if(directory.has(name)){
    let number = directory.get(name);
    console.log(`${number}`);
  }
  else{
    console.log("Person not found");
  }
}

searchPhoneNumber(phoneDirectory, "Nirupamaa");

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Create a Map<string, number> where the key is the student name and the value is their marks.
Add 5 students.
Update marks for one student.
Print all students who scored above 80.`);

let studentMarks : Map<string, number> = new Map();

studentMarks.set("Dheeraj", 25);
studentMarks.set("Krishna Teja", 35);
studentMarks.set("Tharun", 45);
studentMarks.set("Sri Harsha", 55);
studentMarks.set("Sunil Kumar", 95);

function updatedMarks(marks : Map<string, number>, name : string, newmarks : number){
  const normalizedName = name.toLowerCase();
  for(const [student, markss] of marks){
      if(student.toLowerCase() === normalizedName){
        marks.set(student, newmarks);
      }
    }
  }

updatedMarks(studentMarks, "tharun", 85);

console.log("All students who scored above 80");

for(const [name, marks] of studentMarks){
  if(marks > 80){
    console.log(`${name} : ${marks}`);
  }
}

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Build a Map<string, string> with country names as keys and currency names as values.
Add 5 countries. Update the currency for one country. Print all countries that use Dollar.`);

let countryCurrency: Map<string, string> = new Map();

countryCurrency.set("United States", "Dollar");
countryCurrency.set("Japan", "Yen");
countryCurrency.set("Australia", "Dollar");
countryCurrency.set("United Kingdom", "Pound");
countryCurrency.set("India", "Rupee");
countryCurrency.set("Germany", "Euro");
countryCurrency.set("Switzerland", "Franc");
countryCurrency.set("Canada", "Dollar");
countryCurrency.set("Russia", "Ruble");
countryCurrency.set("China", "Yuan");

function findCountry(countries : Map<string, string>, country : string, currency : string) {
  const normalizedCountry = country.toLowerCase();
  const normalizedCurrency = currency.toLowerCase();

  for(const [countryName, countryCurrency] of countries){
    if(countryName.toLowerCase() == normalizedCountry){
      countries.set(countryName, currency);
      console.log(`${countryName} currency is updated to ${currency}`);
    }
  }
}

findCountry(countryCurrency, "australia", "Australian Dollar");

for(const [country, currency] of countryCurrency){
  if(currency === 'Dollar'){
      console.log(`${country} : ${currency}`);
    }
  }

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Use a Map<number, number> where the key is employee ID and the value is salary. Add 5 employees. 
Increase salary by 10% for employees earning less than 30,000. Print the updated salary list.`);

let salary : Map<number, number> = new Map();

salary.set(1, 25000);
salary.set(2, 55000);
salary.set(3, 35000);
salary.set(4, 15000);

console.log("Updated Salary List");

function normalizeSalary(salaries : Map<number, number>) {
  for(const [ID, salarys] of salary){
    let newSalary = salaries.get(ID);
    if(salarys < 30000){
      newSalary = salarys + (salarys * 0.1);
      salaries.set(ID, newSalary);
    }
    console.log(`${ID} . Rs.${newSalary}`);
  }
}

normalizeSalary(salary);

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Create a Map<string, number> where the key is book title and the value is the number of copies available.
Add 5 books. Borrow one book (reduce count). Print all books with fewer than 2 copies left.`);

let library : Map<string, number> = new Map();

library.set("Ramayanam", 5);
library.set("Maha Bharat", 1);
library.set("Sundara Kandam", 2);
library.set("Quran", 4);
library.set("Bible", 2);

function bookCopiesLeft( books : Map<string, number>, name : string) {
  let normalizedBookName = name.toLowerCase();

  for(const [book, copies] of books){
  if(book.toLowerCase() === normalizedBookName){
    books.set(book, copies-1);
    return;
  }
}
}

console.log("List of books with fewer than 2 copies left")

bookCopiesLeft(library, "Maha Bharat");
bookCopiesLeft(library, "bible");

for(const [book, copies] of library){
    if(copies < 2){
      console.log(`${book}`);
    }
  }

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Maintain two Maps: 
Map<string, number> for product → quantity.
Map<string, number> for product → price.
Calculate total bill by multiplying quantity × price for each product.` + "\n");

let productQuantity : Map<string, number> = new Map();

 productQuantityy.set("Soap", 2);
 productQuantity.set("Brush", 3);
 productQuantity.set("Shampoo", 4);

let productPricee : Map<string, number> = new Map();

 productPrice.set("Soap", 25);
 productPrice.set("Brush", 37);
 productPrice.set("Tooth Paste", 425);
 productPrice.set("shampoo", 425);

let totalBill : number = 0;

for(const [productName, quantity] of productQuantityy){
  for(const [prodName, price] of productPricee){
    if(productName.toLowerCase() === prodName.toLowerCase()){
      totalBill += quantity * price;
    }
  }
}

console.log(`Total Bill : Rs.${totalBill}`);

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Create two Maps:
Map<string, string> → employee name → department
Map<string, number> → employee name → salary

Tasks:
Print all employees in the “IT” department.
Increase salary by 15% for IT employees.
Print updated salaries for all employees.` + "\n");

let empDep : Map<string, string> = new Map();

empDep.set("Bhavya", "QA");
empDep.set("Praveen", "HR");
empDep.set("Thomas", "IT");
empDep.set("Irfan", "HR");
empDep.set("Hari", "IT");

let empSalary : Map<string, number> = new Map();

empSalary.set("Bhavya", 25000);
empSalary.set("Praveen", 55000);
empSalary.set("Thomas", 35000);
empSalary.set("Irfan", 15000);
empSalary.set("Hari", 25000);

function empAssignment (Departments : Map<string, string>, Salaries : Map<string, number>, dept : string){
  console.log("all employees in the IT department");

  for(const [emp, dep] of Departments){
    if(dep.toLowerCase() === dept.toLowerCase()){
      let ITemp : string = emp;
      console.log(`${emp}`);
      let salary : number = Salaries.get(emp)!;
      let newsalary = salary + (salary * 0.15);
      empSalary.set(emp, newsalary);
      }
    }
  }

empAssignment(empDep, empSalary, "IT");
console.log();

console.log("Updated Salaries of all employees")
for(const [emp, salary] of empSalary){
  console.log(`${emp} : Rs.${salary}`);
}

console.log("----------------------------------------------------------------------------------------------------------------" + "\n");

console.log(`Maintain two Maps:
Map<string, number> → product name → quantity
Map<string, number> → product name → price

Tasks:
Add 5 products with quantities and prices.
Borrow/update quantities for some products.
Calculate and print the total bill (quantity × price).
Print a summary like: "Soap: 3 × 40 = 120".` + "\n");

let productQuantiti : Map<string, number> = new Map();

 productQuantiti.set("Soap", 2);
 productQuantiti.set("Brush", 3);
 productQuantiti.set("Shampoo", 4);
 productQuantiti.set("Tooth Paste", 1);
 productQuantiti.set("Oil", 2);

let productPrice : Map<string, number> = new Map();

 productPrice.set("Soap", 25);
 productPrice.set("Brush", 37);
 productPrice.set("Tooth Paste", 425);
 productPrice.set("shampoo", 425);
 productPrice.set("Oil", 125);

 function updateQuantity (quantity : Map<string, number>, name : string, newQuantity: number) : void {
    const normalisedName : string = name.toLowerCase();
    for(const [product, totalquantity] of quantity){
        if(product.toLowerCase() === normalisedName){
            quantity.set(product, newQuantity);
            return;
        }
    }
 }

 updateQuantity(productQuantiti, "oil", 2);
 updateQuantity(productQuantiti, "soap", 5);

function calculateBill (price : Map<string, number>, quantity: Map<string, number>){
    for(const [pName, pQty] of quantity){
        for(const [proName, pPrice] of price){
            if(pName.toLowerCase() === proName.toLowerCase()){
                console.log(`"${pName} : ${pQty} x ${pPrice} = (${pQty} * ${pPrice})"` + "\n");
            }
        }
    }
 }

 calculateBill(productQuantiti, productPrice);

 console.log("----------------------------------------------------------------------------------------------------------------" + "\n");
