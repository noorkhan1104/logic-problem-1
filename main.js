//question 1
function sum(a, b) {
    return a + b;
}
//const result = sum(3, 4);
console.log(result); // output is 7

 
//let result;
const sum= (a,b) => result = a+b
result= sum (2,3);
console.log(result);



//question 2
function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(5)); // Output is false

 //second way
  function isEven (num){
    if(num % 2 === 0){
      return "this is even number"
    }else {
      return "this is odd number"
    }
  }
  //let result = isEven(7)
  console.log(result);/////////////////
  
//question 3
function maxOfThree(a, b, c) {
    return Math.max(a, b, c); //built in function
  }
  console.log(maxOfThree(5, 8, 3)); // Output is  8

// const maxOfThree=(a,b,c)=>{
//   let max = Math.max(a,b,c)
//   return max
// }
// let check = maxOfThree
// console.log(maxOfThree);


 // question 4
 function reverseArray(arr) {
     return arr.reverse();
   }
   console.log(reverseArray([1, 2, 3])); // Output is [3, 2, 1]

//  function reverseArray(arr){
//   let reverse = arr.reverse()
//   return reverse
//  }
//  let reverse= reverseArray([1,2,3])
//  console.log(reverseArray([2,3,4]));
 

//question 5
//const factorial = (n)=>{
 //let result=1

 if(n<0) return "not exist"

 if(n===1 || n===0) return 0

 for (let i = 2; i<=n ;i++){
  result= result *i
}
 return result
//}
//const result = factorial(5)
console.log(result);

//recusive method
// const factorial = (n)=>{
//   if(n <0) return "not exist"
//     if(n === 0) return 1

// return n* factorial (n-1)
// }
// const result = factorial(5)
// console.log(result);

// question 6
 function countVowels(str){
  const vowels ="aeiou";
  let count=0;  
   
  str = str.toLowerCase();

  for(let char of str){
    if (vowels.includes(char)){
      count++
    }
  }
  return count;
 }

console.log(countVowels("hello world"));//output 3

// question 7

function removeDuplicates(arr) {
  return [...new Set (arr)]
}
console.log(removeDuplicates([1,2,3,4,4,5,5,]));


//question 8
function sumArray(arr){
  let sum =0;
  for (let i = 0 ; i < arr.length; i++ ){
    sum += arr[i]
  }
  return sum;
}
console.log(sumArray([1,2,3,4])); //output : 10
 

9
function celsiusToFahrenheit(c){
  return c* 9/5+32
}
console.log(celsiusToFahrenheit(0));// output : 32

10
function isPrime(n){
  if(n<=1)
    return false
  else(n<=3)
  return true
}
console.log(isPrime(7)); //output is true
