var Song = function(name, apiurl, artist, playurl){
    this.name = name;
    this.apiurl = apiurl;
    this.artist = artist;
    this.playurl = playurl;
    var songTags = [];
};

var iWentTooFar = new Song("I Went Too Far", "sampleURL", "Aurora", "sampleURL");
var Queendom = new Song("Queendom", "sampleURL", "Aurora", "sampleURL");
var rainingAtSunset = new Song("Raining at Sunset", "sampleURL", "Chris Thile", "sampleURL");
var halfAcre = new Song("Half Acre", "sampleURL", "Hem", "sampleURL");
var theSilkRoad = new Song("The Silk Road", "sampleURL", "The Sidh", "sampleURL");

iWentTooFar.songTags = ["Alone", "Depressed", "Down"];
Queendom.songTags = ["Happy"];
rainingAtSunset.songTags = ["Rainy", "Contemplative"];
halfAcre.songTags = ["Blah", "Happy"];
theSilkRoad.songTags = ["Desperate", "Dark"];

var songList = [iWentTooFar, Queendom, rainingAtSunset, halfAcre, theSilkRoad];