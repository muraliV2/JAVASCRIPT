//reduce is nothing but it provides the op in the singel value


let num = [1,2,3,4,5]
let hi = num.reduce(sum)
console.log(hi)

function sum(acc,element)
{
    return acc + element
}
