render = function(field){
  // generate table
    $('#live-field tbody').html('');
  for(var i = 0; i<100; i++){
    var tr = $('<tr></tr>');
    $('#live-field tbody').append(tr);
    for (var j = 0; j < 100; j++){
      tr.append($('<td>'+field[i][j]+'</td>'));
    }
  }
};

initField = function() {
    var field = []
    for(var i = 0; i < 100; i++){
        field[i] = []
        for(var j = 0; j < 100; j++){
            field[i][j] = 0
        }
    }
    field[50][50] = 1
    return field;
}

life = function(field) {
    var new_field = []
    for(var i = 0; i < 100; i++){
        new_field[i] = []
        for(var j = 0; j < 100; j++){
            new_field[i][j] = 0
            if field[i][j]
        }
    }
}

count_life_cells = function(x, y, field) {

}

$(function(){
    var field = initField();
    render(field);

});

