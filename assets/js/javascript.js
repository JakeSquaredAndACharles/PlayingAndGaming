var playlistEl = document.querySelector('#playlist-container');
var chilltendoEl = document.querySelector('#chilltendo');
var synthwaveEl = document.querySelector('#synthwave');
var superLofiEl = document.querySelector('#superLofi');
var pokeChillEl = document.querySelector('#pokeChill');
var undertaleEl = document.querySelector('#undertale');

var showPlaylist = function (id) {
    var buttonSelected = id;

    if (buttonSelected === "chilltendo") {
        playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4ug4ktSFhisTatqDShUdAR" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
    }
    else if (buttonSelected === "synthwave") {
        playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4TeZZfbu3rbifAjwiAAEq8" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
      
    }
    else if (buttonSelected === "superLofi") {
        playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/3PeWDrXlXk9utHaK2CpEgT" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
   
    }
    else if (buttonSelected === "pokeChill") {
        playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4lBMa9JEuCSIs3NkPEIwvN" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
     
    }
    else if (buttonSelected === "undertale") {
        playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4eSyiMMYG6MRQ6pWkuuDgZ" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
 
    }

};

document.getElementById('chilltendo').addEventListener('click', showPlaylist());
document.getElementById('synthwave').addEventListener('click', showPlaylist());
document.getElementById('superLofi').addEventListener('click', showPlaylist());
document.getElementById('pokeChill').addEventListener('click', showPlaylist());
document.getElementById('undertale').addEventListener('click', showPlaylist());
