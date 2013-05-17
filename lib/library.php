<?php
/**
  Data Tech Cafe's standard PHP library, v1.0

  Copy the contents of the /%libpath%/ directory to the PHP server using these 
  functions.
  
  Requires the calling PHP script include a standard constants.inc.
  
  A template for constants.inc can be found in /%libpath%/constants_template.inc
  
  An example of what should appear in the calling PHP script:
  require /%programpath%/constants.inc
  require /%libpath%/library.php
**/

function fnErrorDie($strError) {
// Log the error message in /var/log/apache2/error.log, and end the script quietly
  $fp = fopen('/disk1/wwwroot/mspl.felarca.com/log/error.log', 'a');
  fwrite($fp, date('m-d-Y H:i:s', strtotime("now")) . ": " . $strError . "\n");
  fclose($fp);
  die();
}

function fnErrorAlert($strError) {
// Log the error message in /var/log/apache2/error.log, output it to the web browser, and end the script
  $fp = fopen('/disk1/wwwroot/mspl.felarca.com/log/error.log', 'a');
  fwrite($fp, date('m-d-Y H:i:s', strtotime("now")) . ": " . $strError . "\n");
  fclose($fp);
  die("library.php: $strError");
}

function fnErrorLog($strError) {
// Simply log the error message in, but do not send it to the web browser
  $fp = fopen('/disk1/wwwroot/mspl.felarca.com/log/error.log', 'a');
  fwrite($fp, date('m-d-Y H:i:s', strtotime("now")) . ": " . $strError . "\n");
  fclose($fp);
}

function fnOpenDatabase($DBSERVER,$DBUSER,$DBPASSWD,$DB) {
// Creates a MySQL database connection
  // Ensuring required constants are set
  if (!$DBSERVER) 
    fnErrorAlert("The DBSERVER constant has not been set in /%programpath%/constants.inc!");

  if (!$DBUSER)
    fnErrorAlert("The DBUSER constant has not been set in /%programpath%/constants.inc!");

  if (!$DBPASSWD)
    fnErrorAlert("The DBPASSWD constant has not been set in /%programpath%/constants.inc!");

  if (!$DB)
    ErrorALert("The DB constant has not been set in /%programpath%/constants.inc!");

  // Creating connection and selecting database
  $link = mysql_connect($DBSERVER, $DBUSER, $DBPASSWD);
  if (!$link)
    fnErrorAlert("Error connecting to MySQL server $DBSERVER, using $DBUSER: " . mysql_error());
  
  $db = mysql_select_db($DB, $link);
  if (!$db) 
    fnErrorAlert("Error in MySQL selecting $DB: " . mysql_error());
}

function fnCloseDatabase() {
  mysql_close();
}

function safe($str) {
  // Used to sanitize input to protect from XSS
  return strip_tags(mysql_real_escape_string($str));
}

function fnIntRange($intSmall,$intBig) {
  // Takes two integers and returns an array of the range of numbers
  // including and between the two integers
  $c = 0;
  for ($i=$intSmall;$i<$intBig+1;$i++) {
    $arrayOutput[$c] = $i;
    $c++;
  }
  return $arrayOutput;
}

function fnDatePadZeros($strNoZero) {
  // Takes a date string without padded zero's (i.e. 2011-9-8) and 
  // outputs the same date with padded zero's (i.e. 2011-09-08)
  $arrayNoZero = explode("-", $strNoZero);
  return $arrayNoZero[0]."-".str_pad($arrayNoZero[1],2,"0", STR_PAD_LEFT)."-".str_pad($arrayNoZero[2],2,"0",STR_PAD_LEFT);
}

function fnArraySortByColumn(&$arr, $col, $dir = SORT_ASC) {
  // From http://stackoverflow.com/questions/2699086/php-sort-multidimensional-array-by-value
  // by Tom Haigh
  $sort_col = array();
  foreach ($arr as $key => $row) {
    $sort_col[$key] = $row[$col];
  }
  array_multisort($sort_col, $dir, $arr);

  return $arr;

}

?>
