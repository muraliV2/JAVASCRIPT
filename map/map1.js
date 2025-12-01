let date = ["23 1 2004","6 7 1997","30 7 1997"]
let hi= date.map(swap)
console.log(hi)

function swap(element)
{
let gi = element.split(" ")
 return `${gi[2]}-${gi[1]}-${gi[0]}}`
}
