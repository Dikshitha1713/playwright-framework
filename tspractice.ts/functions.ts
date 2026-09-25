//functions-- block of code which perfrme some action 

/* name function/function declaration -- whch has name in a function 

function namefunc(paramter:datatype, parameter1:dataype):return{
block of code
return}
namefunc(argument, argument1)*/

// create a function that divides the 1st element by the second element.

function funname(E:number ,F:number){
    return E/F
}
const value=funname(8,2)
console.log(value)

function welcome(){
    console.log("welcome to the nxtgen")
}
welcome() // calling function

function welcme(name:string){
    console.log("hello" + " " + name + " " + "welcome to the nxtgen")
}
welcme("disha")// function argument 

function welcm(){
    return " welcome to nxtgen"
}
let print = welcm()
console.log(print) // return

function newfun(A:number,B:number,C:number){
    return A*B*C
}
const result = newfun(10,20,30)
console.log(result)

function newadd(a,b){
    return a+b;
}
console.log(newadd(34,78))

// named function 

// parameterized and non returing 

function functionsname(k :number, k1:any, k2:string){
 console.log(k+k1+ "", + k2)
}
functionsname(15, 45, "76" )

// parameterized and returing 

function funname1( s : string, s1: number, s2:any){
    return s+s1+s2
}
let result1 = funname1( "hello" + " ", + 40 , + 'myage')
console.log(result1)

// non parameterized and non returing 

function greet(){  //its not returing anything so void-- n its not mandatory to give return DT
    console.log("welcome to TS")
}
greet()

// non parameterized and  returing 

function greeting(){
    return("welcome to jS")
}
console.log(greeting())

/* method over loading is not possible here
function greet(){
    console.log("welcome to TS")
}
greet()



function greet(){
    return("welcome to TS")
}
console.log(greet()) */

/* anonymous func-- it dont hv name 
syntax
let/const variable = function(parameter : datatype): return datatype{
code
}
varibale(arugment) */

const val = function(a:number, b :number){
    return a+b
}
console.log(val(10, 30))

/* this we cant in return only 1 type will be considered
const val = function(a:number, b :string){
    return a, b
}
console.log(val(10, 30))  */

// call back fun

function add2(a: number, func : Function){
    return func
}
let res = add2(10, async function(){})
console.log(add2)

function add3( fun:Function){
    console.log(fun("hellooo", 67))
}
add3(function(a:number, b:number){
    return a+b
})

add3(function(a:string, b:string){
    return a+b
})

function add4(a:number, b, c:Function){
    console.log(a-b-c(98, 54))
}
add4(.0757, .74, function(b1:number, b2:number){
    return b2/b1
})

function name1(a:Function){
    console.log(a())   // not denfied the value 
}
name1(function(){
    console.log("call back func")
})

name1(function(){
    console.log("another call back func", String)
})

function name2(a:Function){
    a()   // not denfied the value 
}
name2(function(){
    console.log("no defined ")
})

function name(a:Function){
    console.log(a())
}
name(function(){
    return "welcomeeee"
})


// arrow fun =>

/*
let/const variable = (parameters)=> {
code
}
variable(arguments)

single line code 

let/const variable = (parameters)=> (arguments) */

let val1 = (a:number, b:number, c:number)=>(a+b+c)
console.log (val1(24,67,86))

const val2 = (a:Function)=>{
 console.log(a(98,66))
}
val2(function(b:number, c:number){return c-b})


console.log("**********************Named func***********")

function nam(a:string){
    console.log(a)
}
nam("hello world")

function mynam(a:string){
    console.log("myname",a)
}
mynam("diksha")

function add(a:number,b:number){
    console.log(a+b)
}
add(20,78)

function div(a:number,b:number){
    console.log(b/a)
}
div(20,78)

// function test(name:string, age?:number){
//     name()
// }
// test (name(){ console.log("rahul")} )


