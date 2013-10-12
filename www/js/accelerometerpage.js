$(function() {

    var accelerometerPage = $("#accelerometerPage");

    var accWatchId;
    accelerometerPage.on( "pageshow", function() {
        accWatchId = navigator.accelerometer.watchAcceleration(onAccelerometerSuccess, onError, { frequency: 1000 } );
    } );

    accelerometerPage.on( "pagehide", function() {
        if( accWatchId ) {
            navigator.accelerometer.clearWatch(accWatchId);
        }
    } );

    function onAccelerometerSuccess( a )
    {
        $("#aX").html("X: " + a.x);
        $("#aY").html("Y: " + a.y);
        $("#aZ").html("Z: " + a.z);
        $("#aTime").html("Time: " + a.timestamp);
    }

    function onError()
    {
        // Do nothing. Should display an alert
    }

});