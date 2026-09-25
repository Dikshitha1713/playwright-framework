/*numbers ---- typescript --- datatype is optional 
Syntax 
keyword(var/let/const)variable = value -- js
keyword(var/let/const)variable : datatype = value -- ts*/

let num = 10
console.log(num)

let num1 : number = -56789
console.log(num1)

let num2 :number = 899.45678
num2 = -45678
console.log(num2)

console.log(typeof num1)
console.log(typeof num2)

/*let num2 :number = 899.45678 here explicitly providing the data type --- typr annotation
let num2  = 899.45678 here depending upon the value of the variable automatically identifie
the type of the variable --- type interfrences 
typeof -- it is a operator which is used to know the datatype of the assigned value to the variable*/

/*string -- combination of charaters -- 3 ways to declare the string 
('string literal', "string literal", `template literal`)*/

let singlequote = '10'
let singlequote1 = 'nami'
singlequote1 = 'v'

console.log(singlequote)
console.log(typeof singlequote)

console.log(singlequote1)

let double : string= "5678"
let double1 : string= "hello world"
double1 = "this is typescrip n javascript, 10, 20"

console.log(double)
console.log(typeof double1)

console.log(double1)

let backtick = `im tryng to learn ts n js as soon as possible 
coz i need to seek good understading abt it `

console.log(backtick)
console.log(typeof backtick)

let backtick1 : string = `werdtfyguhicfgvhbjnkmerdtfygu
dfgyhuijdfgvhbjnkmgvhbjn`

console.log(backtick1)

let myname = `hi im dikshitha`
let myage = `my age is 27 ${myname}`
console.log(myage)

let myself = `dikshitha, from bpt `
let age = `im around 27 and completed BE`
let data = `this is my data ${myself},${age}`
console.log(data)
console.log(typeof data)

let myage1 = "my age is 27 ${myname}"
console.log( myage1)

//boolen -- true/false-- used while making statements, decisions, conditions

let isactive = true
let loggedof = false
console.log(isactive)
console.log(typeof isactive)
console.log(loggedof)

// null -- used to represent the absence of the value 

let emptyvalue :null = null
let emptyvalue1 = null 
console.log(emptyvalue1)
console.log(typeof emptyvalue1)

emptyvalue1 = 10
console.log(emptyvalue1)

// unidefined -- unintentional absence of the value 

let undefinedvalue = undefined
console.log(undefinedvalue)
console.log(typeof undefinedvalue)

undefinedvalue = 10
console.log(undefinedvalue)

let place 
place = .5678
console.log(place)
console.log(typeof place)

//TS -- union --- combinations of the diff values 

let unionvalue : Number|string = 10 
unionvalue = " its a number "
console.log(unionvalue)

let b : number|string|boolean = 17
b = 'its my bday'
//b = true 
console.log(b)

//any -- it accept any kind of datatypes 
let value : any = 879.80
value = 'hello'
value = true 
value = undefined
value = 'd'
console.log(value)