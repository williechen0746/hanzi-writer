const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
};

const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(req.url.split("?")[0] || "");
  let filePath = pathname === "/" ? "/index.html" : pathname;
  filePath = path.join(process.cwd(), filePath);

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});