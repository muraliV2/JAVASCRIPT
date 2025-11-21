
let con = true
const love = () => new Promise((resolve,reject) =>
{
    setTimeout(() =>
    {
if(con)

    {
        resolve("i love you")
    }
    else
    {
        reject("i dont love you")
    }


    },3000) 
})

const marriage = ()=> new Promise((resolve) =>
{
setTimeout(() =>
{
    resolve("i love you to i will marry you")
},5000)
})





love().then(value =>{console.log(value);
return marriage()
.then(sub => console.log(sub))
})
.catch(error => {console.log(error)
};

