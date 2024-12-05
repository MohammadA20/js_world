/*
    This program will replace the negative number
    with the missing sequence of the list
*/

function first_missing_positive(numbers) {
    /*
        Like if we have 1,2,3,-7,5 the output will 4
        will replace -7
    */
    numbers.sort();
    let missing_number = 1;
    for (let numb = 0; numb < numbers.length; numb++) {
        
    
        if (numbers[numb] == missing_number) {
            missing_number += 1;
        } else if (numbers[numb] > missing_number) {
            break
        } else if (numbers[numb] == -1) {
            continue
    }
    return missing_number
}
}
console.log(first_missing_positive([-1, 2, 3]))
