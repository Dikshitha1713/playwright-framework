class Employee{
    empname:string
    empid :number
    empage : number
    private empsal :number
    readonly offer : number
    static company = "tcs"

    constructor(name:string, id:number, age:number, sal:number){
        this.empname = name
        this.empid = id
        this.empage = age
        this.empsal = sal
        this.offer = 10000   
    }
    empinfo():void{
        console.log(`Employee name: ${this.empname},Employee id: ${this.empid}, Employee age:
            ${this.empage}, Employee sal: ${this.empsal}, offer: ${this.offer}`)
    }
    static displaycompanyname(){
        console.log(Employee.company);
    }
}
const emp = new Employee("joe", 1, 24, 10000)
console.log(emp.empname)
const emp1 = new Employee("dii",2,25, 20000 )
console.log(emp1.empage)

emp.empage = 30
console.log(emp.empage)
Employee.displaycompanyname()
emp.empinfo()
