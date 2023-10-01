//ex-1
let square={
    side: 5,
    get area(){
       return this.side**2
    }
}


square.side = 10
console.log(square.area);


//ex-2 //add strings without using join 
function concat(separator, ...strings){
    let returnval = ''
    strings.forEach ((string, i) => {
        if(i == strings.length-1){   //for remove the last '+' sign
            returnval += string;
        }
        else{
            returnval += string + separator;
        }
        
    });
    return returnval;
 }

 console.log(concat('+', 'this', 'is', 'invalid'))


 //ex-3 // use of destructue
let [first, second, third, ...others ]= [1, 2, 3, 4, 5, 6, 7, 8]
//let [a, b, c] = arr;
   console.log(first);
   console.log(second);
   console.log(third);
   console.log(others);

//ex-4 //matchstick house //https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
function matchhouse(house){
    return house * 6 - house +1  //have a bug // when u pass '0' .the output is wrong
}

console.log(matchhouse(0)); 
console.log(matchhouse(1));
console.log(matchhouse(2));
console.log(matchhouse(3));

//fixed one
function matchhouse1(house){
    if(house <= 0){
        return 0
    }
    else{
      return house * 6 - house +1  
    }
}

console.log(matchhouse1(0)); 
console.log(matchhouse1(1));
console.log(matchhouse1(2));
console.log(matchhouse1(3));