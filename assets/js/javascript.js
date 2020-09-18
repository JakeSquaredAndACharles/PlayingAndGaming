var playlistEl = document.querySelector('#playlist-container');
var chilltendoEl = document.querySelector('#chilltendo');
var synthwaveEl = document.querySelector('#synthwave');
var superLofiEl = document.querySelector('#superLofi');
var pokeChillEl = document.querySelector('#pokeChill');
var undertaleEl = document.querySelector('#undertale');

var showPlaylist1 = function() {
    playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4ug4ktSFhisTatqDShUdAR" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
    console.log("chill brah");
};

var showPlaylist2 = function() {
    playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4TeZZfbu3rbifAjwiAAEq8" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
    console.log("synthy");
};

var showPlaylist3 = function() {
    playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/3PeWDrXlXk9utHaK2CpEgT" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
    console.log("lobrah");
};
var showPlaylist4 = function() {
    playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4lBMa9JEuCSIs3NkPEIwvN" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
    console.log("poke man");
};
var showPlaylist5 = function() {
    playlistEl.innerHTML = '<iframe class="spotify" src="https://open.spotify.com/album/4eSyiMMYG6MRQ6pWkuuDgZ" frameborder="0" id="music-player" allowtransparency="true" allow="encrypted-media"></iframe>';
        console.log("whats under this tale?");
};


document.getElementById('chilltendo').addEventListener('click', showPlaylist1());
document.getElementById('synthwave').addEventListener('click', showPlaylist2());
document.getElementById('superLofi').addEventListener('click', showPlaylist3());
document.getElementById('pokeChill').addEventListener('click', showPlaylist4());
document.getElementById('undertale').addEventListener('click', showPlaylist5());
