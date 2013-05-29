<?php

session_start();
header('Cache-control: private');

require "/disk1/wwwroot/mspl.felarca.com/lib/constants.inc";
require "/disk1/wwwroot/mspl.felarca.com/lib/library.php";

fnOpenDatabase($DBSERVER,$DBUSER,$DBPASSWD,$DB);
 
call_user_func(safe($_POST['todo']));

function buildScheduleTable() {
  if(isset($_POST['season'])) { $season = safe($_POST['season']); }
  $q = "SELECT tournament.date, games.NAME AS game, event_type.NAME AS type FROM tournament INNER JOIN games "
     . "ON tournament.game_id = games.GAMEID INNER JOIN event_type ON tournament.event_type = "
     . "event_type.EVENTID WHERE season_id = $season ORDER BY tournament.date;";
  $r = mysql_query($q);
  if ($r) {
    if (mysql_num_rows($r) > 0) {
      while ($row = mysql_fetch_array($r)) {
        $a[] = array('date' => date("M d, Y", strtotime($row['date'])),
                     'game' => $row['game'],
                     'type' => $row['type']);
      }
      echo json_encode($a);
    }
  } else {
    fnErrorDie("Could not get SQL data in buildScheduleTable");
  }
  
}

?>
