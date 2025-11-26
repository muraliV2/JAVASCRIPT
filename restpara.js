function alpha(...alpha)
{
    console.log(alpha)
}
let one = "apple"
let two = "ball"
let three = "cat"
let four = "dog"

function getfood(...alpha)
{
    return alpha
}

let add = getfood(one,two,three,four)
console.log(add)
