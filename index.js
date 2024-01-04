const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const port = process.env.PORT || 5000;
//const url = "https://www.todaysessay.com";

let states = [];

async function fetchData(url){
try {
let res = await axios.get(url);
let $ = await cheerio.load(res.data);
$(
"a"
).each((i, e) => {
states.push($(e).attr('href'));
});
} catch (e) {
console.log(e);
}
  
  //res.send(states);
  
};
//fetchData();
app.get("/states", (req, res) => {
  let url=req.query["domain"];
  fetchData(url);
  res.send(states);
  states = [];
});
app.listen(port, () => console.log("server running"));
