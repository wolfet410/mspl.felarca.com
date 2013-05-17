<?php

session_start();
header('Cache-control: private');

require "/disk1/wwwroot/mspl.felarca.com/lib/constants.inc";
require "/disk1/wwwroot/mspl.felarca.com/lib/library.php";

fnOpenDatabase($DBSERVER,$DBUSER,$DBPASSWD,$DB);
 
call_user_func(safe($_POST['todo']));

function buildScheduleTable() {
  // Build the schedule table
  $q = "SELECT date,..... and rest of data FROM tournament WHERE season_id = $season";
  $r = mysql_result($q);
  
}

?>
