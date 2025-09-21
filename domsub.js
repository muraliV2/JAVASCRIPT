 value 1:<input type="number" id="demo1" value="26"> <br>
  value 2:<input type="number" id="demo2" value="4"> <br>
  result : <input type="number" id="result"> <br>
  <button onclick="sub()">subtract</button>




  <script>
    var num1 = document.getElementById("demo1")
    var num2 = document.getElementById("demo2")
    var result = document.getElementById("result")

    var one = Number(num1.value)
    var two = Number(num2.value)
console.log(one)
console.log(two)
    function sub()
    {
        sub = one - two
        console.log(sub)
    }

  </script>
