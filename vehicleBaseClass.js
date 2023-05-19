class vehicle{
    constructor(brand,year,model,color,mileage){
        this.brand = brand
        this.year = year
        this.model = model
        this.color = color
        this.price = mileage
        this.passenger = 0
        this.speed = 0
        this.numberOfWeels = 0
        this.fuel = 0
        this.started = false
    }
    
}
start();{
    if(this.fuel < 0){
        console.log('oops, were out of fuel')
    }   else if(this.fuel > 1){
        console.log('getting started')
    }
}
accelerate();{
    if(this.fuel > 0){
        console.log(this.speed += 1)
    }   else{
        console.log('out of fuel')
        this.stop()
    }
}
slowDown();{
    if(this.fuel > 0){
    if(this.speed > 0){
        console.log(this.speed -= 1)
        this.fuel = this.fuel - 1
    } //i am up to here will finish tommorow//
    }
}