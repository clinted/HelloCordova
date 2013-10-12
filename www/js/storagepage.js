$(function() {

    var storagePage = $("#storagePage");
    var saveButton = $("#saveButton");

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