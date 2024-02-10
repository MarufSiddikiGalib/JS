let btn = document.querySelector("button");
btn.addEventListener("click", input);

function input() {
  let no = prompt("enter student name");
  btn.textContent = "Name of student : " + no;

}

/*
var time = prompt("enter time");

            if (time < 12) {
              alert("good morning");
            }
              if(time < 16){
               alert("good noon")
              }
                if (time >= 16){
                   alert("good evening")
                }
            
                   else {
                     alert("good night");
                   } 
  */


function chickenFry(chikhen, oil, masala){
       console.log("fry will be ready in " + chikhen * 2  + " min." 
       + " using elements are  " + "chickhen " + chikhen + " piece. "
       + " oil " + oil +  " litter. " + " masala " + masala + " spone. ")

};
   chickenFry(5, 0.5, 5);

