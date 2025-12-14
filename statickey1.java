class user
{
    static usercount = 0;
    constructor (name)
    {
        this.name = name;
        user.usercount++
    }
    sayhello()
    {
        console.log(`my name is ${this.name}`)
    }
    static useCount()
    {
        console.log(`there are  ${this.usercount}  users online`)
    }
}

let user1 = new user("messi");
let user2 = new user("ronaldo");
user1.sayhello();
user2.sayhello()
user.useCount();
