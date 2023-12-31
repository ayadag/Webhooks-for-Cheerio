const express = require("express");

const axios = require("axios");

const cheerio = require("cheerio");

const app = express();

const port = process.env.PORT || 5000;

const url = "https://www.todaysessay.com/sitemap.xml";


let states = [];


const fetchData = async () => {

try {

let res = await axios.get(url);

let $ = await cheerio.load(res.data);

$(

"pre"

).each((i, e) => {

states.push($(e).text().trim());

});

} catch (e) {

console.log(e);

}

};

fetchData();


app.get("/states", (req, res) => {

res.send(states);

});


app.listen(port, () => console.log("server running"));
