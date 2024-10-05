// Encapsulation means bundling related properties and methods inside a class and controlling their visibility. In TypeScript, 
// we can control access to properties and methods using access modifiers:

// Members: Visibility
// Class members also be given special modifiers which affect visibility.

// There are three main visibility modifiers in TypeScript.

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, Accessible within the class and subclasses.

class person{
   public name:string;

   public constructor(name:string){
    this.name=name;
   }
   
   public getName() : string{
    return this.name
   }
}

const p1=new person("Pavan");
console.log(p1.getName());
//----------------------------------------------------------------------------------------------------------------------------------

//Now let's take car Example

class carr{
    public brand:string;
    private engineStatus:boolean=false;

    constructor(brand:string){
        this.brand=brand;
    }

    public startEngine():void{
        this.engineStatus=true;
        console.log(`&{this.brand} car has started`);
    }
    private checkEngineStatus():void{
        console.log(`engine Status :&{this.engineStatus}`);
    }
}

let myCar=new carr("TATA");
myCar.brand="Tesla";
myCar.startEngine();
//myCar.engineStatus=true;
//----------------------------------------------------------------------------------------------------------------------------------

//let take look on private also with Bank Example

class BankAccount{
    private accountNumber:number;
    private balance:number;

    constructor(intialBalance:number){
        this.balance=intialBalance;
    }
    //Deposite
    public amtDeposite(amount:number):void{
        if(amount>0){
            this.balance+=amount;
            console.log(`Deposited: ${amount}`);
        }
        else{
            console.log("Deposite Valid Amount");
        }
    }

    public checkAmount(){
        return `Your Current Balance Is: &{this.balance}`;
    }
}

let account=new BankAccount(1000);
account.amtDeposite(500);
console.log(account.checkAmount());
//----------------------------------------------------------------------------------------------------------------------------------

//now explore about protect

class library{
    protected books:string[];

    constructor(){
        this.books=[];
    }

    //display Books names
    displayBooks():void{
        console.log("List of Books",this.books);
    }

}
class publicLibrary extends library{
    public addBook(newBook:string):void{
        this.books.push(newBook);
        console.log(`&{newBook} added Successfully`)
    }
        
}

let BridgeLabsLibrary =new publicLibrary();
BridgeLabsLibrary.addBook("TypeScript");
BridgeLabsLibrary.addBook("JavaScript");
BridgeLabsLibrary.displayBooks();

// console.log(BridgeLabsLibrary.books);  // Error: Property 'books' is protected

//----------------------------------------------------------------------------------------------------------------------------------

// Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.

// Example
class Person2{
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("Pavan");
console.log(person2.getName());

//----------------------------------------------------------------------------------------------------------------------------------

// Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.

// Example

class Trainee {
    private readonly name: string;
  
    public constructor(name: string) {
      // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const trainee = new Trainee("Jane");
  //trainee.name="pavan"; //error TS2540: Cannot assign to 'name' because it is a read-only property.
  console.log(trainee.getName());