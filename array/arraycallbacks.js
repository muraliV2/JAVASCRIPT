let numbers =[1,2,3,4,5]
numbers.forEach(hi)

function hi(element,index,array)
{
     array[index] = 2*element
     console.log(array)
}


//element => provides element
//index => provides the index value
//array => provides the entire array

