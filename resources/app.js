create_field = function() {
    var rows_count = $('#rows_count').val();
    var cols_count = $('#cols_count').val();

    field = init_field(cols_count, rows_count);
    draw_field(field);
};

init_field = function(w, h) {
    var t_field = [];
    for( var i = 0; i < w; i++) {
        t_field[i] = [];
        for( var j = 0; j < h; j++) {
            t_field[i][j] = 0;
        }
    }
    return t_field;
};

update_cell = function(obj) {
    c = $(obj).data('col');
    r = $(obj).data('row');

    field[r][c] = field[r][c] == 1 ? 0 : 1;
    draw_field(field);
};

next = function() {
    var t_field = [];
    for (var i = 0; i < field.length; i++){
        t_field[i] = [];
        for (var j = 0; j < field[i].length; j++){
            t_field[i][j] = 0;
            if (count_life_cells(i, j, field) == 3) {
                t_field[i][j] = 1;
            } else if(count_life_cells(i, j, field) == 2) {
                t_field[i][j] = field [i][j];
            }
        }
    }
    field = t_field;
    draw_field(field);
};

start = function() {
    id = setInterval(function() { next(); }, 300);

};

stop = function() {
    clearInterval(id);
};

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
};

draw_field = function(field) {
    $('tbody').html('');

    for( var i = 0; i < field.length; i++) {
        var tr = $('<tr></tr>');
        $('tbody').append(tr);
        for( var j = 0; j < field[i].length; j++) {
            td = $("<td><a hfre='#' onclick='update_cell(this)' data-row='" + i + "' data-col='" + j + "'><span class='" + (field[i][j] == 1 ? 'black' : 'white') + "'></span></a></td>");
            tr.append(td);
        }
    }
};
