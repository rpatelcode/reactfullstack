const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.send({ hi: "there"});
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT);

//  https://whispering-meadow-63984.herokuapp.com/ | https://git.heroku.com/whispering-meadow-63984.git
