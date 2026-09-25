class Car{
    brand :string
    model: string
    price: number

    constructor(brand:string, model:string,price:number){
        this.brand = brand
        this.model = model
        this.price = price
    }

    carinfo():void{
        console.log(`car brand: ${this.brand}, car model: ${this.model}, car price: ${this.
            price}`)
    }

}const cx = new Car("bmw", "BM2025", 45678)
console.log(cx.brand)
const cx1 = new Car("creta", "Cr20017", 4567890)
cx.carinfo()
