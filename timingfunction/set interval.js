import { demo } from "./func.js";
import { ad } from "./funct2.js";

setInterval(() =>
{
demo()
},3000)


setInterval(() =>
{
ad()
},4000)


export function demo()
{
    console.log("hi demo")
}


 export function ad()
{
    for( let i=1;i<=5;i++)
    {
        console.log(i)
    }
}

