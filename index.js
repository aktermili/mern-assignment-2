// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(num1, num2){
    const sum=num1+num2;
    return sum;



}
const sum = calculateSum(20 , 30);
console.log(sum);

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(a){
    if(a%2===0){
        return true;
    }
    else{
        return false;
    }


}
const result = isEven(8);
console.log(result);

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(numbers){
    var largest= numbers[0];
  
    for(var number of numbers){

        if(number>largest){
            largest = number;
        }
       
    }
    return largest;
}
const numbers=[ 40 , 50, 23, 60, 70];
const largestNumber = findMax(numbers);
console.log(largestNumber);

// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(text){
    var reversed= ' ';
    for(var i=text.length-1; i>=0; i--){
        const element= text[i];
        var reversed =  reversed + element;
    }
    return reversed;

}

const str = "i love my mother";
const reverseText = reverseString(str);
console.log(reverseText);

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers (Numbers){
    const oddNumbers=[];
     for(const Number of Numbers){
       if(Number%2!==0){
        oddNumbers.push(Number);

       }
     }
     return oddNumbers;
     
        
}
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8];

 var oddNumbers = filterOddNumbers(Numbers);
console.log(oddNumbers);

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(numbersArray){
    let sum=0;
    for(let element of numbersArray){
         sum = sum +element;
    }
    return sum;

}
const numbersArray=[32, 4, 56, 7, 89, 90]
const sumNumber = sumArray(numbersArray);
console.log(sumNumber);

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(numbers) {
    return numbers.sort((a, b) => a - b);
}


let inputArray = [5, 3, 8, 1, 2, 7];
let sortedArray = sortArray(inputArray);
console.log(sortedArray);  

// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase()+ str.slice(1);

}
console.log(capitalizeFirstLetter("hello"));
