// method overloading -- process to create diff fun with same name but diff parameters

function test(){
    console.log("function1")
}
function test(name:string){
    console.log("function2")
}
function test(name:string, age:number){
    console.log("function3")
}
test()
test("rahul")

// default parameter 
/*function test1(){
    console.log("title")
}*/

function test1(title:string="78", name:string="rahul"){
    console.log(title)
    console.log(name)
}
test1()
test1("qa")
test1("qa", "dishu")

function test2(title:string, name:string="rahul"){
    if(title == undefined){
        console.log(`ur name is ${name}`)
    }
    else{
        console.log(`ur title is ${title} and name is ${name}`)
    }
}
test2()
test2("qa")
test2(" ", "dishu")

function test3(title:string, name?:string){
    if(name == undefined){
        console.log(`ur title is ${title}`)
    }
    else{
        console.log(`ur title is ${title} and name is ${name}`)
    }
}
test3("ceo")
test3("qa", "dishu")

function test4(name:string,age:number, address?:string, job?:boolean){
    if ( age==undefined && address == undefined){
        console.log(`ur name ${name} `)

    }
    else if( age==24 && job == undefined){
        console.log(`ur age ${age} and job ${job} `)

    }
    else{
         console.log( `ur name ${name} and age ${age} and address ${address}  `)
    }
   
}

test4("diksha")
test4("diksha", 24, "bpt")
test4("diksha", 25, "bpt")

function test5(name:string, age:number, ...gift:any){
    console.log(name)
    console.log(gift)
}
test5("rahul", 67, "rest", 78, true, 5678)
