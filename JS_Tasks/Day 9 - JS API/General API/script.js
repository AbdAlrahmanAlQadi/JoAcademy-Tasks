
// function getData() {
//   return new Promise(function (resolve, reject) {
//     let users = ["Qadi"];
//     if (users.length > 0) {
//       resolve("Users Found");
//     } else {
//       reject("No Users Found");
//     }
//   });
// }
// getData().then(
//     (resolvedValue) =>console.log(resolvedValue),
//     (rejectedValue) =>console.log("Rejected, " + rejectedValue)
// );


// function getData() {

//     let users = ["Qadi"];
//     if (users.length > 0) {
//         return Promise.resolve("Users Found");
//       } else {
//         return Promise.reject("No Users Found");
//       }
// }
// getData().then(
//     (resolvedValue) =>console.log(resolvedValue),
//     (rejectedValue) =>console.log("Rejected, " + rejectedValue)
// );



async function getData() {

    let users = ["QADI"];
    if (users.length > 0) {
        return "Users Found";
      } else {
        throw new Error("No Users Found"); 
      }
}

console.log(getData());

getData().then(
    (resolvedValue) =>console.log(resolvedValue),
    (rejectedValue) =>console.log("Rejected, " + rejectedValue)
);





function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  // async await function 
  const add = async function (x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
  };
  
  add(10).then((v) => {
    console.log(v); // prints 60 after 4 seconds.
  });
  
  // async function expression used as an IIFE
  (async function (x) {
    const p1 = resolveAfter2Seconds(20);
    const p2 = resolveAfter2Seconds(30);
    return x + (await p1) + (await p2);
  })(10).then((v) => {
    console.log(v); // prints 60 after 2 seconds.
  });