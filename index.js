const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const port = process.env.PORT || 5000;
var url = " ";

let states = [];

/*const fetchData = async () => {
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
};*/

//fetchData();

app.get("/states", (req, res) => {
   let url=req.query["domain"];

   fetchData();

   const fetchData = async () => {
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
};
   
res.send(states);
   
});

app.listen(port, () => console.log("server running"));
