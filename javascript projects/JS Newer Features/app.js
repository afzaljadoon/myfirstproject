    // // Iterator Example
    // function nameIterator (names) {
    //     let nextIndex = 0;
    //     return {
    //         next : function () {
    //             return nextIndex < names.length ? 
    //             {value:names[nextIndex++], done: false} :
    //             {done : true}
    //         }
    //     }
    // }
    // //  Create An Array of Names
    // const namesArr = ['will','jacks','john'];
    // // Init Iterator And Passes The Name Array
    // const names = nameIterator(namesArr);

    // console.log(names.next().value);
    // console.log(names.next().value);
    // console.log(names.next().value);
    
    // Generator
    //  function* sayNames () {
    //     yield 'will'
    //     yield 'jack'
    //     yield 'john'
    //  }
    //   const names = sayNames();

    //   console.log(names.next().value);
    //   console.log(names.next().value);
    //   console.log(names.next().value);

    // Create ID
    // function* createIds () {
    //     let index = 0;
    //     while (true) { 
    //         yield index++;
    //     }
    // }

    // const gen = createIds();

    // console.log(gen.next().value);
    // console.log(gen.next().value);
    // console.log(gen.next().value);
    // console.log(gen.next().value);

    // Create A Symbol
    // const sym1 = Symbol();
    // const sym2 = Symbol('sym2');

    // // console.log(sym1);
    // // console.log(typeof sym2);
    // console.log(Symbol('123') === Symbol('123'));
    // console.log(`Hello ${String(sym1)}`)

    // Unique object keys
    // const KEY1 = Symbol();
    // const KEY2 = Symbol('sym2');
    

    // const myobj = {};

    // myobj[KEY1] = 'Prop1';
    // myobj[KEY2] = 'Prop2';
    // myobj.key3 = 'Prop3';
    // myobj.key4 = 'Prop4';

    // console.log(myobj[KEY1]);
    // console.log(myobj[KEY2]);
    
    // // Symbols Are Not enumerable in for......in
    // for(let i in myobj){
    //     console.log(`${i}:${myobj[i]}`);
    // }

    // Symbols Are ignored By JSON.stringify
    // console.log(JSON.stringify({key : 'prop'}));
    // console.log(JSON.stringify({[Symbol('sym1')] : 'Prop'}))
    // console.log(JSON.stringify({[Symbol('sym1')] : 'Prop'}))

    // Destructuring Assignment
//     let a, b;
//    [a, b] = [100, 200];

//     // Rest Pattern
//     [a, b, c, ...rest] = [100, 200, 300, 400, 500];

//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(...rest);
    
    // ({a, b} = {a:100, b:200, c:300, d:400, e:500});

    // ({a, b, ...rest} = {a:100, b:200, c:300, d:400, e:500});

    // console.log(a);
    // console.log(b);
    // console.log(rest);


    // Array Destructuring
    // const people = ['john', 'Meth', 'william'];

    // const [person1, person2, person3] = people;

    // console.log(person1, person2, person3)

    // Parse Array Returnd From Function
    // function getPeople () {
    //     return ['john', 'Meth', 'william'];
    // }
    // let person1, person2, person3;
    // [person1, person2, person3] = getPeople();

    // console.log(person1, person2, person3)

    // Object Destructuring
    const person = {
        name : 'John Doe',
        age : 32,
        city : 'Miami',
        gender : 'Male',
        sayHello : function () {
            console.log('Hello');
        }
    }
    // New ES6 Destructuring
   const {name, age, city, sayHello} = person;
   
   console.log(name, city, age);

   sayHello();
