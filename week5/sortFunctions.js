/**
 * Created by endof on 2/6/2016.
 */



$(document).ready(function() {

    $('#artist').on('click', function() {
        window.location.replace('sortArtist.xml');
    });
    $('#title').on('click', function() {
        window.location.replace('sortTitle.xml');
    });
    $('#country').on('click', function() {
        window.location.replace('sortCountry.xml');
    });
    $('#company').on('click', function() {
        window.location.replace('sortCompany.xml');
    });

});