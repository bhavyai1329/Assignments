/* console.log(`Write a program to search for all occurrences of a “Java” word in the paragraph and print their indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word` + "\n"); */

const OriginalSentence : string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
const words : string [] = OriginalSentence.split(" ");

let totalOccurences : number = 0;
let indices : number[] = [];

for(let i = 0; i < words.length; i++){
    if(words[i] === 'Java'){
        totalOccurences++;
        indices.push(i);
    }
}

console.log(`Total occurences of word "Java" is ${totalOccurences} at ${indices.join(", ")}`);
