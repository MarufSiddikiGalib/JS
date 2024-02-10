/*let lecture = 10
let section = 5
let title = "javascript"

const course={ //course is object
   lecture : 10,
   section : 5,
   title   : "javascript",

   notes : {
     introduction : "welcome to javascript"
   },

 enroll(){ //method

     console.log("you are successfully enroled");
 }

}

course.enroll()
console.log(course.lecture);*/

// Factory fuction

/*function createCourse(title){

    return{
          title : title,
          enroll() {  //method

            console.log("you are successfully enroled");
          }
        }
}

const course = createCourse("javascript");

 course.enroll()
 console.log(course);
 */


 //Constractor function

 function Course (title){
        this.title = title;
        this.enroll = function(){
            console.log("you are successfully enroled");
        }

 }
     const course = new Course("javascript"); //new keyword is a alt of return. 
                                              //if we dont use new we have to return thr function.

       course.enroll();
       delete course.title; // for delete the variable
       console.log(course.title);