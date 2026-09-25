/*hooks - its a special type of the function

before all() 
before each()
test()
after each()
after all()
*/

import {test, expect} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log("before all")
})
test.beforeEach(async ()=>{
    console.log("before each")
})
test.afterEach(async ()=>{
    console.log("after each")
})
test.afterAll(async ()=>{
    console.log("after all")
})

test("title 1", async () =>{
    console.log("title 1")
})
test("title 2", async ()=>{
    console.log("title 2")
})
test("title 3", async ()=>{
    console.log("title 3")
})