

var displayPlaylist = function (data) {


    if (id === "chilltendo") {
        playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4ug4ktSFhisTatqDShUdAR" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
    }
    else if (id === "synthwave") {
        playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4TeZZfbu3rbifAjwiAAEq8" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
      
    }
    else if (id === "superLofi") {
        playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/3PeWDrXlXk9utHaK2CpEgT" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
   
    }
    else if (id === "pokeChill") {
        playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4lBMa9JEuCSIs3NkPEIwvN" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
     
    }
    else if (id === "undertale") {
        playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4eSyiMMYG6MRQ6pWkuuDgZ" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
 
    }

};