$(function() {

    var webservicePage = $("#webservicePage");
    var callWebserviceButton = $("#callWebserviceButton");

    callWebserviceButton.click( function() {
        loadRepos();
    });

    function loadRepos() {
        $.ajax("https://api.github.com/legacy/repos/search/javascript").done(function(data) {
            var i, repo;
            $.each(data.repositories, function (i, repo) {
                $("#allRepos").append("<li><a href='repodetail.html?owner=" + repo.username + "&name=" + repo.name + "'>"
                    + "<h4>" + repo.name + "</h4>"
                    + "<p>" + repo.username + "</p></a></li>");
            });
            $("#allRepos").listview("refresh");
        });
    }

});