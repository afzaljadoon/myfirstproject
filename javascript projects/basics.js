// if statement
//  const marks = 35;

//   if(marks > 33){
//     console.log("you are pass");
//   }
//   if(marks > 25 ){
//     console.log("You are fail");
//   }
    //  Conditional Or Ternary Opperator
//   (marks > 33) ? console.log("You are pass") : ("You are fail");

// Difference in if and if else
// In if else if the first condidtion true it won't check the remaining condition why not it is true, And in if statement all the condition will be check then the output will be shown, the above example is about "if" statements.

// if and else statement
//   const marks = 35;

//   if(marks > 33){
//     console.log("you are pass");
//   }
//  else if(marks < 33) { 
//      console.log("You are fail");
//  }
//  else if(marks > 34) { 
//   console.log("You are pass just by 1 number");
// }
//   else{
//     console.log("Grade B.")
//   }

// Switch

// const number = 10;

// switch(number % 2){
//   case 0:
//     console.log("Number is even");
//     break;
//   case 1:
//     console.log("Number is odd");
//     break;
//   default:
//     console.log("Error");
// }
    // Template literals
    // const firstName = 'john';
    // const lastName = 'Doe';

    // console.log(`Hello ${firstName} ${lastName}`);

    // LOOPS
    // For Loop

    // const list = [3,5,86,56,45,65,4,5,32,50];

    // for (let i = 0; i < list.length; i++){
    //   console.log(list[i] * list[i]);
    // }

    // While loop
    // let i = 0;
    // while(i < list.length){
    //     console.log(list[i]);
    //     i++;
    // }

    // Do-while
    // let i  = 0;
    // do{
    //   console.log(list[i])
    //   i++;
    // }while(i < list.length);

    // const data = {
    //   marks : 45,
    //   name : 'John Doe',
    //   gpa : 3.7,
    //   isPass : true,
    //   friends : ['Cemron Green','Alex Carrey','Pat Cummins'],
    //   address : {
    //     city : 'Mardan',
    //     Tehsil : 'ShaikhMaltoonCity',
    //     country : 'Paksitan'
    //   }
    // }

  //  console.log(data.friends[1]);
  //  console.log(data.address);

    // if(isPass === true){
    //   console.log(data.friends);
    // }
    // const students = [
    //  {
    //    marks : 45,
    //     name : 'John Doe',
    //     gpa : 3.7,
    //     isPass : true,
    //     friends : ['Cemron Green','Alex Carrey','Pat Cummins'],
    //     address : {
    //       city : 'Mardan',
    //       Tehsil : 'ShaikhMaltoon City',
    //       country : 'Paksitan'
    //     }
    //   },
    //   {
    //     marks : 50,
    //      name : 'John Snow',
    //      gpa : 3.7,
    //      isPass : true,
    //      friends : ['Cemron White','Alex Denials','Pat James'],
    //      address : {
    //        city : 'LA',
    //        Tehsil : 'LA city',
    //        country : 'America'
    //      }
    //    },
    //    {
    //     marks : 23,
    //      name : 'Johny Depp',
    //      gpa : 2.2,
    //      isPass : false,
    //      friends : ['Cemron Sleter','Alex Jordan','Pat Rowlins'],
    //      address : {
    //        city : 'California',
    //        Tehsil : 'California City',
    //        country : 'Austrilia'
    //      }
    //    }

    // ]

    // console.log(students[1].friends[2]);
    
      // Array methods
      // const marks = [45,33,20,77,80,95,40,55,30,22];

      // const sum = marks
      // .sort((a , b) => a-b)
      // .filter((n) => n > 50)
      // .map((n) => n + 10)
      // .reduce((a , b) => a + b, 0);

      // console.log(sum);

      // const multi = [76,78,54,45,34,32,42,54];
      // const l = multi.indexOf(34);

      // console.log(l);

      // const arr = [45,667,45,34];

      // console.log(multi.concat(arr));

      // Destructuring

      // const student_list = {
      //   name: "Afzal",
      //   age: 22,
      //   marks: 30,
      //   grade: 'A',
      //   isPass: true,
      //   friends : ['Muneer Rahman','Shahab Rahman','Hammad khan'],
      //   address : {
      //     city : 'Mardan',
      //     Tehsil : 'Labour Colony'
      //   }
      // }

      //     const{name, friends, isPass, address} = student_list;
      //     const {city,Tehsil} = address;
      //     console.log(name, friends, isPass, address);
      //     console.log(city);

      // indexing

      // const str = "My country is Pakistan which is a beautiful country.";

      // const key = "Pakistan";
      // const cry = str.slice (str.indexOf(key), str.indexOf(key) + key.length);
      // console.log(cry);

      // split Function and Destructuring
      // const func = "1,Ahmad,Swabi,6th,3.5,ICP";
      // const [id,name,city,semester,gpa,institute] = func.split(",");
      // // console.log(id, name, city, semester, gpa, institute);
      // console.log(func.split(","))

      // Object manipulation
      // const person = [
      //   {
      //     id : 1,
      //     name : "Shahab",
      //     gpa : 3.3,
      //     age : 22,
      //     gender : "male",
      //     isPass : true,
      //     courses : ["Software construction","Data Communication","Internet Programming","Software Requirements"],
      //     address :{
      //       district : "Swabi",
      //       city : "Topi"
      //     }
      //   },
      //   {
      //     id : 2,
      //     name : "Anaya",
      //     gpa : 3.1,
      //     age : 21,
      //     gender : "female",
      //     isPass : false,
      //     courses : ["Software Engineering","Data Manipulation","Internet Construction","Software System"],
      //     address :{
      //       district : "Mardan",
      //       city : "Labour Colony"
      //     }
      //   },
      //   {
      //     id : 3,
      //     name : "Hammad",
      //     gpa : 3.4,
      //     age : 25,
      //     gender : "male",
      //     isPass : false,
      //     courses : ["Data Com","Data Mining","Internet Requirements","Software Art"],
      //     address :{
      //       district : "Bunair",
      //       city : "Madakhail"
      //     }
      //   },
      //   {
      //     id : 4,
      //     name : "Sohana",
      //     gpa : 3.7,
      //     age : 27,
      //     gender : "female",
      //     isPass : true,
      //     courses : ["Software Engg","Data Web","c++","Java"],
      //     address :{
      //       district : "Charsadda",
      //       city : "Gulbahar"
      //     }
      //   }
      // ]

      // // for(let i = 0; i < person.length; i++){
      // //   if(person[i].isPass === true ){
      // //     console.log(person[i].name);
      // //     console.log(person[i].address.district);
      // //     for(let j = 0; j < person[i].courses.length; j++){
      // //       console.log(person[i].courses[j]);
      // //     }
      // //   }
      // // }

      //     for(i=0; i<person.length; i++){
      //       if(person[i].isPass === true ){
      //         console.log(person[i].name)
      //         console.log(person[i].address.city)
      //         for(let j = 0; j < person[i].courses.length; j++){
      //           console.log(person[i].courses[j])
      //         }

      //       }
      //       // console.log(person[i].name)
      //     }

      // Default arguments
      // const fun = (name = "Guest") => {
      //   console.log(`Hello ${name}`)
      // }
      // fun("Mansoor");

      // Regular Expresion
      // const str = "Mansoor"
      // const t = str.search(/[a-z]/i)

      // console.log(t)
      // Concatination
      // Array
      // const list1 = [5,7,3,4,33]
      // const list2 = [54,45,...list1,242,13]
      // console.log(list2)
      // Object
      // const bj1 = {
      //   name : "Ahmad",
      //   gpa : 3.4,
      //   classNo : 58
      // }
      // const obj2 = {
      //   ...bj1,
      //   address : "Mardan",
      //   institute : "Islamia college peshawar"
      // }
      // console.log(obj2)
        
      // const fname = "Ahmad";
      // const lname = "Ali";
      // const age = 23;
      // const marks = 67;
      // const city = "Peshawar";
      // const village = "Pawakay";
      // const houseNo = 21;


      // const data = {
      //   fname,
      //   lname,
      //   age,
      //   marks,
      //   address : {
      //     city,
      //     village,
      //     houseNo
      //   }
      // }
     
      // console.log(data)

      // Numbers
      // const test = 23.43474787;
      // const test1 = 12;
      // const num = Math.ceil(test);
      // const num1 = Math.floor(test);

      // console.log(num)
      // console.log(num1)

      //  Random NUmbers
      // for(let i = 0; i < 20; i++){
      //   const num = Math.floor(Math.random()*10 + 1);
      //   console.log(num)
      // }

      const list = [65,4,36,24,86,56,87];
      const max = Math.max(...list)
      console.log(max)
      const min = Math.min(...list)
      console.log(min)

      // Get Date
      // const d = new Date();

      // console.log(d.getFullYear())
      // console.log(d.getYear())
      // console.log(d.getTime())
      // console.log(d.getHours())
      // console.log(d.getDate())
      // console.log(d.getDay())
      // console.log(d.toDateString("dd-mm-yy"))
   
