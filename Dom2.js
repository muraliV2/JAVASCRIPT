 number 1 <input type="number" id="demo1" value="24">  <br>
 number 2<input type="number" id="demo2" value="25"> <br>
<input type="number" id="reult"> <br>
<button onclick="ad()">ADDITION</button> 


<script>
    var num1 = document.getElementById("demo1")
    var num2 = document.getElementById("demo2")
    var res = document.getElementById("result")

    var one = Number(num1.value)
    var two = Number(num2.value)
    console.log(one)
    console.log(two)

    function ad()
    {
        add = one + two   
        console.log(add)
 }
</script>
