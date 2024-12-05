const n = prompt("Please enter a number: ")
let strt = 0
let strt2 = 1
let cnt = 0

// Here we will do the fibonacci sequence of the times entered in n
for (cnt = 0; cnt < n; cnt++) {
    

    console.log("Here we continue: " + strt)
    console.log("This is the second number: " + strt2)
    let fibonacci = strt + strt2
    strt = strt2
    strt2 = fibonacci
    console.log("Here is the summation in fibonacci: " + fibonacci)
    cnt++
}