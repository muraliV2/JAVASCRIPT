<style>
    *
    {
        background-color: cornflowerblue;
    }
</style>
<center><h1>WHO is the winner of 2025 ballond-or</h1>
<button onclick="dem()">DEMBELE</button> &nbsp; &nbsp; 
<button onclick="yamal()">LAMINE PERUMAL</button>
<p id="hi">winner of 2025 ballond-or</p>
</center>


<script>
    var result =  document.getElementById("hi")

    function dem()
    {
        result.textContent = "real winner : ousmanae"
    }

    function yamal()
    {
        var jh = document.createElement("h1")
        jh.textContent = "he will win in futurre"
        result.append(jh)
    }
</script>
