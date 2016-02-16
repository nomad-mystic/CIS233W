/**
 * Created by endof on 2/6/2016.
 */
$(document).ready(function() {
    // Making tr ui draggable
    $('.draggable tbody').sortable({
        placeholder: "success",
        containment: "parent",
        change: function(evnt, ui) {
            ui.item[0].id = 'active';
            $('tr').on('mouseover', function() {
                return false;
            }).on('mouseout', function() {
                return false;
            });
        },
        deactivate: function() {
            hoverEffect();
        }
    });

    var pathname = window.location.pathname;
    var location = window.location;
    // This changes the pathname to match the XSLT file for each sort
    $('#artist').on('click', function() {
        if (pathname != '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('sortArtist.xml');
        } else if (pathname === '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('sortArtist.xml');
        }
    });
    $('#title').on('click', function() {
        if (pathname != '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('sortTitle.xml');
        } else if (pathname === '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('week5/sortTitle.xml');
        }
    });
    $('#country').on('click', function() {
        if (pathname != '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('sortCountry.xml');
        } else if (pathname === '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('week5/sortCountry.xml');
        }
    });
    $('#company').on('click', function() {
        if (pathname != '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('sortCompany.xml');
        } else if (pathname === '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('week5/sortCompany.xml');
        }
    });
    $('#price').on('click', function() {
        if (pathname != '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('sortPrice.xml');
        } else if (pathname === '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('week5/sortPrice.xml');
        }
    });
    $('#year').on('click', function() {
        if (pathname != '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('sortYear.xml');
        } else if (pathname === '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('week5/sortYear.xml');
        }
    });
    $('#rating').on('click', function() {
        if (pathname != '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('sortRating.xml');
        } else if (pathname === '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location.replace('week5/sortRating.xml');
        }
    });
    $('#assignment').on('click', function() {
        if (pathname != '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml') {
            location = '/student/CIS233W_gregory.jackson_17449/keithmurphy37/CDCatalog.xml';
        }
    });

    // Hover Effect to the Table Roms
    var hoverEffect = function() {
        $('tr').on('mouseover', function(evnt) {
            if (evnt.target.className != 'metaRow') {
                evnt.currentTarget.id = 'info';
            }
        }).on('mouseout', function(evnt) {
            evnt.currentTarget.id = '';
        });
    };
    hoverEffect();
});