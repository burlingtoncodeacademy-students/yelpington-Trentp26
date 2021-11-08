const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//middleware to set up the static server to access public only
app.use(express.static("client"));
//middleware to make reading URL encoded post bodies easier to read
app.use(express.urlencoded({ extended: true }));

// to get the list of restaurants api endpoint
app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/api/restaurantId.json");
});

//to get a single restaurant Api endpoint
app.get("/api/:restaurantId", (req, res) => {
  res.sendFile(__dirname + `/api/${req.params.restaurantId}.json`);
});

//starting the port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
