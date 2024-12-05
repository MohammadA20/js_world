/*
    This program will gain the maximum profit,
    maximum - minimum price
*/

function max_profit(prices) {
    /*
    maximum for sell
    minimum for buy
    */
    let maximum_price = 0
    for (days = 0; days < prices.length; days++) {
        
    
        for (mini = days + 1; mini < prices.length; mini++) {
            let count = prices[mini] - prices[days]
            if (count > maximum_price) {
                maximum_price = count;
            }
    }
    return maximum_price
}
}
let user_enter_stock = prompt("Please enter number to calculate stock from Day 0 to Day 7: ")
user_enter_stock = list(map(int, user_enter_stock.split()))
let gain_profit = max_profit(user_enter_stock)
console.log(gain_profit);
