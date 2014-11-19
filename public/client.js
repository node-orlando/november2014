$(function(){

  $.get('/blocks', appendToList);

  function appendToList(blocks) {
    var list = [];
    var content, block;
    for(var i in blocks){
      block = blocks[i];
      content = '<a href="/blocks/' + block + '">' + block + '</a>';
      list.push($('<li>', { html: content }));
    }

    $('.block-list').append(list)
  }
});
