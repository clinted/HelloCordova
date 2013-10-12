$(function() {

    var devicePage = $("#devicePage");

    devicePage.on( "pageshow", function() {
        $("#deviceName").html("Device Name: " + device.name);
        $("#deviceCordova").html("Cordova: " + device.cordova);
        $("#devicePlatform").html("Platform: "+ device.platform);
        $("#deviceUuid").html( "Device Id: " + device.uuid);
        $("#deviceVersion").html( "Device Version: " + device.version);
    } );

});
