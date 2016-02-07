/**
 * Created by endof on 2/6/2016.
 */



$(document).ready(function() {

    // Making tr ui draggable
    $('.draggable tbody').sortable();
    //$('.draggable tr').disableSelection();

    // This changes the pathname to match the XSLT file for each sort
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
    $('#price').on('click', function() {
        window.location.replace('sortPrice.xml');
    });
    $('#year').on('click', function() {
        window.location.replace('sortYear.xml');
    });
    $('#rating').on('click', function() {
        window.location.replace('sortRating.xml');
    });
    $('#assignment').on('click', function() {
        window.location.replace('CDCatalog.xml');
    });

     //Hover Effect to the Table Roms
    $('tr').on('mouseover', function(evnt) {
        evnt.currentTarget.id = 'info';
    }).on('mouseout', function(evnt) {
        evnt.currentTarget.id = '';
    });
});