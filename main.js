function hideLogin() {
    clarityModel.loadTags();
    document.getElementById("login").style.display = "none";
    document.getElementById("welcome").style.display = "initial";
}

function spotifyPlay() {
    clarityModel.loadTags();
    clarityModel.createPlaylist();
    document.getElementById("editSongs").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("playMusic").style.display = "initial";
}

function editTags() {
    clarityModel.loadTags();
    clarityModel.createPlaylist();
    document.getElementById("editSongs").style.display = "none";
    document.getElementById("playMusic").style.display = "none";
    document.getElementById("welcome").style.display = "initial";
}

function songEdit() {
    clarityModel.loadTags();
    clarityModel.createPlaylist();
    document.getElementById("welcome").style.display = "none";
    document.getElementById("playMusic").style.display = "none";
    document.getElementById("editSongs").style.display = "initial";
}

function showChildren(e) {
    var listTags = document.querySelectorAll('.listTags');
    for(var i = 0; i < listTags.length; i++)
    {
        listTags[i].style.display = "none";
    }
    var elements = e.querySelectorAll('li');
    for(var i = 0; i < elements.length; i++)
    {
        if(elements[i].style.display === "none")
        {   
            elements[i].style.display = "block";
        }
        else if(elements[i].style.display !== "none")
        {
            elements[i].style.display = "none";
        }
    }
}