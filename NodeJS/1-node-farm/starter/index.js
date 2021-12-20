var fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

// const readFile = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(readFile);

// let input = `this is all about avocado ${readFile}.\ncreated on ${Date.now()}`;
// const test = fs.writeFileSync("./txt/output.txt", input);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is overview");
  } else if (pathName === "/product") {
    res.end("this is product");
  } else if (pathName === "/api") {
    /* const data = fs.readFile(
      `${__dirname}/dev-data/data.json`,
      "utf-8",
      (err, data) => {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
      }
    ); */
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>page Not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening server--- posrt 8000");
});
