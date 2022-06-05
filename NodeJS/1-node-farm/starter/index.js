var fs = require('fs')
const http = require('http')
const path = require('path')
const url = require('url')
const slugify = require('slugify')
// our own module
const cardHtmlPage = require('./modules/cardHtmlPage')

// const readFile = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(readFile);

// let input = `this is all about avocado ${readFile}.\ncreated on ${Date.now()}`;
// const test = fs.writeFileSync("./txt/output.txt", input);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const jsonData = JSON.parse(data)
const slug = jsonData.map((data) => slugify(data.productName, { lower: true }))
console.log(slug)
// console.log('json Data',jsonData)

const overview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  'utf-8'
)
const product = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')
const card = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8')

const server = http.createServer((req, res) => {
  console.log('server hit request')
  console.log(url.parse(req.url, true))
  const {
    query: { id },
    pathname,
  } = url.parse(req.url, true)
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' })
    const cardResult = jsonData
      .map((cardData) => cardHtmlPage(card, cardData))
      .join('')
    const result = overview.replace('{%PRODUCT_CARDS%}', cardResult)
    res.end(result)
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' })
    const output = jsonData[id]
    const result = cardHtmlPage(product, output)
    res.end(result)
  } else if (pathname === '/api') {
    /* const data = fs.readFile(
      `${__dirname}/dev-data/data.json`,
      "utf-8",
      (err, data) => {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
      }
    ); */
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.end(data)
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    })
    res.end('<h1>page Not found</h1>')
  }
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening server--- port 8000')
})
