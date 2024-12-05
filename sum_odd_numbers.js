let n = prompt("Please enter a number: ")
let sum = 0

//This code will print all the odd numbers from 0 to n and display the sum of each operation
for (let odd = 0; odd <= n; odd++) {
    if (odd % 2 == 1) {
        console.log("This is the odd number " + odd)
        sum += odd
        console.log("This is their sum" + sum)
    }
}