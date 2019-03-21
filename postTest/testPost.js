const fetch = require('node-fetch');
const data = require("./input.json");
let users = data.friends;

async function filterUsersByName(userData, name){
   const url = "http://localhost:1337/fortlax/selectusers";
   const params = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
         },
      body: JSON.stringify({userData, filter :name})
   }
   return fetch(url, params).then(r => r.json()).catch(() => "Something went wrong :( Is the server running?");
    
}
// If the server is running this is the expected output, o.w. it is the error message.

// Expected: same data was sent, since the optional filter is missing.
filterUsersByName(users).then(r => console.log(r));

// Expected: [{id: 25, name: "Bass Greer"}]
filterUsersByName(users, "Bass").then(r => console.log(r));

// Expected: [], since there are no that have the string "Tomas" in their name.
filterUsersByName(users, "Tomas").then(r => console.log(r));

// Expected: [], since there are is no body or filter.
filterUsersByName().then(r => console.log(r));

// Expected: [], since there is no userData.
filterUsersByName(undefined, "Bass").then(r => console.log(r));

// Expected: "somestring" since there is  
filterUsersByName("somestring").then(r => console.log(r));

// Expected: [{id: -1, name: "James"}]
filterUsersByName([{id: -1, name: "James"}, "someString", 123], "James").then(r => console.log(r));
