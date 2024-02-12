// const http= require('http');
// const hostname = "localhost";
// const port = 3000;
// const server=http.createServer((req,res) =>{

//     console.log(req.headers);
// });
// server.listen(port,hostname, ()=>{

// });sessionStoragesdsd
// sdsd
var b = 2;
const a = require("fs");

//a.writeFileSync("./new1.txt",b.toLocaleString()+"/n");
a.appendFileSync("./new1.txt",Date.now().toLocaleString()+"\n");
