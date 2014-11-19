var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

var blocks = {
  'Fixed': 'Fastened securely in position',
  'Movable': 'Capable of being moved',
  'Rotating': 'Moving in a circle around its center'
};

var parseUrlencoded = bodyParser.urlencoded({ extended: false });

router.route('/')
  .get(function (request, response) {
    var names = Object.keys(blocks);
    if(request.query.limit >= 0){
      response.json(names.slice(0, request.query.limit));
    }else{
      response.json(names);
    }
  })
  .post(parseUrlencoded, function (request, response) {
    var newBlock = request.body;
    blocks[newBlock.name] = newBlock.description;

    response.status(201).json(newBlock.name);
  });

router.route('/:name')
  .get(function (request, response) {
    var description = blocks[request.params.name];

    if(!description){
      response.status(404).json('No description found for ' + request.model);
    }else{
      response.json(description);
    }
  })
  .delete(function (request, response) {
    delete blocks[request.params.name];
    response.sendStatus(200);
  });

module.exports = router;

