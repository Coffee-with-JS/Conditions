// switch case:

// let take 3 colors("red", "green", "yellow") => traffic

// if color is red => stop
// if color is green => go
// if color is yellow => wait


// let color = "red"

// if(color == "red"){
//     console.log("Stop")
// }
// else if(color == "green"){
//     console.log("Go")
// }
// else if(color == "yellow"){
//     console.log("Wait")
// }


// let color = "green"

// let choices = color // red, green, yellow

// switch(choices){
//     case "red":  console.log("Stop")
//                break   
//     case "green": console.log("Go")
//                 break
//     case "yellow": console.log("Wait")
//                  break
//     default: 
//      console.log("Invalid Color")   

// }








// take a number check it is positive, negative or zero using switch

// let num = -58

// let choices = num > 0 // true or false

// switch(choices){
//     case true: console.log("positive")
//                   break;
//     case false:  if(num < 0){
//                     console.log("Negative")
//                 }
//                 else{
//                     console.log("Zero")
//                 }
    
// }

// switch(choices){
//     case true: console.log("positive")
//                   break;
//     case false:  
//                  // negative, zero
//                 let choices1 = num < 0
//                 switch(choices1){
//                   case true: console.log("Negative")
//                              break;
//                    case false: console.log("Zero")
//                 }
    
// }










// take 3 numbers and find the biggest number out of them using switch

let a = 10 
let b = 20 
let c = 15

let choices = a>b&&a>c  // true or false 


switch(choices){

    case true: 
              console.log("Biggest Number is",a)
              break;
    case false:
           let choices1 = b>c 
           switch(choices1){
             case true: console.log("Biggest Number is",b)
                        break;
              case false: console.log("Biggest Number is",c)
           }
}