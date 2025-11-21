const marks = 90;
let exam = () =>  new Promise((resolve,reject) =>
{
if(marks>80)
{
    resolve("you passed")
}
else
{
    reject("try again")
}
})

async function demo()
{
    try
    {
        let res = await exam();
        console.log(res)
    }
    catch
    {
        console.log("no bike beta")
    }
finally
{
    console.log("i am finally block")
}
}
demo()
