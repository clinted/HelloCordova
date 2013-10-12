$(function() {

    var geolocationPage = $("#geolocationPage");

    var geoWatchId;
    geolocationPage.on( "pageshow", function() {
        geoWatchId = navigator.geolocation.watchPosition( onGeolocationSuccess, onError, { frequency: 1000 } );
    } );

    geolocationPage.on( "pagehide", function() {
        if( geoWatchId ) {
            navigator.geolocation.clearWatch( geoWatchId );
        }
    } );

    function onGeolocationSuccess( position )
    {
        $("#latitude").html("Latitude: " + position.coords.latitude);
        $("#longitude").html("Longitude: " + position.coords.longitude);
        $("#altitude").html("Altitude: " + position.coords.altitude);
    }

    function onError()
    {
        // Do nothing. Should display an alert
    }

});