//if condition 
// check if charcater is uppercase
let char:string = "DIKSHA"
if(char=== char.toUpperCase()){
console.log(`${char} the given char is uppercase`)
}

let char1:string = "diksha"
if(char1 === char1.toLowerCase()){
console.log(`${char1} the given char1 is lowercase`)
}

// check if number is a multiple of 10

let num:number = 50
if(num%10==0){
console.log(`${num} is divisble by 10`)
}

let num1:number = 27
if(num1%10!=0){
console.log(`${num1} is not divisble by 10`)
}

//if else

// check if a person is a teenager(age btw 13 n 19)

let age : number = 57
if (age>=13 && age<=19){
    console.log(`${age} the person is a teenager`)
}
else{
    console.log(`${age} the person is not a teenager`)
}

// compare 2 numbers and print the largest 

let D :number= 25, E:number= 117 
if (D>E){
    console.log( `${D} is largest`)
}
else{
    console.log(`${E} is largest `)
}

// check if a number is +ve, -ve, or 0

let number = -877
if (number > 0 ){
    console.log("number is postive")
}
else if (number<0){
    console.log("number is negative")
}
else{
    console.log("number is 0")
}

// check if a person is elligible for a senior citizen discont (age>=60)

let senior = 20
if(senior >=60 ){
    console.log(`age ${senior} the person is eligible for discount`)
}
else{
    console.log(`age ${senior} the person is not eligible for discount`)
}

// if-else-if (nested if else)

//check if a number is positive and even 

let S = 20
if (S >0 && S%2==0){
    console.log(`${S} the number is +ve n even`)
}
else if (S<0 && S%2!=0){
    console.log(`${S} the number is -ve and odd`)
}
else{
    console.log("invalid num")
}

// check if a charcter is an uppercase vowel -- vowel a, e, i, o , u

let vowel:string = 'A'
if (vowel === vowel.toUpperCase()){
  if(vowel === 'a' || vowel==='e' || vowel === 'i' || vowel === 'o' || vowel ==='u'){
    console.log(`${vowel} is an upper case vowel `)
  }
  else{
    console.log(`${vowel} is uppercase consonant`)
  }
}
else{
    console.log("lowercase")
}

//find the largest of 3 numbers

let x= 20, y =78, z=119
if (x>y && x>z){
console.log(x, " the x is largest")
}
else if ( y>x && y>z){
    console.log(y, "the y is largest")
}
else{
    console.log(z, " the z is largest")
}

// check if a number is a multiple of 5 n 10 

let num2 = 76
if ( num2%5==0 && num2%10==0){
    console.log(`${num2} is mul of both numbers`)
}
else if( num2%5!=0 || num2%10!=0){
    console.log(`${num2} is  mul of one number`)
}
else {
    console.log(`${num2} is  mul of nither number`)
}

//check if a charcter is a vowel or consonant 

let char2:string  = "r"
if (char2=="a" ||char2== "e"||char2=="i" || char2=="o"|| char2=='u'){
    console.log(`${char2} is an vowel`)
}
else{
    console.log(`${char2} is an consonant`)
}

//check if a number is divisible by both 2 and 3

let numb = 6
if (numb %2 ==0 && numb %3==0){
    console.log(`${numb} is divisible by both`)
}
else{
     console.log(`${numb} is not divisible by both`)
}

//switch case

// print the corresponding month for the given month numnber

let month = 3
switch(month){
    case 1 : console.log ("month is jan "); break;
    case 2 : console.log ("month is feb "); break;
    case 3 : console.log ("month is mar "); break;
    case 4 : console.log ("month is apr "); break;
    case 5 : console.log ("month is may "); break;
    case 6 : console.log ("month is jun "); break;
    case 7 : console.log ("month is jul "); break;
    case 8 : console.log ("month is aug "); break;
    case 9 : console.log ("month is sep "); break;
    case 10 : console.log ("month is oct "); break;
    case 11 : console.log ("month is nov "); break;
    case 12 : console.log ("month is dec "); break;
    default : console.log ("invalid month")
}

//print the season based on the month number 

let months = 15
switch(months){
    case 12:
    case 1:
    case 2:
        console.log("spring")
        break;

     case 3:
    case 4:
    case 5:
        console.log("summer")
        break;

      case 6:
    case 7:
    case 8:
        console.log("rainy")
        break;   

       case 9:
    case 10:
    case 11:
        console.log("winter")
        break;     

   default:{console.log("no season") }     
}

// while loop 
// to calculate the sum of 1st 10 natural numbwers

let A = 0
let sum =A
while(A<=10){
    sum+=A
    A++
}
console.log(sum, "sum of natural num")  

let A1= 1
let sum1 =0
while(A1<=10){
    sum1+=A1
    A1++
}
console.log(sum1, "sum of natural num")  

// to calculate the factoraial of given number 

let Num =5
let factorial =1
let i = 1
while(i<=Num){
     factorial= factorial*i
     i++
}
console.log(factorial)

