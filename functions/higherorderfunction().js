<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>

<script>
function calculate(c)
{
return c + 100  
}

function hi(a,b)
{
let res = a(b)
if(res>2000)
{
    console.log("lose")
}
else
{
    console.log("win")

}
}
hi(calculate,2000)

</script>
</html>
