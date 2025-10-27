let one;
let two;
let ans;
let result =document.getElementById("res")


document.getElementById("add").onclick = function()
{
    
 one = Number(document.getElementById("num1").value)
two = Number(document.getElementById("num2").value)
ans = one+two
    result.textContent = ans
}
document.getElementById("sub").onclick = function()
{
    
 one = Number(document.getElementById("num1").value)
two = Number(document.getElementById("num2").value)
ans = one-two
    result.textContent = ans
}
document.getElementById("mul").onclick = function()
{
    
 one = Number(document.getElementById("num1").value)
two = Number(document.getElementById("num2").value)
ans = one*two
    result.textContent = ans
}
document.getElementById("div").onclick = function()
{
    
 one = Number(document.getElementById("num1").value)
two = Number(document.getElementById("num2").value)
ans = one/two
    result.textContent = ans
}
