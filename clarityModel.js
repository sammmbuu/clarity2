class ClarityModel {
    constructor(){
        var self = this;
        
        self.selectedTags = ko.observableArray([]);
        self.tags = ko.observableArray([]);
        self.songs = ko.observableArray(songList);
        
        
        self.playlist = ko.observableArray([]);
        
        self.createPlaylist = function() 
        {
            var found = false;
            self.playlist.removeAll();
            for(var i = 0; i < songList.length; i++) 
            {
                found = false;
                for(var j = 0; j < songList[i].songTags.length; j++) 
                {
                    for(var k = 0; k < self.selectedTags().length; k++) 
                    {
                        if(songList[i].songTags[j] === self.selectedTags()[k])
                        {
                            self.playlist.push(songList[i]);
                            found = true;
                            break;
                        }
                    }
                    if(found)
                    {
                        break;
                    }
                }
            }
        }
        
        self.loadTags = function()
        {
            for(var i = 0; i < songList.length; i++)
            {
                for(var j = 0; j < songList[i].songTags.length; j++)
                {
                    if(!self.tags().includes(songList[i].songTags[j]))
                    {
                        self.tags.push(songList[i].songTags[j]);
                    }
                }
            }
        }
    }
}