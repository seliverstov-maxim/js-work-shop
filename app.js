$(function(){
  // generate table
  for(var i = 0; i<100; i++){
    var tr = $('<tr></tr>');
    $('#live-field tbody').append(tr);
    console.log($('#live-field tbody'));
    for (var j = 0; j < 100; j++){
      tr.append($('<td>0</td>'));
    }
  }
});
