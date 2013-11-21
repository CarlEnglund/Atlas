<?php

$con=mysqli_connect("localhost","root","","atlas");

// Check connection
if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


$result = mysqli_query($con,"SELECT * FROM questions");
while($r[]=mysqli_fetch_array($result));
$arrlength=count($r);
$r = array("lol" => "bajs");
$js_array = json_encode($r);


//echo "<pre>";
// Prints $r as array 
//echo ($r[0][1]);
//echo "</pre>";

echo $js_array;
	
mysqli_close($con);
?>