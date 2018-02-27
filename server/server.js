let express = require('express');
let app = express();

app.use(express.static('server/public'));

const port = 12345;

app.listen(port, function(){
  console.log(`Server listening on port ${port}`);
})
