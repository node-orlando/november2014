var express = require('express');
var app = express();

app.use(express.static('public'));

var blocks = [ 'Fixed', 'Movable', 'Rotating' ];

app.get('/blocks', function(request, response) {
  response.json(blocks);
});

app.listen(3000);
