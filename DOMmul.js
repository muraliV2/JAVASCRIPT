 value 1:<input type="number" id="demo1" value="2"> <br>
  value 2:<input type="number" id="demo2" value="4"> <br>
 <p id="answer">result</p>
  <button onclick="mul()">multiply</button>


  <script>
    var num1 = document.getElementById("demo1")
    var num2 = document.getElementById("demo2")
    var result = document.getElementById("answer")

    var one = Number(num1.value)
    var two = Number(num2.value)

    var multiply = one*two

    function mul()
    {
        answer.textContent = multiply

    }
  </script>
