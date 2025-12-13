class football
{
constructor(player,team,position)
{
    this.player = player;
    this.team = team;
    this.position = position
}
 GetData()
{
    console.log(`my name is ${this.player} and i was playing in ${this.team} am i am familiar in this ${this.position} position`)
}
}

let fb = new football("ronaldo","man united","striker");
let fb1= new football("messi","10","right winger");
fb.GetData()
// console.log(fb);
fb1.GetData();
// console.log(fb1)
