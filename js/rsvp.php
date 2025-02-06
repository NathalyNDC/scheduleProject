<?php
include 'db.php';

$message = "";
$toastClass = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

$name = $_POST['name'];
$quantity = $_POST['quantity'];
$confirmation = $_POST['confirmation'];



    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO rsvp (name, quantity, confirmation) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $quantity, $confirmation);

    if ($stmt->execute()) {
        $message = "Response saved successfully/Respuesta guardada";
        $toastClass = "#28a745"; // Success color
    } else {
        $message = "Error: " . $stmt->error;
        $toastClass = "#dc3545"; // Danger color
    }

    $stmt->close();




$checkSong->close();
    $conn->close();

}

?>