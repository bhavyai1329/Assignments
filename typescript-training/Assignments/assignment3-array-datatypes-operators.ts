/* Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and marks [75, 80, 82] 
   Add 10 marks to each students using assignment operators and store it into another array, 
   after adding 10 marks identify the average marks of all students */


let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"]; // Student names array
let marks: number[] = [75, 80, 82]; // Marks array
let updatedMarks: number[] = []; // Updated Marks array
let totalMarks: number = 0; // Total Marks 

console.log("Updated Marks:"); 

// Running for loop to add 10 to student's marks
for(let i: number = 0; i < marks.length; i++){
    updatedMarks[i] = marks[i] + 10; //Adding 10 to each student marks and assigning it to updated marks array//
    totalMarks += updatedMarks[i]; //Adding each updating mark and assigning it to Total Marks variable
    console.log(`${studentNames[i]} : ${updatedMarks[i]}`);
}

 let average: number = totalMarks / updatedMarks.length; // Calculating average marks
 console.log(`Average Marks: ${average}`);