<?php
header("Content-type: application/json");
mysql_connect() or die("lol" . mysql_error()); 

mysql_select_db("170072-atlas") or die(mysql_error()); 

$data = mysql_query("SELECT * FROM data") 
or die(mysql_error()); 


$user = array();
 while ($Row = mysql_fetch_array($data)) 
{ 
$user[] =array(  
'id'=>$Row['id'], 
'q'=>$Row['question'],
'a'=>$Row['answer'],
'coordx'=>$Row['coordx'],
'coordy'=>$Row['coordy']
	);
} 

function encode_items(&$item, $key)
{
	$item = utf8_encode($item);
}
array_walk_recursive($user, 'encode_items');
$json = json_encode($user) or die("An error was created");

echo $json;
?>