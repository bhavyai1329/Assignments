console.log(`Write a program to print * in triangle pattern
If I will pass int rows = 5 then it should print triangle with 5 Rows` + "\n");

let space : string = " ";
let star : string = "*";

function printTrianglePattern (rows : number) {
    for(let i : number = 1; i <= rows; i++){
        let line : string = "";

        for(let j : number =1; j <= rows-i; j++){
            line += space;
        }

        for(let k : number = 1; k <=i; k++){
            line += star;
        }
        console.log(line);
    }
    
}

printTrianglePattern(5);

