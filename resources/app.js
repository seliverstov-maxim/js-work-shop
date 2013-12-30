create_field = function() {
    var rows_count = $('#rows_count').value
    var cols_count = $('#cols_count').value

    var field = init_field(cols_count, rows_count);

}

init_field = function(w, h) {
    var t_field = []
    for( var i = 0; i < w; i++) {
        field[i] = []
        for( var j = 0; j < h; j++) {
            field[i][j] = 0;
        }
    }
    return t_field;
}

draw_field = function(field) {
    $('tbody').html('');

    for( var i = 0; i < w; i++) {
        var tr = $('<tr></tr>');
        $('tbody').append(tr);
        for( var j = 0; j < h; j++) {
            td = $('<td></td>>')
            tr.append(td);
        }
    }
}