<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script type="module" src="./module.js"></script>
</html>

//module.js
import arr, { ashwin, obj } from "./module1.js";

obj
console.log(obj)
console.log(arr)
ashwin()


//module1.js



export function ashwin() {
    setTimeout(() => {
        console.log("hello ashwin im pooja");
    }, 4000);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default arr;

let obj = {
    name: "ronaldo",
    age: 40,
    club: "al nassr"
};

export { obj };


