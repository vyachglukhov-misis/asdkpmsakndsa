const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());
app.get('/', function routeHandler(req, res) {
    res.send('ok');
  });
app.listen(PORT, () => {
    console.log("server is going on PORT ", PORT);
})