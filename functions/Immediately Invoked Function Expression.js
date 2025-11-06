<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label for="" id="result"></label>
</body>
<script>

    let res = document.getElementById("result")
    let a =() =>{
        console.log("i am arrow")
    }
a()
    let add = (num)=>num+67
    
        console.log(add(50))
    let aswin = (a,b)=>
     res.textContent = a+b
     console.log(aswin(10,30))
     let pooja = aswin(20,40)
     console.log(pooja)
    
</script>
</html>
