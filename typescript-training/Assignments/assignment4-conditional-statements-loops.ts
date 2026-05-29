/* Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements

1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */

/* Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements

1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */

/* Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements

1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */

let transactionAmounts: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000]; //Transaction Amounts Array
let totalCredit: number = 0; //Total credit amount
let totalDebit: number = 0; //Total debit amount
let totalCreditCount: number = 0; //Total credit transactions count
let totalDebitCount: number = 0; //Total debit transactions count
let suspiciousCount: number = 0; //Total suscpicious transactions count

//Running for of loop to check each transaction amount 
for (let i of transactionAmounts){
    
    //Checking if transaction amount is credit
    if(i > 0){
        totalCredit += i; //Adding the credit amounts 
        totalCreditCount++; //Incrementing the credit transaction count

        //Checking if credit transaction amount is suscpicious or not 
        if(i > 10000){
            console.log(`Suspicious credit transaction with amount: Rs.${i}`);
            suspiciousCount++; // Incrementing the suspicious transaction count
        }    
    }

    //Checking if transaction amount is debit
    else{
        totalDebit -= i; //Adding the debit amounts
        totalDebitCount++; //Incrementing the debit transaction count

        //Checking if debit transaction amount is suscpicious or not
        if(i < -10000){
            console.log(`Suspicious debit transaction with amount: Rs.${-i}`);
            suspiciousCount++; // Incrementing the suspicious transaction count
        }   
    }
}

console.log(`---------------Transaction Details---------------`);
console.log(`1. Total number of credit & debit transactions completed : ${totalCreditCount}, ${totalDebitCount}`);
console.log(`2. Total amount credited & debited in account : Rs.${totalCredit}, Rs.${totalDebit}`);

let finalBalance: number = totalCredit - totalDebit; //Calculating balance by adding total credit & debit amount
console.log(`3. Total amount remaining at the end in Bank Account : Rs.${finalBalance}`);

console.log(`4. Total number of suscpicious transactions : ${suspiciousCount}`);