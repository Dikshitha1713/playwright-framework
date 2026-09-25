//let
// scope : block
let let2="JS"
{
    let let1 = 10
    console.log(let1);
    console.log(let2)
}
console.log(let2)
// reinitalization 
let2="diksha"
console.log(let2);

/*redeclaration is not there
let let1 =10;
let let1= 20;*/

/*Hoisting is not there
console.log(line21);

let line21="20"
line21="charlie"*/

// not mandatory to assign the value at the time of declartion 
let x
x=10;
console.log(x)

//Constant 
//scope : block 
const abc1 = "tscript"
{
    const abc1 = "charlie"
    console.log(abc1)
}
console.log(abc1)

/* No redeclare and No reiniatalization 
const abc = 87
const abc = 87 

const abc2 = 90
abc2 = 90*/

// no hositing 
console.log(let3)

const let3 = "startup"
// its mandatatory to assign the value during declarzation 
const abc
abc = 10 