<?php

$username = "root";
$password = "mysql2012{}";
$hostname = "localhost"; 

//connection to the database
$conn = mysql_connect($hostname, $username, $password) 
  or die("Unable to connect to MySQL");


mysql_select_db('music');

if(isset($_POST['name'])) {
	print_r($_POST['name']);
	$sql="INSERT INTO albums (`name`)
		VALUES ('$_POST[name]')";
	$result = mysql_query($sql, $conn);
	print_r($result);
	
} else {
	$sql = 'SELECT * FROM albums';
	$result = mysql_query($sql, $conn);
	$rows = array();
	
	while($r = mysql_fetch_assoc($result)) {
		$rows[] = $r;
	}
	
	print json_encode($rows);
	
}

mysql_close($conn);

?>