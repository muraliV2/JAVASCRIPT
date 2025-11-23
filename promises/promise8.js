
const clash =() => new Promise((resolve,reject) =>
{
    let cl = true
if(cl)
{
    resolve("playing cr")
}
else
{
    reject("not playing")
}
})

const card =()=> new Promise((resolve) =>
{
    setTimeout(() =>
    {
        resolve("got mega knight")

    },2000)
})

async function dem() 
{
try
{
let play = await clash()
console.log(play)
let cd = await card()
console.log(cd)
}   
catch
{
    console.log("play coc")
}
finally
{
    console.log("god of mobile game ")
}
} 
dem()
