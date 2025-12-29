let hi = name.map(capi)
console.log(hi)

function capi(element)
{
return element.charAt(0).toUpperCase() + element.slice(1)
}

map concept in js
