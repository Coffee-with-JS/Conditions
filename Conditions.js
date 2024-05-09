

// n = 1-100


// 3 => "Hello" 
// 5 => "World"
// 15 => "HelloWorld"


// let n  = 15;

// if(n%15 == 0){
//     console.log("HelloWorld");
// }
// else if(n%3 == 0){
//   console.log("Hello");
// }
// else if(n%5 == 0){
//   console.log("World");
  
// }


// let hr  = 14  // 0 - 23 
// let min = 55  // 0 - 59





// console.log(hr + ":" + min ) // 2:55 PM



// 9:35 => 9:35 AM 
// 12:45 => 12:45 PM

// 19:35 => 7:35 PM

// 00:56 => 12:56 AM

let hr = 0
let min = 35


if(hr> 12){
    console.log(hr-12 + ":" + min + " PM")
}

else if(hr == 0){
    console.log(12 + ":" + min + " AM")
}

else if(hr <12){
    console.log(hr + ":" + min + " AM")
}

else if(hr == 12){
    console.log(hr + ":" + min + " PM")
}

