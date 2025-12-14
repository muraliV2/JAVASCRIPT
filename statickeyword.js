class Formula
{
    static dia(radius)
    {
        return 2 * radius
    }

    static rad(dia)
    {
        return dia/2
    }
}

console.log(Formula.dia(3))
console.log(`to radius is ${Formula.rad(26)}`)
