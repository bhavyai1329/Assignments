/* A bank evaluates loan applicants based on the following criteria:
1. Credit Score:
   o If the credit score is above 750, the loan is automatically approved.
   o If the credit score is between 650 and 750, additional checks are performed.
   o If the credit score is below 650, the loan is denied.
2. Income:
   o For credit scores between 650 and 750, the customer’s income must be at least $50,000
for the loan to be considered.

3. Employment Status:
   o If the customer’s income is at least 50,000, the system checks whether the customer is
employed.
   o If the customer is unemployed, the loan is denied.

4. Debt-to-Income Ratio:
   o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
   o If the DTI ratio is less than 40%, the loan is approved.
   o If the DTI ratio is 40% or greater, the loan is denied. */

let creditScore: number = 750
let income: number = 75000
let isEmployed: boolean = true
let debtToIncomeRation: number = 45

// Verifying if credit score is above 750
if(creditScore > 750){
    console.log("Loan approved")
}

//Verifying if credit score is between 650 - 750//
else if(creditScore <= 750 && creditScore >= 650){

    //Verifying if income is above $50000//
    if(income >= 50000){

       // Verifying if employed or not//
        if(isEmployed){

            //Verifying if debt to income ratio is below 40 or not//
            if(debtToIncomeRation < 40){
                console.log("Loan approved")
            }

            //Loan denied if debt to income ratio is above 40//
            else{
                console.log("Loan denied")
            }
        }

        // Loan denied if not employed//
        else{
            console.log("Loan denied")
        }
    }

    //Loan denied if income less than $50,000//
    else{
        console.log("Loan denied")
    }
}

//Loan denied if credit score less than 650
else{
    console.log("Loan denied")
}