 number 1:<input type="number" id="demo1"> <br> <br>
  number 2:<input type="number" id="demo2"> <br> <br>
  <p id="result">result</p> <br><br>
 <table border="1" cellpadding ="10px">
  <tr>
    <td> <button onclick="add()">addtion</button></td>
    <td><button onclick="sub()">Subtraction</button></td>
  </tr>
  <tr>
    <td><button onclick="mul()">multiplication</button></td>
    <td><button onclick="div()">Division</button></td>
  </tr>

 </table>


  <script>
    var num1 = document.getElementById("demo1")
     var num2 = document.getElementById("demo2")
      var answer = document.getElementById("result")

      function add()
      {
        var one = Number(num1.value)
        var two = Number(num2.value)
        var addition = one + two
        answer.textContent = addition
      }

      function sub()
      {
        var one = Number(num1.value)
        var two = Number(num2.value)
        var subtract = one - two
        answer.textContent = subtract
      }

      function mul()
      {

        var one = Number(num1.value)
        var two = Number(num2.value)
        var multiply = one*two
        answer.textContent =multiply
      }

      function div()
      {
        var one = Number(num1.value)
        var two = Number(num2.value)
        var division = one/two
        answer.textContent = division
      }
  </script>
