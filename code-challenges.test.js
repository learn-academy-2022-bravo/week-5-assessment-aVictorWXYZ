// FAIL  ./code-challenges.test.js
// ● Test suite failed to run
//Follow Red, Green, Refactor
//describe,it,expect,toEqual
//describe 
//it  
//expect 
//toEqual 

//   Your test suite must contain at least one test.

// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//Follow Red, Green, Refactor
//describe,it,expect,toEqual
//describe crypto
//it  takes in a string and returns a coded message.
//expect crypto(secretCodeWord1)
//toEqual "L4ck4d41s1c4l"

// a) Create a test with expect statements using the variables provided.

describe("crypto",() => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
        expect(crypto(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(crypto(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(crypto(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// FAIL  ./code-challenges.test.js
// crypto
//   × takes in a string and returns a coded message. (2 ms)

// ● crypto › takes in a string and returns a coded message.

//   ReferenceError: crypto is not defined
// takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// b) Create the function that makes the test pass.
const crypto = (stringCheese) => {

    let numbers= ["4","3","1","0","4","3","1","0"]
    let letters= ["a","e","i","o","A","E","I","O"] 
    return stringCheese.split("").map(value => {
        if (letters.indexOf(value) === -1 ){
            return value
        }else{
            return numbers[letters.indexOf(value)]
        }
    }).join("")
     
}

// PASS  ./code-challenges.test.js
// crypto
//   √ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.325 s, estimated 1 s

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.
//Follow Red, Green, Refactor
//describe,it,expect,toEqual
//describe allHave
//it  takes in an array of words and a single letter and returns all the words that contain that particular letter.
//expect allHave(arrayOfWords1, letterA)
//toEqual ["Apple", "Banana", "Orange"]

// a) Create a test with expects statement using the variable provided.

describe("allHave", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(allHave(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(allHave(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})


// × takes in an array of words and a single letter and returns all the words that contain that particular letter.

// ● allHave › takes in an array of words and a single letter and returns all the words that contain that particular letter.

//   ReferenceError: allHave is not defined

// b) Create the function that makes the test pass.

const allHave = (array, letter) => {
    return array.filter(value => {
        if(value.toLowerCase().indexOf(letter) !== -1){
            return value
        }
    })

}
// √ takes in an array of words and a single letter and returns all the words that contain that particular letter.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.254 s, estimated 1 s
// Ran all test suites.
// Done in 0.95s.




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
//Follow Red, Green, Refactor
//describe,it,expect,toEqual
//describe fullOfFive
//it  takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
//expect fullOfFive(hand1)
//toEqual true
// a) Create a test with expect statements using the variable provided.

describe("fullOfFive", () =>{
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false


        expect(fullOfFive(hand1)).toEqual(true)
        expect(fullOfFive(hand2)).toEqual(false)
        expect(fullOfFive(hand3)).toEqual(false)
    })
})
// × takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind. (1 ms)

// ● fullOfFive › takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

//   ReferenceError: fullOfFive is not defined

// b) Create the function that makes the test pass.

const fullOfFive = (foot) => {
    firstFoot = foot[0]
    first = foot.filter(value => {
        if(value !== firstFoot){
            return value
        }
    })
    secondFoot = foot[0]
    second = first.filter(value => {
        if(value === secondFoot){
            return value
        }
    })
    if(first.length === 2 || second.length === 2 && first.length === 3 || second.length === 3){
        return true
    }else{
        return false
    }

}

// PASS  ./code-challenges.test.js
// crypto
//   √ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (3 ms)
// allHave
//   √ takes in an array of words and a single letter and returns all the words that contain that particular letter. (1 ms)
// fullOfFive
//   √ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.258 s, estimated 1 s