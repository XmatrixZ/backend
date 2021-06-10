// const https=require("https");
// const fs=require("fs");

// const hostname = "127.0.0.1";
// const port="3000";

// const home=fs.readFileSync('./index.js')

// https.get("https://v1.nocodeapi.com/xmatrixz/vimeo/nmPEzWLVfnpShpbK/videos",resp=>{
// let data='';
// resp.on("data",chunk=>{
//     data+=chunk;
// });
// resp.on("end",()=>{
//     let jsonData=JSON.parse(data);
//     console.log(jsonData);
// });
// resp.on("error",err=>{
//     console.log("Error:"+err.message);
// })
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require("express");
const https = require("https");
var request = require("request");
const app = express();
const port = 5000;

app.get("/video", (req, res) => {
  // https.get("https://v1.nocodeapi.com/xmatrixz/vimeo/nmPEzWLVfnpShpbK/videos",resp=>{
  // let data='';
  // resp.on("data",chunk=>{
  //     data+=chunk;
  // });
  // resp.on("end",()=>{
  //     let jsonData=JSON.parse(data);
  //     res.send(jsonData);
  //     console.log(jsonData);
  // });
  // resp.on("error",err=>{
  //     console.log("Error:"+err.message);
  // })
  // });
  request(
    "https://v1.nocodeapi.com/xmatrix/vimeo/VHOkxvelSZqqOUoq/videos",
    function (error, respose, body) {
      let jsonData = JSON.parse(body);
      if (!error && respose.statusCode == 200) res.send(jsonData.data);
    }
  );
});

app.listen(port, () => {
  console.log(`Listening to port ${port}....`);
});
