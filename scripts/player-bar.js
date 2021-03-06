{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex = currentSongIndex - 1;
    if (prevSongIndex < 0) { return; }

    const prevSong = album.songs[prevSongIndex];
    player.playPause(prevSong);
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) {return;}

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  setInterval( () => {
    if (player.playState !== 'playing')
    { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(currentTime);
    $('#time-control input').val(percent); //why did we write "input" here?
  }, 1000);
}
