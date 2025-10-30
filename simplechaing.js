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
    let name = window.prompt("enter your name")
    name = name.trim()
    let fs = name.charAt(0)
   fs = fs.toUpperCase()
   console.log(fs)

   let ls = name.slice(1)
   console.log(ls)
   let lsm = ls.toLowerCase()
   let full= fs + lsm
   console.log(full)
    

</script>
</html>
