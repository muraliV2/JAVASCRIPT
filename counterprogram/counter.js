let count = 0
let dec = document.getElementById("de")
let res = document.getElementById("re")
let inc = document.getElementById("in")
let ans = document.getElementById("lab")


dec.onclick = function()
{
    count--
    ans.textContent = count
}

res.onclick = function()
{
    count = 0;
    ans.textContent = count
}
inc.onclick = function()
{
    count ++
    ans.textContent = count
}
