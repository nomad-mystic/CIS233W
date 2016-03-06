/**
 * Created by endof on 2/18/2016.
 */
$(function() {
    $('#dob').datepicker();
    $('#info').accordion({
        heightStyle: "content"
    });
    $( "#draggable" ).draggable({
        revert: true
    });
});