class Bankaccount{
    accountHolder : string
    balance : number

    constructor(accountHolder:string, balance:number){
        this.accountHolder = accountHolder
        this.balance = balance
    }
     accountHolderinfo():void{
        console.log(`Accountholder: ${this.accountHolder}, HolderBalance: ${this.balance}`)
    }

    deposit(amount:number):void{
    this.balance = this.balance + amount
    }
    withdraw(amount:number):void{
        this.balance = this.balance - amount
    }
    checkbalance():void{
        console.log(`balance: ${this.balance}`)
    }
}
const accholder = new Bankaccount("Diksha", 5000)
accholder.accountHolderinfo()
accholder.deposit(2000)
accholder.checkbalance()
accholder.withdraw(1000)
accholder.checkbalance()