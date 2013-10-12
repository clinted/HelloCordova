$(function() {

    var clickButton = $("#clickButton");

    clickButton.on( "click", function(){
        navigator.notification.alert( "You clicked me!", onClickButtonSuccess, "Click", "Ok");
    } );

    function onClickButtonSuccess() {
        clickButton.html("Clicked");
    }

});