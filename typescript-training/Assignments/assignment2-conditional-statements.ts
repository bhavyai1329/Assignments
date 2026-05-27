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