function init(){
    var current = 0;
    var audioPlayers = $('audio');
    var playlists = $('.playlist');

    for (var i = 0; i < playlists.length; i++) {
        var playlist = playlists[i];
        var audioPlayer = audioPlayers[i];

        var tracks = $(playlist).find('p a');
        audioPlayer.volume = 0.50;

        //click event listener
        $(playlist).find('a').click(function(e){
            e.preventDefault();
            var link = $(this);
            var currentAudioPlayer = $(link.closest('.playlist')[0]).parent().find('audio')[0]
            run(link, currentAudioPlayer);
        });

        // var aud = document.getElementById("myAudio");
        // aud.onplay = function() {
        //     alert("The audio has started to play");
        // };

        //nummer is geëindigd event listener
        // audioPlayer.addEventListener('ended', function(e){
        //     current++;
        //     if(current === (tracks.length - 1) ){
        //         current = 0;
        //     }
        //     link = $(playlist).find('a')[current];    
            
        //     run($(link), audioPlayer);
        // });
    }
}

function run(link, player){
    //you want to stop whatever song is playing
    stopOtherPlayers();

    player.src = link.attr('href');
    
    //the parent is a p tag
    var par = link.parent();
    par.addClass('active')
    player.load();
    player.play();
}

function stopOtherPlayers(){
    var audioPlayers = $('audio');
    for (var i = 0; i < audioPlayers.length; i++) {
        audioPlayers[i].pause();
        audioPlayers[i].currentTime = 0;
    }

    var allTracks = $('.playlist').find('p a');
    for (var i = 0; i < allTracks.length; i++) {
        var track = $(allTracks[i]);
        var par = track.parent();
        par.siblings().removeClass('active');
    }
}

init();