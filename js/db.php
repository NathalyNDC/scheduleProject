<?php
    // Database connection details
    $db_host = "localhost";
    $db_user = "admin";
    $db_password = "nay";
    $db_name = "wedding";


    // Create database connection
    $conn = new mysqli($db_host, $db_user, $db_password, $db_name);

   // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
  //  echo "Connected successfully";
    

?>