const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];          // 2 type of initialization
const num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

  console.log(arr[arr.length-3]);
  console.log(num[5]);
  console.log(arr.indexOf(10,6)); // search start from index 6

  //push
  num.push(10);
  console.log(num[num.length-1]);

  //unshift
  num.unshift(123);
  console.log(num[0]);

  //pop // pop also return th last value
  num.pop();

  //shift  //also return
  num.shift()

  //include  // return true of false . the element exist or not //work on premetive datatype not ref datatype
  console.log(arr.includes(12));

  //find method //work on ref and premitive datatype

  let info = [{name : "Argho", age: 25},
              {name : "Galib", age: 23},
              {name : "Rizvi", age: 22}]

              // for 2 argument(element). also 1
              console.log(info.find(function(element1, element2){ 
                   return element1.name === "Galib"
              }))

              //for 1 argument(element) only  // arrow function
              console.log(info.find(element => element.name === "Galib"))

              // arrow function
              console.log(info.find((element) => { 
                return element.name === "Galib"
           }))

     // concat, slice & spread
     let name1 = [ "Argho", "Sifat", "Safkat"]
     let name2 = [ "Galib", "Asif", "Niloy"]
     //let name3 = name1.concat(name2)
     let name3 = [...name1, ...name2]  //spread. same as concat

         console.log(name1.concat(name2));
         console.log(name3.slice(2,4))
            
      //join
      let course2 = ['C', 'I', 'R', 'C', 'U', 'I', 'T'];
      course2 = course2.join('  ')

     // console.log(course2.join('  '));
      console.log(course2);

      // filter
        let course3 = 
          [ {name: 'math 3', marks: 82},
            {name: 'math 4', marks: 80},
            {name: 'TOC', marks: 90},
            {name: 'accounting', marks: 92},
            {name: 'device', marks: 85} ]

            console.log(course3.filter(element => {
                return element.marks >= 90;
            }))

            console.log(course3.filter(element => element.marks >= 82))

            // mapping
            console.log(course3.map(element => element.marks / 2))