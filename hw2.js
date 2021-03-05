//Create a person class that takes a name & age into the constructor. The person class should have a getName method that returns the instantiated objects name

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
  getName() {
      console.log(`I am ${this.name}`);
  }
}

Person.getName();
const LaKeisha = new Person (`lakeisha`, `40`);
console.log(LaKeisha);

//Create an employee class that inherits from the person class. The constructor should take in a name, age, and employeeID (number). This class should have two methods. The first method should be a static method called getCompanyName it should return 'Web Development Solutions Incorporated' The second method should be named getEmployeeID and should return the employeeID of the instantiated object, this is NOT a static method.

class Employee extends Person {
    constructor(name, age, employeeID) {
        super (name,age)
        this.employeeID = employeeID;
        
    }
   static getCompanyName() {
        console.log (`Web Development Solutions Incorporated`);

    getEmployeeID() {
        console.log(`My ID is ${this.employeeID}`);

    }
    }
}
const Employee1 = new Employee(007);

//Create a Manager class that inherits from the employee class. The constructor should accept a name, age, employeeID (number), and employees (array). This class should have two methods newEmployee & getEmployees. the newEmployee method is NOT static and should accept and employeeID as a parameter the body of the function should push the new employeeID on to the instantiated objects employees array. HINT: How do we specify "this" employees array? The second method is NOT static and should return the employees array of the instantiated object.

class Manager extends Employee {
    constructor(name, age, employeeID, employees){
        super(name, age, employeeID);
        this.employees = employees;
    }
}

const Manager = new (
    ['Ashton', 'Nylah', 'Carrol']
)
//Create a Clerk class that inherits from the Employee class. The constructor should accept a name, age, employeeID (number), supervisorID (number). This class should have one method getSupervisor it should return the instantiated objects supervisor's ID

class Clerk extends Employee {
    constructor(name, age, employeeID, supervisorID){
        super (name, age, employeeID);
        this.supervisorID = supervisorID;
    }
   getSupervisor()  {
        console.log(`My supervisor is ${this.supervisorID}`);
   }
}
const Clerk1 = new Clerk(`009`)

//Create a variable named currentID, we'll want to modify this so make sure it isn't a constant set the value to 1.

var currentID = 1;

//Instantiate an object from the Manager class stored in a variable named "boss" you can pass in any name or age you'd like, the employeeID should be passed in as currentID++, and the employees should be passed as an empty array

Manager.getNumOfInstantiations();
const boss = new Manager('David', '55', currentID++,'[...]');

//Instantiate an object from the Clerk class store it in a variable named clerk1, again give it any name and age you'd like, the employeeID should be currentID++, for the supervisorID call the getEmployeeID on the boss variable. This works b/c we're inheriting the method from the employee class.

Clerk.getNumOfInstantiations();
const clerk1 = new Clerk('Martha', '22', currentID++);
getEmployeeID();

//Rinse & repeat the last step. Instantiate an object from the Clerk class store it in a variable named clerk2, give it any name and age you'd like, set the supervisorID to curentID++, and call the getEmployeeID on the boss variable for the supervisorID

Clerk.getNumOfInstantiations();
const clerk2 = new Clerk('Carolyn', '30',currentID++);
getEmployeeID();

// Our clerks have a supervisor assigned, so lets set them as employees of boss. We can do this with the newEmployee method. We're going to pass in an object as the parameter. The object should look like this (name: (clerk1's name), employeeID: (clerk1's employeeID)) HINT: Our Person class has a getName method & our employee class has a getEmployeeID method

newEmployee()   {
    (name: getName(), employeeID: getEmployeeID())
}

//We're going to add clerk2 as an employee just as we did with clerk1 in the same format.
newEmployee2() {
    (name: getName(), employeeID: getEmployeeID())
}

//To check our work lets console.log clerk1.getSupervisor(), we should see whatever the boss variables employeeID.
console.log(clerk1.getSupervisor());

//Console.log boss.getEmployees() you should see an array containing two objects with whatever name's and age's you gave clerk1 & clerk2
console.log(boss.getEmployees());