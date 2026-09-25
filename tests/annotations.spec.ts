/*
annotations - which will control the testcases, test execution 
there r diff types 
test.skip() - it will skip the testcase execution 
test.fail() - it will check wheather testcase is failed, it will execute the testcase
test.fixme() - it says there is an issue and working to fix it 
test.slow() - it will delay the testcase excetution at file level
test.only() - it will make sure a particular testcase get executed among all other testcases
test.describe() - it will grp the testcases and help in generating the report
test.describe.config()- 
*/

import{test, expect} from '@playwright/test'

test.skip("test1", async () =>{
    console.log("test1")
})


test.fail("test2", async () =>{
    console.log("test2")
})

test.fixme("test3", async ()=>{
    console.log("test3")
})

test("test4", async() =>{
    test.slow()
    console.log("test4")
})

test.describe("my 1st test suite", () =>{

test("test5", async ()=>{
    console.log("test5")
})

test("test6", async() =>{
    console.log("test6")
})

})



