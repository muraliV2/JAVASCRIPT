class off
{
   constructor(name,age,salary)
    {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Display()
    {
        console.log(`my name is ${this.name} and my age is ${this.age} And i earn upto ${this.salary}`)
    }

    

}
let h1 = new off("ronaldo",19,"12Million");
h1.Display();
