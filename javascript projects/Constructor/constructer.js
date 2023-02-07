// Constructer Person
// function Person(name, dob){
//     this.name = name ;
//     // console.log(this);
//     this.birthday = new Date(dob);
//     this.calculateAge = function (){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

//     //   const brad = new Person('Brad');
//     //   const john = new Person('John');
//     //   const Joe = new Person('Joe');

//     const afzal = new Person ('Afzal', '4-4-2000');

//     console.log(afzal.calculateAge());

        // String
        // const name1 = 'Muneer';
        // const name2 = new String('Muneer');
         
        // // name2.foo = 'bar';
        // // console.log(name2);

        // console.log(typeof name2);

        // if(name2 === 'Muneer'){
        //     console.log('YES');
        // }else{
        //     console.log('NO');
        // }

        // // Numbers 
        // const num1 = 5;
        // const num2 = new Number(5);

        // console.log(typeof num2);

        //  // Boolean 
        //  const bool1 = true;
        //  const bool2 = new Boolean(true);
 
        //  console.log(bool2);

        // //  Function
        // const getSum1 = function (x,y){
        //    return x+y;
        // }
        // const getSum2 = new Function('x','y','return x+y'); 

        // console.log(getSum2(1,1));

        // // Object 
        // const muneer1 = {name:"Muneer"};
        // const muneer2 = new Object({name:"Muneer"});

        // console.log(muneer2);

        // // Arrays
        // const arr1 = [1,2,3,4];
        // const arr2 = new Array(1,2,3,4);

        // console.log(arr2);

        // // New expresion
        // const ex1 = /\w+/;
        // const ex2 = new RegExp('\\w+');

        // console.log(ex2);

        // // Object.Prototype
        // // Person.Prototype
        // // Constructer Person
        //  function Person(firstName, lastName , dob){
        //  this.firstName = firstName ;
        //  this.lastName = lastName;
        //  // console.log(this);
        // this.birthday = new Date(dob);
        // // this.calculateAge = function (){
        // // const diff = Date.now() - this.birthday.getTime();
        // // const ageDate = new Date(diff);
        // // return Math.abs(ageDate.getUTCFullYear() - 1970);
        // //   }
        //       }
        //     //   Calculate Age 
        //     Person.prototype.calculateAge = function (){
        //         const diff = Date.now() - this.birthday.getTime();
        //         const ageDate = new Date(diff);
        //         return Math.abs(ageDate.getUTCFullYear() - 1970);
        //           }

        //         //   Gets Full Name
        //         Person.prototype.getFullName = function(){
        //             return `${this.firstName} ${this.lastName}`;
        //         }

        //         // Gets Maried
        //         Person.prototype.getsMaried = function(newLastName){
        //          this.lastName = newLastName;
        //         }

        //       const mun = new Person ('Aqib', 'Ahmad', '10-2-1999');
        //       const sha = new Person ('Shahab','Rahman','4-4-2002');

        //       console.log(sha);

        //       console.log(mun.calculateAge());

        //       console.log(sha.getFullName());

        //       sha.getsMaried('jadoon');

        //       console.log(sha.getFullName());

        //       console.log(sha.hasOwnProperty('firstName'));

        //       console.log(sha.hasOwnProperty('getFullName'));

            //   Person Constructor
            // function Person(firstName,lastName){
            //   this.firstName = firstName;
            //   this.lastName= lastName;
            // }
            // // Greeting
            // Person.prototype.greeting = function (){
            //     return `Hello there ${this.firstName} ${this.lastName}`;
            // }

            // const person1 = new Person('Aqeel','Hashmi');

            // console.log(person1.greeting());

            // // customer function
            // function Customer(firstName,lastName,phone,membership){
            //     Person.call(this, firstName, lastName);
            //     this.phone = phone;
            //     this.membership = membership;

            // }
            // // Inherit the Person prototype methods
            // Customer.prototype = Object.create(Person.prototype);

            // // Make customer.prototype return customer()
            // Customer.prototype.constructer = Customer;

            // // Create customer
            // const customer1 = new Customer('Hammad','Khan','0314-9104079','standard');

            // console.log(customer1);

            // // customer greeting
            // Customer.prototype.greeting = function(){
            //     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
            // }
            // console.log(customer1.greeting());

            // Object.create
            // const personprototypes = {
            //     greeting : function(){
            //     return `Hello there ${this.firstName} ${this.lastName}`;
            // },
            //    getsMarried : function(newLastName){
            //      this.lastName = newLastName;
            //    }
            // }

            // const name = Object.create(personprototypes);
            // name.firstName = 'Atif';
            // name.lastName = 'Aslam';
            // name.age = 22;
            // name.getsMarried('Raheem');

            // // console.log(name);
            // console.log(name.greeting());

            // const um = Object.create(personprototypes,{
            //     firstName : {value : 'Umar'},
            //     lastName : {value : 'Hussain'},
            //     age : {value : 23}
            // });

            // console.log(um);
            // console.log(um.greeting());
            // // ES6 CLASS
            // class Person{
            //     constructor (firstName,lastName,dob){
            //         this.firstName = firstName;
            //         this.lastName = lastName;
            //         this.birthday = new Date(dob);
                    
            //     }
            //     greeting(){
            //        return `Hello there ${this.firstName} ${this.lastName}`;
            //     }

            //     calculateAge(){
            //         const diff = Date.now() - this.birthday.getTime();
            //         const ageDate = new Date(diff);
            //         return Math.abs(ageDate.getUTCFullYear() - 1970);
            //     }
            //     getsMarried(newLastName){
            //         this.lastName = newLastName;
            //     }
            //     static addNumbers(x, y){
            //         return x + y;
            //     }
            // }
            // const jack = new Person('Will','Jack','4-4-2000');

            // console.log(jack);
            // console.log(jack.greeting());

            // console.log(jack.calculateAge());

            // jack.getsMarried('williams');

            // console.log(jack);

            // console.log(Person.addNumbers(150,340));

            // SUB CLASSES
            class Person{
            constructor(firstName,lastName){
                this.firstName = firstName;
                this.lastName = lastName;
            }
                greeting(){
                    return `Hello there ${this.firstName} ${this.lastName}`;
                }
               
            }

            class Customer extends Person{
                constructor(firstName,lastName,phone,membership){
                    super(firstName,lastName);

                    this.phone = phone;
                    this.membership = membership;
                }
                static getMembershipCost(){
                    return 500;
                }
               
            }

            const mun = new Customer('Muneer','Rahman','0314-6685848','standard');

            console.log(mun);

            console.log(mun.greeting());

            console.log(Customer.getMembershipCost());