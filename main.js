function hideLogin() {
    document.getElementById("login").style.display = "none";
    document.getElementById("welcome").style.display = "initial";
}

function spotifyPlay() {
    document.getElementById("editSongs").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("playMusic").style.display = "initial";
}

function editTags() {
    document.getElementById("editSongs").style.display = "none";
    document.getElementById("playMusic").style.display = "none";
    document.getElementById("welcome").style.display = "initial";
}

function songEdit() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("playMusic").style.display = "none";
    document.getElementById("editSongs").style.display = "initial";
}