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
let credits: number[] = []; //Credit transaction amounts array
let debits: number[] = []; //Debit transaction amounts array
let suscpiciousTransactions: number[] = []; //Suscpicious transaction amounts array
let totalCredit: number = 0; //Total credit amount
let totalDebit: number = 0; //Total debit amount
let totalCreditCount: number = 0; //Total credit transactions count
let totalDebitCount: number = 0; //Total debit transactions count
let suspiciousCount: number = 0; //Total suscpicious transactions count

//Running for loop to check each transaction amount 
for (let i: number = 0; i < transactionAmounts.length; i++){
    
    //Checking if transaction amount is credit
    if(transactionAmounts[i] > 0){
        credits[i] = transactionAmounts[i]; //Adding transaction amount to credits array if amount > 0
        totalCredit += transactionAmounts[i]; //Adding the credit amounts 
        totalCreditCount++; //Incrementing the credit transaction count

        //Checking if credit transaction amount is suscpicious or not 
        if(credits[i] > 10000){
            suscpiciousTransactions[i] = transactionAmounts[i]; //Adding transaction amount to suscpicious array if credit > 10000
            suspiciousCount++; // Incrementing the suspicious transaction count
        }    
    }

    //Checking if transaction amount is debit
    else{
        debits[i] = transactionAmounts[i]; //Adding transaction amount to debits array if amount < 0
        totalDebit += transactionAmounts[i]; //Adding the debit amounts
        totalDebitCount++; //Incrementing the debit transaction count

        //Checking if debit transaction amount is suscpicious or not
        if(debits[i] < -10000){
            suscpiciousTransactions[i] = transactionAmounts[i]; //Adding transaction amount to suscpicious array if debit > 10000
            suspiciousCount++; // Incrementing the suspicious transaction count
        }   
    }
}

console.log(`1. Total number of credit & debit transactions completed : ${totalCreditCount}, ${totalDebitCount}`);
console.log(`2. Total amount credited & debited in account : Rs.${totalCredit}, Rs.${totalDebit}`);

let finalBalance: number = totalCredit + totalDebit; //Calculating balance by adding total credit & debit amount
console.log(`3. Total amount remaining at the end in Bank Account : Rs.${finalBalance}`);

console.log(`4. Total number of suscpicious transactions : ${suspiciousCount}`);

//Running for loop to check suscpicious transactions > 10000
for(let i: number = 0; i < suscpiciousTransactions.length; i++){

    //Checking & printing credit suscpicious transactions
    if(suscpiciousTransactions[i] > 10000){
        console.log(`   Suspicious credit transaction with amount: Rs.${credits[i]}`);
    }

    //Checking & printing debit suscpicious transactions
    else if(suscpiciousTransactions[i] < -10000){
        console.log(`   Suspicious debit transaction with amount: Rs.${debits[i]}`);
    }
}