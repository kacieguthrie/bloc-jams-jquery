
class Helper {

  playPauseAndUpdate (song) {
    player.playPause(song);
    const totalTime = $('#time-control .total-time').text(player.getDuration(song));
    player.prettyTime(totalTime);
  }

}

let helper = new Helper;
