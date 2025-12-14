class animal
{
    constructor(name,age)
    {
        this.name = name
        this.age = age
    }
    move(speed)
    {
        console.log(`this ${this.name} move at a speed of ${speed}`)
    }


}
class rabbit extends animal
{
    constructor(name,age,RunSpeed)
    {
        super(name,age)
        this.RunSpeed = RunSpeed
    }
    run()
    {
        console.log(`it runs at a speed of ${this.RunSpeed}`)
        super.move(this.RunSpeed)
    }
}
class fish extends animal
{
    
    constructor(name,age,SwimSpeed)
    {
        super(name,age)
        this.SwimSpeed = SwimSpeed
    }
    swim()
    {
        console.log(`it swims ata speed of ${this.SwimSpeed}`)
        super.move(this.SwimSpeed)
    }
}

class hawk extends animal
{
    constructor(name,age,FlySpeed)
{
    super(name,age)
    this.FlySpeed = FlySpeed
}
fly()
    {
        console.log(`it flies ata speed of ${this.FlySpeed}`)
        super.move(this.FlySpeed);
    }
}


const Rab = new rabbit("bunny",2,"13mph")

const Fish = new fish("Nemo",1,"10mph")

const Hak = new hawk("ace",5,"3mph")


Rab.run()

Fish.swim()
Hak.fly()
