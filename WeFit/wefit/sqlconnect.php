<?php
    $serverName = "localhost";
    $connectionInfo = array("Database"=>"WeFitApp", "UID"=>"sa","PWD"=>"CardioGenerator#3");
    $connection = sqlsrv_connect($serverName, $connectionInfo);
    if($connection){
        echo "Connection Established";
    }
    else{
        echo "Connection could not be made to the server, try again."
        die(print_r(sqlsrv_errors(), true));
    }
?>