const x = prompt("Please enter a number: ")

for (let mohammad = 1; mohammad <= x; mohammad++) {
    if (mohammad % 3 == 0 && mohammad % 5 == 0) {
        console.log(mohammad + " is divisible by 3 and 5");
    }
}
    