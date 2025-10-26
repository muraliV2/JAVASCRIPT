<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label for="">Enter name</label>
    <input type="text" id="con"> 
    <button id="bt">submit</button>
<h1 id="mynum">enter your name</h1>
  <script src="./index.js"></script>
</body>
</html>

  let username
document.getElementById("bt").onclick =function()
{
  username =  document.getElementById("con").value 
  document.getElementById("mynum").textContent ="name :" +username
  console.log(username)
}
