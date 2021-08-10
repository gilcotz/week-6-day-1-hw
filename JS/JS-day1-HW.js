//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]

// // let findWords = () => {
//     let names = dog_string.includes("Max"){
//     if (names = 'Max', 'HAS', 'PuRple', 'dog'){
//         return `Matched ${dog_names}`   
//     }; else {(names != 'Max', 'HAS', 'PuRple', 'dog')
//         return "No Matches"
//     }

// }
// console.log('Max')

// console.log(findWords)

// var str = "This is a test sentence";
// var hasTest = str.includes("test", "sentence");

// if(hasTest == 'test', 'sentence'){
// 	console.log(`matched ${hasTest}`)



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every value that's double is over 50.


*/

const given_arr == [13, 22, 26, 40, 1, 10]

let replaceEvens = (arr) => {
    const nums = [2, 4, 6, 8, 10]
    let nums_reduce = nums.reduce((accumulator, current_num) => {
        return accumulator + current_num
    })
    console.log(nums)
}


//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...
// hw.js
// Displaying hw.js.

//  2 CODEWARS JAVASCRIPT PROBLEMS

// code wars JavaScript:  https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
// code wars Javascript: https://www.codewars.com/kata/578a8a01e9fd1549e50001f1/train/javascript
