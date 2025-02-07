<?php
include 'db.php';

$data = '{}'; // json string

$name = $_POST['name'];
$quantity = $_POST['quantity'];
$confirmation = $_POST['confirmation'];

header("Access-Control-Allow-Origin: *");

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO rsvp (name, quantity, confirmation) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $quantity, $confirmation);

    if ($stmt->execute()) {
        echo "Sent/Enviado";
        if(isset($_POST['data'])){
            echo 'Sent/Enviado';
        }
    } else {
        echo "Error";
        if(isset($_POST['data'])){
            echo 'Error';
        }
    }

    $stmt->close();
    $conn->close();



?>