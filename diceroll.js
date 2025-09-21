<h1>guess the dice roll</h1>
<input type="number" id="guessnum">  <br> <br>
<button onclick="check()">check</button> <br><br>
<p id="result">you guess is wrong/right</p>
<p id="chance">remaining chance:6</p>


<script>
    var entnum = document.getElementById("guessnum")
    var result = document.getElementById("result")
    var chance = document.getElementById("chance")
    var chance1=6
    var random = Math.floor(Math.random()*6)+1
    console.log(random)

    function check()
    {
var mynum = entnum.value
if(mynum == random)
{
result.textContent = "you are right"
alert("you are right")

}
else
{
    result.textContent="you are wrong"
    chance1=chance1-1
    chance.textContent = "chance =" +chance1
}

    }
</script>
