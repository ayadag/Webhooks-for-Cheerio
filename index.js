const express = require("require");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const port = process.env.PORT || 5000;
const url = "https://en.wikipedia.org/wiki/U.S_state";

let states = [];

const fetchData = async () => {
try {
let res = await axios.get(url);
let $ = await cheerio.load(res.data);
$(
"#mw-content-text > div.mw-parser-output > div.div-col"
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
