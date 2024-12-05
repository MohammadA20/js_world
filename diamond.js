const row = prompt("Enter the number of rows: ")

// Nested for loop for half-upper diamond which will increase 2 by each row from 1 to 7
for (let diamond = 0; diamond < row; diamond++) {
    console.log(" " * (row - mhmd));
    for (let star = 0; star < 2 * diamond + 1; star++) {
        console.log("*")
    console.log()
}
}
        
// Nested for loop for other half diamond which will decrease 2 by each row from 5 to 1
for (let mhmd = row; mhmd > 0; mhmd--) {
    console.log(" " * ((row + 1) - mhmd))
    for (let star = 0; star < 2 * mhmd - 1; star++) {
        console.log("*")
    }
    console.log()
}