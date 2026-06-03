/* console.log(`Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence` + "\n"); */

const sentence : string = "Java programming is fun and challenging";
const words : string [] = sentence.split(" ");

console.log(`1. Total number of words in the sentence: ${words.length}` + "\n");
console.log(`2. Sentence in reverse order: ${words.reverse().join(" ")}` + "\n");

words.reverse();

let capitalizedSentence : string = "";
for(let i: number = 0; i < words.length; i++){
    let eachword : string = words[i]!;
    let firstCharacter : string = eachword.charAt(0).toUpperCase();
    let capital : string = firstCharacter.toUpperCase();
    let rest : string = eachword.slice(1);
    capitalizedSentence += firstCharacter + rest + " "
}
console.log(`3. ${capitalizedSentence}`);