/* let prices : number [] = [7, 1, 5, 3, 6, 4];
let lowest : number = 0;
let highest : number = 0;

for(let i: number = 0; i < prices.length; i++){
    let num : number = prices[i];                       

    for(let j : number = i+1; j < prices.length; j++){    
        if(num > prices[j]!){                          
            if(num > highest){                         
                highest = num;                         
            }
        }
        else{
            if(prices[j]! > lowest){
                lowest = prices[j]!;
            }
        }        
    }
}

console.log(`${highest}, ${lowest}`); */

function Profit(prices: number[]): number {
    let minPrice = Infinity;   // lowest price seen so far
    let maxProfit = 0;         // best profit found

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);       // update lowest price
        maxProfit = Math.max(maxProfit, price - minPrice); // update profit
    }

    return maxProfit;
}

console.log(Profit([4, 6, 2, 5, 1, 7]));