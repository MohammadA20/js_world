/*
In this program, we will list the even numbers before the odd numbers
*/
list_numbers = []
even_numbers = []
odd_numbers = []

function special_rearrangement(nums) {
    /*
        In this for loop, we will check 
        if the number is even or odd
    */
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    console.log(nums)
    for (let sort = 0; sort < nums.length; sort++) {
        if (nums[sort] % 2 == 0) {
            console.log(sort + " is an even number")
            even_numbers.append(sort)
        }
        else {
            print(sort + " is an odd number")
            odd_numbers.append(sort)
        }
    }
}
special_rearrangement(list_numbers)
// Then  we will add the numbers sorted from even to odd numbers in the list
const numbers_combined = even_numbers + odd_numbers
print("This is the list with an even numbers before odd numbers:" + numbers_combined)
