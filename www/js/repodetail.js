$(function() {

    $("#reposDetail").on("pageshow", function(event) {
        var owner = getUrlVars().owner;
        var name = getUrlVars().name;
        loadRepoDetail(owner,name);
    });

    function loadRepoDetail(owner,name) {
        $.ajax("https://api.github.com/repos/" + owner + "/" + name).done(function(data) {
            var repo = data;
            console.log(data);

            $("#repoName").html("<a href='" + repo.homepage + "'>" + repo.name + "</a>");
            $("#description").text(repo.description);
            $("#forks").html("<strong>Forks:</strong> " + repo.forks + "<br><strong>Watchers:</strong> " + repo.watchers);

            $("#avatar").attr('src', repo.owner.avatar_url);
            $("#ownerName").html("<strong>Owner:</strong> <a href='" + repo.owner.url + "'>" + repo.owner.login + "</a>");
        });
    }


    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

});