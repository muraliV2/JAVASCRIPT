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
    // string slice is used to slice a part of word from the entire word


    let fullname = 'lionel messi'
   let firstname = fullname.slice(0,fullname.indexOf(" "))
   let lastname = fullname.slice(fullname.indexOf(" "))
    console.log(`${firstname}  "and his full name is " ${fullname}` )
    console.log(lastname)
</script>
</html>

i used index of method to slice the word where the first ocuurence of "space " occurs
