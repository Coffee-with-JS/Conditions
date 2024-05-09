
// a => Positive or not positive 

// if(a>0){
//     console.log("Positive")
// }
// else{
//     console.log("Not Positive")
// }

// let a = 56
// a>0 ? console.log("Positive") : console.log("Not Positive")

// console.log(a> 0 ? "Positive" : "Not Positive")

// let ans = a>0 ? "Positive" : "Not Positive"

// console.log(ans)


// lets take a number and check it is positive , negative or zero


// let a = -67

// let ans =  a>0 ? "Positive" : (a<0 ? "Negative": "Zero")
// console.log(ans)


// let take 3 numbers and find the biggest out of them, 
// if all number are same then print "All are same"


let a = 1000
let b = 1000 
let c = 1000


let ans = a>b&&a>c ? a : 
                       b>c ? b :
                                a==b&&b==c ? "All are same" : c
       
console.log(ans)