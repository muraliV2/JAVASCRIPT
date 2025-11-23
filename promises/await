
liscense = true;
let lis= new Promise((resolve,rejected)=>
{
    setTimeout(() =>
    {
        if(liscense)
        {
            resolve("i have liscense")
        }
        else
        {
            rejected("i dont have liscence")
        }
    },4000)
})

async function history()
 {
    try
    {
        let tr = await lis
        console.log(tr)
    }
    catch(error)
    {
console.log(Error)
    }
 }

 history()
