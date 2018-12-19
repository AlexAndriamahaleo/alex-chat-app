const express = require('express');
const http = require('https');
const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {

  // Get the posts data from an external api
  http.get('https://jsonplaceholder.typicode.com/posts', (resp) => {
    let datas = '';

    resp.on('data', (chunk) => {
      datas += chunk;
    });

    resp.on('end', () => {
      let data = JSON.parse(datas);

      // Add the date property to the data
      data.forEach(function(post) {
        post['date'] = Date.now();
      });

      //To resolve an error
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      res.json(data);
    });

  }).on("error", (err) => {
    res.json("Error: " + err.message);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
