<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$maxNumber = 2;

$result_arr = array();
#$result_arr["records"]=array();

for ($i = 0; $i < $maxNumber; $i++) {
    $entry_arr = array(
        "num" => $i,
        "randomnumber" => rand(0, 10)

    );
    array_push($result_arr, $entry_arr);
}

#$result_arr["id"] = "asdf";

echo json_encode($result_arr);
 
?>