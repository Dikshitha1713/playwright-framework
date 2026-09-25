//Create an array of 5 numbers and print all the elements.
let prac:any= [10, 20, 30, 40, 50]
console.log(prac);

//Find the length of an array.
console.log(prac.length)

// Find the last index of an array using length.
console.log(prac.length-1)

//Print the first and last element of an array.
console.log(prac[0], prac[4])

//Change the value of an element at a specific index.
prac[0] = 0.87
prac[5] ="ts"
console.log(prac)

//Create an array containing strings, numbers, boolean, and null.
let multi:any = ["diksha", 17, true, null]
console.log(multi);

// Print all elements of an array using a for loop.

let elements:any= [10, 20, 0.78, true, false, null, "ts", "fs"]
for(let i = 0; i<elements.length; i++ ){
    console.log(elements[i]);   
}

//Print only even numbers from an array.
let even:any= [0,1,2,3,4,5,6,7,8,9,10,11,24,33,27,23,22,72,50]
for(let even =0; even<=50; even++){
    if(even%2 == 0){
        console.log(" even nums from 0 to 50",even )
    }   
}

for(let i= 0; i<even.length; i++){
    if(even[i]%2 ==0){
        console.log(" even number", even[i]);
        
    }
}
// Print only odd numbers from an array.
for(let i= 0; i<even.length; i++){
    if(even[i]%2 !=0){
        console.log(" odd number", even[i]);
        
    }
}
//Find the sum of all numbers in an array.
let sum =0
let nums:any= [10, 20, 0.78, true, false, null, "ts", "fs"]
for(let i=0; i<nums.length; i++){
    sum = sum + nums[i]  
}
 console.log("sum=", sum)

 //Find the largest number in an array.
//  let numbers = [2, 56, 34, .088, 677, 43,-8, -76]
//  let largest = numbers[0];
//  for(let i=1; i<numbers.length; i++){
//      console.log(large>[i])
//  }
let square:number
let a = [10, 20, 30, 40]
for(let i=0; i<a.length; i++){
    square = a[i]!*a[i]! // a[i]**2
    console.log("for loop",square)
}

for(let value of a){
   console.log("for of", value **2) // value*value
}

