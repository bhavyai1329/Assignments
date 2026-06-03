console.log(`Given a number n, determine whether it is a prime number or not. 
A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.` + "\n");

function isPrime(n: number): boolean {
    let i: number = n;
    if(i<=1){
     return false; 
    }

    for(let j: number =2; j<i-1; j++ ){
        if(i%j === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(777));