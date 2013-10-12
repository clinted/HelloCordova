$(function() {

    // -- Controls
    var homePage = $("#homePage");
    var devicePage = $("#devicePage");
    var accelerometerPage = $("#accelerometerPage");
    var geolocationPage = $("#geolocationPage");
    var cameraPage = $("#cameraPage");
    var storagePage = $("#storagePage");
    var clickButton = $("#clickButton");
    var saveButton = $("#saveButton");


    // -- Event handlers

    // once the device ready event fires, you can safely do your thing
    document.addEventListener("deviceready",onDeviceReady,false);
    function onDeviceReady()
    {
        console.log( "onDeviceReady. You should see this message in the output window.");
    }

    clickButton.on( "click", function(){
        navigator.notification.alert( "You clicked me!", onClickButtonSuccess, "Click", "Ok");
    } );

    function onClickButtonSuccess() {
        clickButton.html("Clicked");
    }

    devicePage.on( "pageshow", function() {
        $("#deviceName").html(device.name);
        $("#deviceCordova").html(device.cordova);
        $("#devicePlatform").html(device.platform);
        $("#deviceUuid").html( device.uuid);
        $("#deviceVersion").html( device.version);
    } );

    var accWatchId
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


    var geoWatchId
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

    cameraPage.on( "pageshow", function() {
        navigator.camera.getPicture( onCameraSuccess, onError, { quality:50, destinationType: Camera.DestinationType.FILE_URI } );
    } );

    function onCameraSuccess( fileUri )
    {
        $("#imageUri").html( fileUri );
    }


    function onError()
    {
        // Do nothing. Should display an alert
    }

    storagePage.on( "pageshow", function() {
        var personName = window.localStorage.getItem("personName");
        if( personName != null ) {
            $("#name").val(personName);
        }
    } );

    saveButton.click( function() {
        var inputName = $("#name").val();
        window.localStorage.setItem("personName", inputName );
        $.mobile.changePage("#homePage");
    });

});


