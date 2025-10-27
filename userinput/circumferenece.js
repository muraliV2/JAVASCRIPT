const pi = 3.14
let radius;
let result;
let ans;

document.getElementById("btn").onclick = function()
{
    ans = document.getElementById("result")
    radius = Number(document.getElementById("rad").value)
    let result = 2 * pi * radius
    ans.textContent = "the circumferencee is" +result
    

}
