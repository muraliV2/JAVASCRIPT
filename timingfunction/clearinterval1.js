import { demo } from "./func.js";
import { ad } from "./funct2.js";

clearInterval(() =>
{
    demo()
},2000)


clearInterval(() =>
{
    ad()
},3000)

setInterval(() =>
{
    console.log("hello")
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

