let numbers =[1,2,3,4,5]

numbers.forEach(square)

function square(element,index,array)
{
// array[index] = element * element;
array[index] = Math.pow(element,3)
console.log(array)
}
