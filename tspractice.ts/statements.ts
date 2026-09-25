// statements -- is a process tat allows us to execute diff block of code for diff conditions

/* if statement 

if (condtion){
//code
}
*/

/*the following statement illustrates how to use the if statement to increase the counter 
variable if its value is less than the value of the max constant: */

const max = 100 
let counter = 10

if (counter<max){
    counter++
    console.log(counter)
}
console.log("***************************")

const max1 = 100
let counter1 = 100
if (counter1<max1){
    counter1++
    console.log("line26", counter1)
}

const maxage = 18 
let age = 20
if(age >maxage){
    age--
    console.log(age)
}

const marks = 200
let s1 = 100 
let s2 = 50
let s3 = 50
if(s1+s2+s3 == marks){
    s1++ && s3++
    console.log("print total", s1, s3)
    console.log(" print sum", s1+s2+s3 )
}

/* if else statement 

if (condition)
{
condition is true then IF will be executed
}
else
{
    condtion is false then ESLE will be executed
} */

const maxx = 100 
let counterr = 100

if (counterr<maxx){
    counterr++
    console.log(counterr)
}
else {
    counterr = 0
    console.log(counterr)
}

const maxage1 = 18 
let age1 = 20
if(age1 <maxage1){
    age1--
    console.log(age1)
}
else{
    age1++
    console.log(age1)
}

const markss = 300
let S1 = 100 
let S2 = 50
let S3 = 50
if(S1+S2+S3 == markss){
    S1++ && S3++
    console.log("print total", S1, S3)
    console.log(" print sum", S1+S2+S3)
}
else{
    console.log("sum is not equal to const marks")
}

/* if else if 

if(condition1){
if condition1 is true then cond1 will be executed
}
else if(cond2){
if cond2 is true then cond2 will be executed
}
else
{
    if both condition fales then defalut will be executed
} */

let discount:number
let itemcount = 12

if (itemcount >11){
    discount = 50
}
else if(itemcount <11){
    discount = 15
}
else{
    discount = 0
}
console.log("you got", discount, "%discount")

let discounts:number
let itemcounts = 8

if (itemcounts>0 && itemcounts <=5){
    discounts = 5
}
else if (itemcounts>5 && itemcounts <=10){
    discounts = 10
}
else{
    discounts = 15
}
console.log("u got", discounts, "%discounts")

const marks1 : number = 10
let grade : string
if(marks1<35){
    grade = 'failed'
}
else if (marks1 >=35 && marks1 <50){
    grade = "e"
}
else if (marks1 >=50 && marks1 <70){
    grade = "d"
}
else if (marks1>=70 && marks1 <80){
    grade = 'c'
}
else if (marks1>=80 && marks1 < 90){
    grade = "b"
}
else if (marks1 >=90 && marks1 <=100)
{
    grade = "a"
}
else{
    grade = "invalid"
}

console.log("ur grade", grade )


let mar = 20
if (mar>= 90){
    console.log("garde A")
}
else if(mar>=80){
    console.log("garde b")
}
else if(mar>=70){
    console.log("garde c")
}
else if(mar>=50){
    console.log("garde d")
}
else if(mar>=35){
    console.log("garde e")
}
else{
    console.log("ur marks is less than 35", "failed")
}

// switch
console.log("**************************")

let targetid = "btnnew"

switch(targetid){
    case " btnupdate":
        console.log("update")
        break;

    case "btnnew":
        console.log("new")
        break;
    case "btndelete":
        console.log("delete")
        break;
default :
console.log("no action")
}

let browser= "safari"
switch(browser){
    case " chrome ":
        console.log(" chrome broswer")
        break;

     case " firefox ":
        console.log(" firefox broswer")
        break;
    case " linux ":
        console.log(" linux broswer")
        break;
    default:
        console.log("invalid broswer")    
}

let day = 5
switch(day){
    case 1 :
        console.log("sunday")
    break;
    case 2 :
        console.log("monday")
    break;
    case 3 :
        console.log("tuesday")
    break;
    case 4 :
        console.log("wed")
    break;
    case 5 :
        console.log("thru")
    break;
    case 6 :
        console.log("friday")
    break;
    case 7 :
        console.log("sat")
    break;
    default:
        console.log("invalid day")
}

let Day : string = "tue"
switch(Day){
    case "monday":
    console.log("day 1")
    break;
    case "tue":
    console.log("day 2")
    break;
    case "wed":
    console.log("day 3")
    break;
    case "thru":
    console.log("day 4")
    break;
    case "fri":
    console.log("day 5")
    break;
    default:
        console.log("print day 6 is sat")
}

// WAP to print num of days in a given month n year 

let month : number = 2
let year : number = 2026
switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days")
        break;
    case 4 :
    case 6 :
    case 9 :
    case 11 :
    console.log("30 days")
        break;
    case 2:
       if ((year %4 == 0 && year %100 != 0) || (year %400==0)){
        console.log("29 days, leap year")
       }
       else{
         console.log("28 days, NOT leap year")
       }
       break;
       default:
        console.log("invalid month")
}

/* ternary operator (?:) -- similar to if esle 
condition ? execute this IF true : execute this IF false */