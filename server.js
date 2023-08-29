const express = require("express");

const app = express();

app.get("/greeting", (request, response) => {
  response.send("<h1>What's up</h1>");
});

app.get("/greeting/:name", (request, response) => {
  response.send("<h1>What's up</h1>" + request.params.name);
});

app.listen(3000, () => {
  console.log("Greeting initialized");
});
