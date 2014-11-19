var express = require('express');
var app = express();

app.use(express.static('public'));

var blocks = {
  'Fixed': 'Fastened securely in position',
  'Movable': 'Capable of being moved',
  'Rotating': 'Moving in a circle around its center'
};

app.get('/blocks', function(request, response) {

  var blockNames = Object.keys(blocks);

  // To test this with curl, run:
  // curl http://localhost:3000/blocks?limit=2
  if(request.query.limit >= 0){
    response.json(blockNames.slice(0, request.query.limit));
  }else{
    response.json(blockNames);
  }
});


app.get('/blocks/:name', function(request, response) {
  var description = blocks[request.params.name];
  if(!description){
    response.status(404).json('No description for ' + request.params.name);
  }else{
    response.json(description);
  }
});


app.listen(3000);
