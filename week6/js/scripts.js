/**
 * Created by endof on 2/11/2016.
 */



$(function() {



    $('#step1').on('click', function(envt) {
        $('#zen-participation').hide('slow');
    });
    $('#step2').on('click', function(envt) {
        $('#zen-participation').show('slow');
    });
    $('#step3').on('click', function(envt) {
        $('.requirements').fadeToggle(4000, 'easeOutQuart');
    });


    $('#step5').on('click', function(){
        $.get('data/spaceSounds.txt', function(data) {
            var parsedData = $.parseJSON(data);
            console.log(parsedData);
            var output = '';
            for (var i=0; i < parsedData.result.length; i++) {
                console.log(parsedData.result[i].description);
                output += '<div class="row">';
                output += '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">';
                output += '     <h2>' + parsedData.result[i].title + '</h2>';
                output += '     <p>' + parsedData.result[i].description + '</p>';
                output += '     <button class="streamURL" data-URI="' + parsedData.result[i].stream_url + '">Stream</button>';
                output += '</div>';
                output += '</div>';
            }
            //console.log(output);
            //output += '<p>' + data.title + '</p>';
            //
            $('.extra1').html(output);
            streamInit();
        });
    });
    $('#step6').on('click', function(evnt) {


    });
    SC.initialize({
        client_id: 'a6bc06ca9bc1a498091a24576eca3683'
    });
    var streamInit = function() {

        $('.streamURL').on('click', function(evnt) {
            console.log(evnt);
            console.log(evnt.target.dataset.uri);

            var streamURL = evnt.target.dataset.uri;
            SC.stream('/tracks/293', function(sound){
                sound.play();
            });
        });
    };
});
