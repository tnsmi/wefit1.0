<?php 
  $FirstName=$LastName=$Email=$Age=$Gender=$Password="";
  if($_SERVER["REQUEST_METHOD"]=="POST"){
    function sec($data){
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
    $FirstName = sec($_POST["UserFirstName"]);
    $LastName = sec($_POST["UserLastName"]);
    $Email = sec($_POST["UserEmail"]);
    $Age = sec($_POST["UserAge"]);
    $Password = sec($_POST["UserPassword"]);
    
  }
  
  include sqlconnect.php
   
  ?>