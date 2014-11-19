var express = require('express');
var app = express();

app.use(express.static('public'));

var blocks = [ 'Fixed', 'Movable', 'Rotating' ];

app.get('/blocks', function(request, response) {
  // To test this with curl, run:
  // curl http://localhost:3000/blocks?limit=2
  if(request.query.limit >= 0){
    response.json(blocks.slice(0, request.query.limit));
  }else{
    response.json(blocks);
  }
});

app.listen(3000);
