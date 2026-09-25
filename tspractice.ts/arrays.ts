/*arrays - non primitive dataype n consists of multiple datatypes 
syntax -- array literal
let/const arrayname:datatype[](optional) = (value1, value2,.............) */

//let a= 12, 34

let arrayname = [12, "fs", true, null,[12, 67, 89]]
console.log(arrayname)
console.log(arrayname[2])
console.log(arrayname[4])
console.log(Array.isArray(arrayname));


/*let array:number[]|string[]|boolean[] = [23,"hkl", true]
console.log(array)*/

/* array constructor -- new keyword
let/const arrayname = new array<datatype>[value1, value2, .....] */

let array1 = new Array<any>(10, 29)
console.log(array1);

let array2 = new Array(10, 34, 689 )
console.log(array2);

let array3 = new Array<any>("fs", true, null)
console.log(array3.length);
console.log(array3[2]);
console.log(Array.isArray(array3));

// how to fetch the value from array 
let i
let array4 = [10, 20, "disha", 'vinu', true, null, 40, 50, 0.75]
//console.log("value", array4[5])
console.log(array4.length);

for(i = 0; i<array4.length; i++){
   console.log(array4[i]);  
}

/* for of loop
for(declartion of arrayname){
code
} */
console.log("***********************************");

let array5 = ["for of", 10, 20, "disha", 'vinu', true, null, 40, 50, 0.75]
for(let element of array5 ){
    console.log(element);
    
}

let count = 0
for (let element of array5){
    count++
    console.log(element);
    if(count ==3){
        break
    }
}

// methods of array
let methods =[ "diksha", 10 , 20, true, null, "ts"]

/* push() -- add the elements at the last of the array 
arrayname.push(elemets) */

methods.push("pushmethod", true, 20, " ")
console.log(methods);

/* pop() -- remove the last element of the array -- no arguments 
arrayname.pop()*/

methods.pop()
console.log(methods)

/* unshift() -- add the elements at the 1st/ beginning of the array
arrayname.unshift(arguments)*/

methods.unshift("unshift", "1st", "array")
console.log(methods);

/* shift()-- removes the 1st element of an array
arrayname.shift()*/

methods.shift()
console.log(methods);

/* splice() -- whch accepts 3 diff parameters
arrayname.splice(startindex, deletecount, restparameter) 
start index = position wr u need to add/del the value in the array
deletecount = how many value do u need to delete
restparameter = the element u can add to the array */

// [ '1st', 'array','diksha', 10, 20, true,null,'ts','pushmethod', true,20]

methods.splice(3, 4, "adding", "splice")
console.log(methods);

methods.splice(6)// rest of the elements are removed from index 4
console.log(methods);

methods.splice(2, 1)
console.log(methods);

methods.splice(1, 0, "array", ...["arr1", 20, "arr2"])
console.log(methods);

/*slice() -- returns the position of an array
arrayname.slice(startindex?, endindex?) -- both are optional
startindex -- wr u want to start
endlindex -- wr u want to end the slice -- [endpoint -1] */

let methods1= ['1st', 'array','arr1', 20,'arr2', 'array','adding', 'splice', 'ts']

console.log("slice", methods1.slice(3, 6)); // last one [6-1]

console.log("slice", methods1.slice(0, 6));
console.log("slice", methods1.slice(5));
console.log("slice", methods1.length);
console.log("slice", methods1.length-1);
console.log("slice", methods1.slice(-5, 6));
console.log("slice", methods1.slice());
console.log("slice", methods1.slice(7, 2)); // 1st element < 2nd element
console.log("slice", methods1.slice(-7, -4));
console.log("reverse", methods1.slice().reverse());


/* indexof(element)- finds the poistion(index) of element in an array--1st occurance of element 
arrayname.indexof(element, startindex?)*/

console.log(methods1.indexOf("arr1"));
console.log(methods1.indexOf("array", 6));// element is not present aftr 6th index
(methods1.push(6, 0, 20, 20, 20))
console.log(methods1)
console.log(methods1.indexOf(20, 6));

/*lastindexof(element, startindex?) -> returns the index of the last accurance of the element 
from the array 
arrayname.lastindexof(element, startindex) */
// ['1st','array','arr1',20,'arr2','array','adding', 'splice', 'ts', 6, 0, 20, 20, 20]

console.log(methods1.lastIndexOf(20));
console.log(methods1.lastIndexOf(20, -13));
console.log(methods1.lastIndexOf("array", -11));
console.log(methods1.indexOf("array", -11));

