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
    }   else{
        this + 'has stoped moving'
    }
    }
}
stop();{
    this.started = false
}
drive();{
    accelerate()
}
brake();{
    slowDown()
}
typeOfVehicle(wheels);{
    if(this.numberOfWeels == 8 && wheels == 8){
        console.log(this.model + '' + this.make + 'is a truck')
    }   else if(this.model == 4 && wheels == 4){
        console.log(this.model + '' + this.make + 'is an car')
    }   else if(this.numberOfWeels == 2 && wheels == 2){
        console.log(this.model + "" + this.make + 'is a bike')
    }   else{
        console.log('unknown type of vehicle')
    }
}