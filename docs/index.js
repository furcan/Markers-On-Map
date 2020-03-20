/*!
* Markers On Map ('https://github.com/furcan/Markers-On-Map')
* Version: 1.4.0
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2020 Markers On Map, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

// DEMO: Markers On Map - Init and Run on
MarkersOnMap.Init({
    googleApiKey: 'AIzaSyBUV6KcfZOEDTkTMi0OZ1PcVL7QQHCL8U4', // this key restricted except this project
    googlePlacesApiEnabled: true,
    mapTypeId: 'terrain',
    mapHeight: '500px',
    mapScrollWheel: false,
    markerObjects: [
        {
            markerLat: 39.925018,
            markerLong: 32.836956,
            markerTitle: 'This marker getting content from Google Places API',
            markerContentFromGoogleQuery: 'Anitkabir',
            markerCallback: function () {
                Notiflix.Notify.Success('This is a marker click callback. (Anitkabir)');
            },
            closeCallback: function () {
                Notiflix.Notify.Info('This is a close button callback. (Anitkabir)');
            },
        },
        {
            markerLat: 39.935986,
            markerLong: 32.802826,
            markerTitle: 'This marker getting content from Google Places API',
            markerContentFromGoogleQuery: 'Ataturk House',
            markerCallback: function () {
                Notiflix.Notify.Success('This is a marker click callback. (Ataturk House)');
            },
            closeCallback: function () {
                Notiflix.Notify.Info('This is a close button callback. (Ataturk House)');
            },
        },
        {
            markerLat: 39.940516,
            markerLong: 32.823702,
            markerTitle: 'This marker has it\'s own custom content',
            markerContent: '<h3 style="text-align:center;margin:0 0 10px;">Custom Marker Content</h3><p style="text-align:center; margin:0 0 10px;">Custom Marker Description</p><button onclick="Notiflix.Notify.Success(\'Custom Button Action\')" style="display:table;margin:auto;padding:8px 12px;border-radius:20px;font-weight:700;background:#502974;color:#fff;cursor:pointer;">Custom Button</button>',
            // markerContentFromGoogleQuery: 'Ataturk Culture Center',
            markerCallback: function () {
                Notiflix.Notify.Success('This is a marker click callback. (Custom Content)');
            },
            closeCallback: function () {
                Notiflix.Notify.Info('This is a close button callback. (Custom Content)');
            },
        }
    ],
});
MarkersOnMap.Run('div#GoogleMaps', function cllbck() {
    Notiflix.Notify.Success('The map created successfully.');
});
// DEMO: Markers On Map - Init and Run off

// DEMO: Tooltip on
function furcanTooltip(tooltip) {
    $('body > .tooltip').remove();
    $(tooltip).tooltip({
        trigger: 'hover',
        container: 'body',
    });
}
furcanTooltip('[data-toggle="tooltip"]');

$(document).on('click', function () {
    if ($('body > .tooltip').length > 0) {
        $('body > .tooltip').remove();
    }
});
// DEMO: Tooltip off

// DEMO: Map Markers Title Tooltip on
$(window).on('load', function () {
    var tooltipTimeout = setTimeout(function () {
        $(document).on('mouseenter', 'div#GoogleMaps', function () {
            furcanTooltip($('div#GoogleMaps *[title]'));
            clearTimeout(tooltipTimeout);
        });
    }, 1000);
});
// DEMO: Map Markers Title Tooltip off

// DEMO: Notiflix on
Notiflix.Notify.Init({
    position: 'right-bottom',
    cssAnimationStyle: 'from-bottom',
});
// DEMO: Notiflix off
