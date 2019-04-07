var Song = function(name, apiurl, artist, playurl){
    this.name = name;
    this.apiurl = apiurl;
    this.artist = artist;
    this.playurl = playurl;
    var tags = [];
};

var iWentTooFar = new Song("I Went Too Far", "sampleURL", "Aurora", "sampleURL");
var Queendom = new Song("Queendom", "sampleURL", "Aurora", "sampleURL");
var rainingAtSunset = new Song("Raining at Sunset", "sampleURL", "Chris Thile", "sampleURL");
var halfAcre = new Song("Half Acre", "sampleURL", "Hem", "sampleURL");
var theSilkRoad = new Song("The Silk Road", "sampleURL", "The Sidh", "sampleURL");

iWentTooFar.tags = ["Alone", "Depressed", "Down"];
Queendom.tags = ["Happy"];
rainingAtSunset.tags = ["Rainy", "Contemplative"];
halfAcre.tags = ["Blah", "Happy"];
theSilkRoad.tags = ["Desperate", "Dark"];

var songs = [iWentTooFar, Queendom, rainingAtSunset, halfAcre, theSilkRoad];