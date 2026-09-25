//operators -- symbol -- pefrome some operations on the variables 

// arthimatic 

let a = 20 
let b = 30 

console.log("add", a+b)

let a1 = "ts"
let a2 = "js"
console.log("add", a1+a2)
// merge the 2 string 
let b1 : number|string = 10
b1 = "abc"
let b2 = 15
console.log(b1+b2)

// sub 
console.log("sub", a-b)
console.log("sub", b-a)

//mul
console.log("mul", a*b)
console.log("mul", b*a)

//div 
let d = 20 
let d1 = 3
console.log("div", d/d1)
console.log("div", d1/d)

// moduls 
console.log("mod", d%d1)
let d2 = 10
let d3 = 3
console.log("mod", d2%d3)

// exponentials 
let z = 3
let z1 = 4
console.log("power of", z**z1)
console.log("power of", z1**z)

/* increment (++) 
pre increment (++a) first we will increament and perfrome the action 
post increment (a++) first perfrme the action and increment*/

let g = 8 
console.log("preI", ++g)
g = -6
console.log("preI", ++g) //g bcomes -5

console.log("postI", g++) // prints -5 then g becomes -4 
console.log("posti", g++) // prints -4 then g becomes -3
console.log("posti", g++) //prints -3 then g becomes -2  sooo value of g = -2

let g1 = 7
console.log("post", g1++)
console.log("post", g1++)
console.log("post", g1++)
console.log("post", g1)
console.log("post", g1)

/* decrement  (--) 
pre decrement (--a) first we will decrement and perfrome the action 
post decrement (a--) first perfrme the action and decrement*/

let g2 = 15 
g2 = 25 
console.log("preD", --g) // value of g = -2 --> -2-1 = -3

console.log("preD", --g2) 
console.log("preD", --g2) 
console.log("postd", g2--) 
console.log("postd", g2--) 

// comparison oeprators -- compares 2 values n returns the result in boolean 

// Equal to (==)

let dishu = 10 
let dishu1 = 20 
console.log(dishu == dishu1)

let s = -789
let s1 = -789
console.log(s == s1)

let dis2 = "10"
let diss = 10 
console.log(dis2 == diss) // this we can convert coz both are numeric values
console.log("line92",dis2 + diss)

/* check the value not data type 
if 1 variable is num n 1 is string then implicitly it will convert num to string --- "type 
coercion" ----- tyepe infernce*/

let dis = 10 
let dis1 = "DS"
console.log(dis == dis1) //this we can not convert coz 1 value is numeric n another is string
console.log("line102", dis + dis1) 


/*if we want to convert explicityly from string to number then we have to do "type 
conversion"---- type annotataion */


let var1 = 20 
let var2  = Number("20")
console.log(var1 == var2)

let varr = 10
let varr1 = Number("js")
console.log(varr == varr1)

// not equal to 

console.log("line119",dishu != dishu1)
console.log(s != s1)

console.log(var1 != var2)
console.log(varr != varr1)

// Strict equality (===) checks VALUES & DATATYPE of the variable 

console.log(dishu === dishu1)
console.log(s === s1)
console.log(var1 === var2)
console.log(varr === varr1)
console.log("line92",dis2 === diss)

let ap = 10 
let ap1 = "10"
console.log(ap===ap1)

let p = 10 
let p1 = Number("10")
console.log(p===p1)

let p2 = String("js")
let p3 = Number("10")
console.log(p2 === p3)

// strictly in quality (!==)
console.log("line135", ap!==ap1)
console.log("line139",p!==p1)

let m = 56 
let m1 = 56 
let m2 = 76
console.log("ns",m !==m1)
console.log("ns",m !==m2)

let Var = "String"
let Var1 = "string"
console.log("line 155", Var == Var1)
console.log("line 156",Var === Var1)

/* diff btw = , ==, === --------- 
= assigning the value to the variable ,,, == comapre the value of the varibale ,,,
=== compares the value and the datatype of the variable */

// greater than (>), less than (<)

let o = 56
let o1 = 100 
let o2 = "10"
let o3 = "11"

console.log(o>o1)
console.log(o<o1)
console.log(o<o2)
console.log(o3<o2)

// greater than or equal ( 2 operators )

console.log(o>=o1)
console.log(o<=o1)
console.log(o<=o2)
console.log(o3<=o2)

/* logical ---> validates 2 diff expression/ conditions -- return in boolen 
 && -- both conditions shuld be true, || --- any 1 condition true -- res true, ! -- reverse 
 the result */

 let y = 10>4
 let y1 = 20>4
 let y2 = 4>67
 let y3 = 0.67>=789
 console.log("add(&&)", y&&y1)
 console.log("add(&&)", y&&y2)
 console.log("add(&&)", y&&y3)
console.log("add(&&)", y3&&y1)

console.log("or(||)", y||y1)
 console.log("or(||)", y||y2)
 console.log("or(||)", y||y3)
 console.log("or(||)", y3||y2)

 console.log("not (!)", !(y))
 console.log("not (!)", !(y1))

 // assignment (=) assigning the value to the variables 

 let val = 0.68
 let char = "fghjk"
 let boolean = "T/f"
 let Null = null 









