render = function(field){
  // generate table
    $('#live-field tbody').html('');
  for(var i = 0; i<100; i++){
    var tr = $('<tr></tr>');
    $('#live-field tbody').append(tr);
    for (var j = 0; j < 100; j++){
      tr.append($('<td class="'+(field[i][j] == 1 ? 'red' : 'white')+'">&nbsp;</td>'));
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
    field[50][50] = 1;
    field[51][51] = 1;
    field[51][52] = 1;
    field[50][52] = 1;
    field[49][52] = 1;
    return field;
}

life = function(field) {
    var new_field = []
    for(var i = 0; i < 100; i++){
        new_field[i] = []
        for(var j = 0; j < 100; j++){
            new_field[i][j] = 0;
            live_cell_count = count_life_cells(i, j, field);
            if (live_cell_count == 3){
              new_field[i][j] = 1
            } else if (live_cell_count == 2){
              new_field[i][j] = field[i][j];
            }
        }
    }
    return new_field;
}

count_life_cells = function(x, y, field) {
  var count = 0;
  for (var i = x-1; i<=x+1; i++){
    for (var j = y-1; j<=y+1; j++){
      if ((i == x && j == y) || i < 0 || j < 0 || i >= 100 || j >= 100){
        continue;
      }
      if (field[i] && field[i][j] == 1){
        count++;
      }
    }
  }
  return count;
}

var field = [];
$(function(){
    field = initField();
    render(field);
    setInterval(function(){
      field = life(field);
      render(field);
    },700);
});

