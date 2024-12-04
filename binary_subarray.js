function longest_subarray(array) {
    let maximum_counter_sub = 0
    let counter_subarray = 0
    for (let compare = 0; compare < array.length - 1; compare++) {
        if (array[compare] != array[compare++]) {
            counter_subarray++;
        }
        if (counter_subarray > maximum_counter_sub) {
                maximum_counter_sub = counter_subarray
        }
        else {
            counter_subarray = 0;
        }
    }
    return maximum_counter_sub++;
}
const SUBARRAY = longest_subarray([0,1,1,1,1,0,0,0,1,0,1])
console.log(SUBARRAY)