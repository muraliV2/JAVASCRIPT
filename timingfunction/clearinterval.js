import { demo } from "./func.js";
import { ad } from "./funct2.js";

clearTimeout(() =>
{
    demo()
},2000)


clearTimeout(() =>
{
    ad()
},3000)

setTimeout(() =>
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

