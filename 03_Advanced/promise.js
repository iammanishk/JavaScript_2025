/*-------------------------------------------*\
|                  PROMISE                    |
\*------------------------------------------*/

// First type of promise
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise is running");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise is done");
});

// Second type of promise
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async task 2 resolved");
});

// Third type of promise
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Manish", email: "iammaanisshhh@gmail.com", age: 21 });
  }, 1000);
});
promiseThree.then((data) => {
  console.log(data.name);
});

// Fourth type of promise
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "Manish", email: "iammaanisshhh@gmail.com", age: 21 });
    } else reject("Error: Something went wrong");
  }, 1000);
});

promiseFour
  .then((data) => {
    console.log(data);
    return data.email;
  })
  .then((email) => {
    console.log(email);
  })
  .catch((error) => {
    console.log(error);
  });


// Fifth type of promise
const proomiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
    if (!error) {
      resolve({ name: "Anubhav", email: "iamanubhav@gmail.com", age: 18 });
    } else reject("Error: Anubhav went wrong");
    }, 1000)
})

async function consumePromiseFive () {
  try{
    const response = await proomiseFive;
    console.log(response);
  }catch{
    console.log("Error occurred");
  }
 
}

consumePromiseFive();

// API fetching using async await
async function randomUserApi(){
  try{
      const response = await fetch('https://api.github.com/users/iammanishk');
      console.log(response);
      
      const data = await response.json();
      console.log(`Name: ${data.name}`);
      console.log(`Location: ${data.location}`);
  }catch{
      console.log("Error occurred");
  }
}
console.log("Random user api👇👇👇👇");

randomUserApi();


fetch('https://api.github.com/users/iammanishk').then((response) => {
  return response.json();
}).then((data) => {
  console.log(`user name is: ${data.login}`);
}).catch((error) => {
  console.log(error);
  
})