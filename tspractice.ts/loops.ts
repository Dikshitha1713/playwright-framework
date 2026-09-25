// while --print 10 ...1

let i = 10
while(i>=1){
    console.log(i)
    i--
}
console.log("******************************")
// print even num frm 1 to 50
for (let a=2; a<=50; a+=2){
    console.log("even number", a)
}

for(let i = 1; i<=50; i++){
    if(i%2==0){
        console.log("print even num from 1 to 50", i)
    }
}

console.log("******************************")
// print odd num frm 1 to 50
for (let a=1; a<=50; a+=2){
    console.log("odd number", a)
}

for(let i = 1; i<=50; i++){
    if(i%2!=0){
        console.log("print odd num from 1 to 50", i)
    }
}
console.log("******************************")
/*for(let i = 2; i<=50; i++){
    if (i!%2){
        console.log("prime number", i)
    }
    
} -- wrong */

/*loops -- it executes block of code multiple times 
FOR LOOP ==
for (initialization; Condition; inc/dec){
block of the code
break}

WHILE LOOP==
initialization
whlie(condition){
code
inc/dec
}

DO WHILE==
initialization
do{
code
inc/dec}
}
whiel(condition) */

for(let i=1; i<=6; i++)
{
    console.log("print the numbers", i)
}

let j= 6
while(j>=1){
    console.log("print number from 6 to 1", j)
    j--
}

let k = 6
do{
    console.log("print the num", k)
    k--
}
while(k<=1)

let cartitem =2
while(cartitem <=5){
    console.log("added 1 item", cartitem)
    cartitem++
}
console.log("cart has 5item")

let validatedpassword = "admin123"
let enteredpassword = " "
do
{
 enteredpassword = "admin123";
}
while( enteredpassword != validatedpassword);
console.log("access gained")

console.log("********************extra*******")

// print numbers frm 1 to 100 ---------------------- FOR LOOP
console.log("**************FOR LOOP*********************")

for(let x=1; x<=100; x++){
    console.log("numbers from 1 to 100", x)
}

// print numbers frm 100 to 1
for(let y=100; y>=1; y--){
    console.log("numbers from 100 to 1", y)
}

// find the sum of numbers from 1 to 100
let sum = 0
for(let z=1; z<=100; z++){
    sum+=z
}
console.log("sum=", sum)

/*print the multiplication table of 7 

let mul = 7
for(let w=1; w<=10; w++){
    if(p = mul*w){  // p has not declared
    console.log(j)
    }          
} */

let mul = 7
for(let w=1; w<=10; w++){
    console.log("line125", mul*w)
    }          


let multi = 5
for(let r=1; r<=10; r++){
    console.log(`${multi}*${r}=(${multi*r})`)
}

let mult = 9 // g<+10 -- same as g<10 -- +ve 10
for(let g=1; g<+10; g++){
    console.log(`${mult}*${g}=(${mult*g})`)
}

// print a sq of num 1 to 10
let square
for(let h=1; h<=10; h++){
     square = h*h
        console.log(square)
    }

// print a cube num 1 to 10
let cube
for(let h1=1; h1<=10; h1++){
     cube = h1*h1*h1
        console.log("print", cube)
    }
// print all numbs divisible by  5 from 1 to 100

for(let q=1; q<=100; q++){
    if(q%5==0)
        console.log(q)
}

for(let q=5; q<=100; q +=5 ){
    console.log("print",q)
}

// print prime numbers frm 1 to 50
for(let s=2; s<=50; s++){
    let isprime= true;

    for(let s1=2; s1<s; s1++){
        if(s%s1==0){
            isprime = false
            break;
        }
    }
    if (isprime){
        console.log(s)
    }
}

console.log("***************** while loop*********************")

// keep printing numbers untill 20 

let K=0
while(K<=10){
    console.log("values", K)
    K++
}

// add items to a cart untill there are 7 items 

let item = 3
while(item<=7){
    console.log(" add", item)
    item++
}

// print numbers from 10 to 1
let J= 10
while(J>=1){
    console.log(J)
    J--
}

// find the sum of numbers from 1 to 10 

let D = 1
let total = 0
while(D<=10){
    total += D
    D++  
}
console.log(total)

console.log("***************** DO while loop*********************")

// print numbers from 1 to 10 

let Q = 1
do{
    console.log(Q)
    Q++
}
while(Q<=10)

// print even nums from 2 to 20 

let R = 2
do{
    console.log("even", R)
    R+=2
}
while(R<=20)

// print odd nums from 1 to 19

let R1 = 1
do{
    console.log("odd", R1)
    R1+=2
}
while(R1<=20)

//keep adding rs 100 untill the wallet reaches rs 1000
let R2 = 100
do {
    console.log("wallet", R2)
    R2+=100
}
while(R2<=1000)

// keep entering a password untill it is correct

let password
do {
    password = "1234"
}
while(password!="1234")
console.log("password is correct")