// to reverse the given number 

let NUM = 123 // intialize the num
let reverse = 0 // it shuld be empty 
while(NUM>0){ //123>0
    let digit = NUM%10 //123%10 = reminder 3
    reverse=reverse*10+digit // 0*10+3
    NUM = Math.floor(NUM/10) // 123/10 == 12.3 --remove decimal 
}
console.log("reverse =", reverse)

let Dee = 1724
let rev = 0
while(Dee>0){
    let dig = Dee%10
    rev= rev*10+dig
    Dee = Math.floor(Dee/10)
}
console.log("reverse1 =", rev)

// to find the largest digit in a given number 

let num3= 27958
let larg =0
while(num3>0){
    let digi = num3%10
    if(digi>larg){
        larg= digi
    }
    num3= Math.floor(num3/10)
}
console.log(larg)

let val = 88754
let largest = 0
while(val>0){
    let digits = val%10
    if(digits>largest){
        largest=digits
    }
    val=Math.floor(val/10)
}console.log(largest)

// to check a number is a palindrome 

let Number = 121
let revers = 0
let original = Number
while(Number>0){
    let digi1= Number%10
    revers = revers *10 +digi1
    Number = Math.floor(Number/10)
}
if(original==revers){
console.log(original, "palindrome")}
else{
console.log(original, " not palindrome")}

// do-while 

// to print numbers frm 1 to 10 using do while 

let Num1= 1
do {
    console.log("print nos",Num1)
    Num1++
}while(Num1<=10)

// FOR LOOP

// print multiples of 5 from 5 to 500 

let mul = 5
for(let D=1; D<=100; D++){
    mul = D*5
    console.log(mul)
}
 
// print prime no btw 1 and 50 


for(let P=2; P<=50; P++){ // how many time the no 2 will get divide 
    let count = 0
  for(let prime = 1; prime<=P; prime++){   // 2%1... 3%1...
    if(P%prime==0){    // 2%1 ==0... 3%1!=0... (2 by 1, 2)(4 by 1, 2, 4)
        count++ } // for 2 = 2, for 4 = 3
    }
if (count == 2){ // if 2 ==2, 3==2
    console.log(P)
 }
}

//sum of even nums btw 1 to 20

for(let nos = 1; nos<=20; nos++){
    if(nos%2==0){
        console.log("print even nos", nos)
    }
}

//sum of odd nums btw 1 to 20

for(let nos = 1; nos<=20; nos+=2){
    console.log("print odd nos", nos)
}

// print table of 7 from 7 to 10 
let MUL = 7
for(let tab=1; tab<=10; tab++){
   MUL = tab *7
   console.log(MUL)
}

//print nums divisible by 3 n 5 from 1 to 100


for(let no=1; no<=100; no++){
    if(no%3==0 && no%5==0){
        console.log("nos div by 3 n 5",no)
    }
}

// count no of digits in a number 

let count = 0
for (let no = 23653; no>0;){   
  no= Math.floor(no / 10)
     count++

}console.log(count ,"digits count")

// find sum of num
let SUM =0
for(let no = 1; no<=50; no++){
    SUM = SUM +no
    no++
}console.log(SUM)
  
// find sum of digits in a num

let SUM1= 0                     
for(let dig=2345; dig>0;){
    let last = dig%10              //% 10 → gets the last digit
    SUM1= SUM1+last               //SUM1 + last → adds that digit
    dig = Math.floor(dig / 10)    //Math.floor(dig / 10) → removes the last digit
    
} console.log(SUM1)               //dig > 0 → keeps the loop running

//print multipless of 7 btw 1 and 100 
for(let no=1; no<=100; no++){
   if(no%7==0){
    console.log(no)
   }
}
//cal the sum of all even nos frm 1 to 200

let sum2 = 0
for(let no=2; no<=200; no+=2){
   sum2= sum2 +no
} console.log("sum of evn nums", sum2)

//print the odd no frm 1 to 20 using for loop use the continue stat to skip even no

for(let no=1; no<=20; no+=2){
    if(no%2==0){
        continue;
    }console.log(no)
}

//print nos 1 to 30, but skip nos that r multiples of 5 using while loop

let No= 1
while(No<=30){
   if(No%5==0){
      No++
    continue;
   } console.log("Skip mul of 5s", No)
   No++
}

//print even nos 1-10 using forloop use brk stment to exit the loop asa u find the 1st evenno 

for(let no =1; no<=10; no++){
    if(no%2==0){
        break;
    }console.log("brk", no)
}

// for(let no =2; no<=10; no+=2){
//     if(no%2==0){
//         break;
//     }console.log("brk", no)
// }

//print nos 1 to 30, exit loop whn u find a no >15 using brk within whileloop

let loop = 1
while(loop<=30){
    if(loop>15){
  
        break;
    }console.log("brk aftr 15", loop)
    loop++
}
