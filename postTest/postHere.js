const express = require('express');
const app = express();
app.use(express.json());

app.listen(1337, () => {
   console.log("Running on :1337");
});


app.post("/fortlax/selectusers", (req, resp) => {
   let data = req.body;
   let filter = req.body.filter;

   resp.setHeader('Content-Type', 'application/json');
   data = bodyControl(data, "userData");
   switch(data){
      // If body is empty.
      case "no-body":
         console.log("No");
         resp.json([]);
         break;
      // If body is missing user arr.
      case "bad-body":
         console.log("Bad");
         resp.json([]);
         break;
      default:
         if(filter){
           data = data.filter(u => u.name.includes(filter));
         }     
         resp.json(data);
   }
});
   
function bodyControl(body, pName){
   console.log(body);
   if(Object.keys(body).length === 0){
     return "no-body"; 
   }else if(!body[pName]){
     return "bad-body";
   }
   return body[pName];
}
