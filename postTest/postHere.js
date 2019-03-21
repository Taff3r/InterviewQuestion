const express = require('express');
const app = express();
app.use(express.json());

app.listen(1337, () => {
   console.log("Running on :1337");
});


app.post("/fortlax/selectusers", (req, resp) => {
   let data = req.body.userData;
   let filter = req.body.filter;
   if(filter){
     data = data.filter(u => u.name.includes(filter));
   }
   resp.json(JSON.stringify(data));
});
