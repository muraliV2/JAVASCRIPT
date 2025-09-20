<h1 id="demo">HELLO WORLD</h1>
<button onclick="change()">change</button>

<script>
    var as = document.getElementById("demo")
    console.log(as.textContent)

    function change()
    {
       as.textContent = "bye WORLD"
    }
</script>
