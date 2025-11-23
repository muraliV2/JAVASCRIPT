let num = 8
let firstnum = (num)=> new Promise((resolve,rejected)=>
{
    setTimeout(()=>
    {
        if(num>0)
        {
            resolve(num)
        }
        else
        {
            rejected("it is not a number")
        }
    },5000)
})
    

let check=(num) => new Promise((resolve,rejected) =>
{
    setTimeout(()=>
{
    if(num%2==0)
    {
        resolve(`it is even number ${num}`)
    }
    else
    {
        rejected("it is s odd number")
    }
},2000)
})


async function hi(num) 
{
try
{
    let one = await firstnum(num)
    console.log(one)
    let two = await check(one)
    console.log(two)
}    
catch
{
    console.log(Error)
}
}

hi(num)
