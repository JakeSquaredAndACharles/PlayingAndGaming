
// DOM element declaration
var playlistEl = document.querySelector('#playlist-container');
var chilltendoEl = document.querySelector('#chilltendo');
var synthwaveEl = document.querySelector('#synthwave');
var superLofiEl = document.querySelector('#superLofi');
var pokeChillEl = document.querySelector('#pokeChill');
var undertaleEl = document.querySelector('#undertale');


// Playlist Selections Start
var showPlaylist1 = function() {
    playlistEl.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4ug4ktSFhisTatqDShUdAR" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
};
var showPlaylist2 = function() {
    playlistEl.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4TeZZfbu3rbifAjwiAAEq8" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
};
var showPlaylist3 = function() {
    playlistEl.innerHTML = '<iframe src="https://open.spotify.com/embed/album/3PeWDrXlXk9utHaK2CpEgT" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
};
var showPlaylist4 = function() {
    playlistEl.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4lBMa9JEuCSIs3NkPEIwvN" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'; 
};
var showPlaylist5 = function() {
    playlistEl.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4eSyiMMYG6MRQ6pWkuuDgZ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
};
// Playlist Selections End

// Event Listeners to selected spotify playlists. 
chilltendoEl.addEventListener('click', showPlaylist1);
synthwaveEl.addEventListener('click', showPlaylist2);
superLofiEl.addEventListener('click', showPlaylist3);
pokeChillEl.addEventListener('click', showPlaylist4);
undertaleEl.addEventListener('click', showPlaylist5);
