class player
{
 showclub()
 {
    console.log(`i am playing for this ${this.club}`)
 }
 showposition()
 {
  console.log(`i am good at this ${this.position}`)
 }
}

class ronaldo extends player
{
    club = "realmadrid";
    position = "striker";
}
class messi extends player
{
    club = "barcelona";
    position = "right winger";
}


const roan = new ronaldo();

const leo = new messi();
leo.showclub();
leo.showposition();
roan.showclub();
roan. showposition()
