/*
    In this program, we will find the peak from list of numbers. 
    Peak is the greatest numbers between it's neighbours.
    For example, if we have 10 15 12, 15 is peak since it is greater than 12 and 10.
*/

function find_peaks(array) {
    
        // Peak in array

    for (let peak = 0; peak < array.length - 2; peak++)
        // If 0 < 1 and 1 > 2 then it will print the value of 1
        if (array[peak] < array[peak++] && array[peak++] > array[peak + 2]) {
            print(array[peak + 1])
        }
}
// Calls a function to find the peak
console.log(find_peaks([12, 15, 18, 16, 30, 31, 29]))
