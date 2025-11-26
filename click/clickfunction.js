<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body
        {
            padding: 30px;
            border: 20px;
        }
        button
        {
            height: 100px;
            width: 100px;
        }
    </style>
</head>
<body>
    <!-- <button id="btn1" onclick="console.log('hello world')">onclick</button>
    <button id="btn2" onclick="console.log('hello')">onclickdouble</button> -->

    <button id="btn">click this </button>
    <button id="btn1"> click this two times</button>
    
</body>
<script src="click.js"></script>
</html>


let btn =document.getElementById("btn").onclick=()=>
{
    console.log("hello ashwin")
}

let btn1 =document.getElementById("btn1").ondblclick=()=>
{
    console.log("hello ashwin")
}
