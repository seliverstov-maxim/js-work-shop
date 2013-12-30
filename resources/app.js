create_field = function() {
    var rows_count = $('#rows_count').val();
    var cols_count = $('#cols_count').val();

    var field = init_field(cols_count, rows_count);
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

draw_field = function(field) {
    $('tbody').html('');

    for( var i = 0; i < field.length; i++) {
        var tr = $('<tr></tr>');
        $('tbody').append(tr);
        for( var j = 0; j < field[i].length; j++) {
            td = $("<td><a hfre='#' data-row='" + i + "' data-col='" + j + "'><span class='" + (field[i][j] == 1 ? 'black' : 'white') + "'></span></a></td>");
            tr.append(td);
        }
    }
};

