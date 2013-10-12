$(function() {

    var cameraPage = $("#cameraPage");

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

});