/*concat-- mergers 2 or more arrays & returns the new array
arrayname.conact(array1, array2, ....) */

let a= [12, 67, 68]
let a1:any = ["fs", "ts", 'concat']
let a2 = a.concat(a1)
console.log(a2);
console.log(a.concat(a1));

/*join(seperator?)-- converts all the elements of array into string 
arrayname.join(seperator)*/

let date = [17, 3, 1999]
console.log(date.join( "/"));
let dob:any =[17, "mar", 199]
console.log(date.join( "-"));

/*to string - converts the elemets of array into strings 
arrayname.tostring() ---> it returns as normal string like 'a', 12, "hs" */

console.log(date.toString());
// error console.log(date.toString(" ")); coz of " "

/*includes- to check wharther the element is avaiable in the array or not 
arrayname.includes(elememt, startindex?) results in T/F*/
console.log(date.includes(17));
console.log(dob.includes("mar"));
console.log(dob.includes("3"));

// why anonymous and arrow function introduced ---

/* FOR EACH(FUN) -- inside the fun logic will be applied to each n every element of an array once
fun is used as parameters 
arrayname.foreach(funcytion(currentvalue, index?, arrayname?){code}) 
current value - represents the current value of the element 
index - rep the index of current element */

// display the elements along with index
let val:any = [10, "TS", "foreach", 20, 30, 40, 10]
for(i=0; i<val.length; i++){
    console.log(val[i], i);
}

for(let ind of val){
    console.log("1st num", ind, "indexno", val.indexOf(ind));  
    
}
console.log("************************************************************");

let va2:any = [10, "TS", "foreach", 20, 30, 40, 10, 20]
va2.forEach(function(z:any, index:any){
    console.log(z, index, )})

va2.forEach((z:any, index:any)=>console.log(z, index))

/*MAP - it will iterate over the element of an array &returns a new array basedon the condition
arrayname.map(function(currentvalue, index?, array?){} ) */

// get the sq of each element 
let square:number
let sq = [10, 20, 30, 40]
for(let i=0; i<a.length; i++){
    square = sq[i]!*sq[i]! // a[i]**2
    console.log("for loop",square)
}

for(let value of sq){
   console.log("for of", value **2) // value*value
}

let result = sq.map(function(num, index){
    return(num*num) 
})
console.log(result);

/* FLITER(fun) - it will ierate over the each n every element of an array and creates a new array
with the elements that passes the condition implemented by the function 
arrayname.fliter(fun(currentvalue, index?, array?){code}) */

let diksha = [{category:"fashion", diksha:20000},{category:"mobiles", diksha:900000},
    {category:"electronics", diksha:40000}, {category:"toy", diksha:100000}, 
]
 let res= diksha.filter(function(price:any){
    return price.diksha>90000
 })
console.log(res);

let category = [{category:"fashion", diksha:20000},{category:"mobiles", diksha:900000},
    {category:"electronics", diksha:40000}, {category:"toy", diksha:100000}, ]
let res1= category.filter(function(price:any){
    return price.category== "toy"
 })
 console.log(res1);
 
let filt =[1,2,3,4,5,6,7,8,9] 
let r = filt.filter(function(even){
    return even %2==0
})
console.log(r);

let r1 = filt.filter(function(odd){
    return odd %2!=0
})
console.log(r1);

/*REDUCE(FUN)-- it will iterate over the element of an array & return a SINGLE VALUE based 
on the condition that v wrt inside the fun 
arrayname.reduce(function(acumulator, currentvalue, indes?, array?), initialvalue) */

// sum of all the elements of the array
let sum =0
let s:any = [10, 20, 30, 40, 50]
for(i=0; i<s.length; i++){
    sum = sum + s[i]
}
console.log(sum);

let res2= s.reduce(function(sum1:any, adds:any){
    return sum1+adds
},0)
console.log(res2);

/* some(func)-- it will check any of the element will pass the condition which is 
implemented in the function, if yes then returns true 
arrayname.some(function(currentvalue, index, array){}) */
//let s:any = [10, 20, 30, 40, 50]
let r3= s.some(function(current:any){
    return current %7 ==0
})
console.log(r3);
let r4= s.some(function(current:any){
    return current %2 ==0
})
console.log(r4);

/* every(func)-- it will check each n every the element of an array ie will pass the condition
 which is implemented in the function, if yes then returns true 
arrayname.every(function(currentvalue, index, array){}) */

let r5= s.every(function(current:any){
    return current %4 ==0
})
console.log(r5);