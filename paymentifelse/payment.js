const mycheck = document.getElementById("mycheck")
const visa = document.getElementById("visa")
const master = document.getElementById("master")
const pal = document.getElementById("pal")
let submit = document.getElementById("sub")
let subres = document.getElementById("subres")
let payres = document.getElementById("payres")

submit.onclick = function()
{
    if(mycheck.checked)
    {
        subres.textContent = 'you are subscribed'

        if(visa.checked)
        {
            payres.textContent = 'paid using visa'
        }
        else if(master.checked)
        {
            payres.textContent = 'paid using mastercard'
        }
        else if(pal.checked)
        {
            payres.textContent = 'paid through pay pal'
        }
        else
        {
            payres.textContent = 'did you paid using cash ?'
        }
    }
    else
    { 
        subres.textContent = 'you are not subscribed to anything'
    }
}
