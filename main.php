<?php

session_start();
header('Cache-control: private');

require "/disk1/wwwroot/mspl.felarca.com/lib/constants.inc";
require "/disk1/wwwroot/mspl.felarca.com/lib/library.php";

fnOpenDatabase($DBSERVER,$DBUSER,$DBPASSWD,$DB);
 
call_user_func(safe($_POST['todo']));

function buildScheduleTable() {
  if(isset($_POST['season'])) { $season = safe($_POST['season']); }
  $q = "SELECT ID, entrants, tournament.date, games.NAME AS game, event_type.NAME AS type FROM tournament INNER JOIN games "
     . "ON tournament.game_id = games.GAMEID INNER JOIN event_type ON tournament.event_type = "
     . "event_type.EVENTID WHERE season_id = $season ORDER BY tournament.date;";
  $r = mysql_query($q);
  if ($r) {
    if (mysql_num_rows($r) > 0) {
      while ($row = mysql_fetch_array($r)) {
        $q1 = "SELECT CONCAT(player.firstname,' ',player.lastname) FROM tournament_result INNER JOIN player ON "
            . "tournament_result.player_id = player.ID WHERE position = 1 AND tournament_id =" .$row['ID'];
        $r1 = mysql_query($q1);
        $p1 = mysql_result($r1, 0);
        $q2 = "SELECT CONCAT(player.firstname,' ',player.lastname) FROM tournament_result INNER JOIN player ON "
            . "tournament_result.player_id = player.ID WHERE position = 2 AND tournament_id =" .$row['ID'];
        $r2 = mysql_query($q2);
        $p2 = mysql_result($r2, 0);
        $q3 = "SELECT CONCAT(player.firstname,' ',player.lastname) FROM tournament_result INNER JOIN player ON "
            . "tournament_result.player_id = player.ID WHERE position = 3 AND tournament_id =" .$row['ID'];
        $r3 = mysql_query($q3);
        $p3 = mysql_result($r3, 0);
        $a[] = array('date' => date("M d, Y", strtotime($row['date'])),
                     'game' => $row['game'],
                     'type' => $row['type'],
                     'entrants' => $row['entrants'],
                     'p1' => $p1,
                     'p2' => $p2,
                     'p3' => $p3);
      }
      echo json_encode($a);
    }
  } else {
    fnErrorDie("Could not get SQL data in buildScheduleTable");
  }
  
}

?>
