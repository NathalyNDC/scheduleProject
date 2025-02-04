//DATABASE
<?php

    // Database connection details

    $db_host = "localhost";

    $db_user = "root";

    $db_password = "password";

    $db_name = "wedding";



    // Create database connection
    $conn = new mysqli($db_host, $db_user, $db_password, $db_name);



   // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        echo("failed");
    }
    

?>