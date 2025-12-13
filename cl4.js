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
    GST(tax)
    {
        return this.salary = this.salary * tax
    }

    

}
let tax = 18;
let h1 = new off("ronaldo",19,123000);
h1.Display();
h1.GST(tax);
h1.Display();
