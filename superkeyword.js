class animal
{
    constructor(name,age)
    {
        this.name = name
        this.age = age
    }


}
class rabbit extends animal
{
    constructor(name,age,RunSpeed)
    {
        super(name,age)
        this.RunSpeed = RunSpeed
    }
}
class fish extends animal
{
    
    constructor(name,age,SwimSpeed)
    {
        super(name,age)
        this.SwimSpeed = SwimSpeed
    }
}

class hawk extends animal
{
    constructor(name,age,FlySpeed)
{
    super(name,age)
    this.FlySpeed = FlySpeed
}
}


const Rab = new rabbit("bunny",2,"13mph")
console.log(Rab)
const Fish = new fish("Nemo",1,"10mph")
console.log(Fish)
const Hak = new hawk("ace",5,"3mph")
console.log(Hak)
