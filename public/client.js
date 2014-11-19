$(function(){

  $.get('/blocks', appendToList);

  function appendToList(blocks) {
    var list = [];
    var content, block;
    for(var i in blocks){
      block = blocks[i];
      list.push($('<li>', { html: block }));
    }

    $('.block-list').append(list)
  }
});
