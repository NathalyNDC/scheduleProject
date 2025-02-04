<?php
include '../database/db.php';

$message = "";
$toastClass = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

$name = $_POST['name'];
$song = $_POST['song'];
$artist = $_POST['artist'];
$link = $_POST['link'];
$repeated = false;

// Check if email already exists
$checkSong = $conn->prepare("SELECT song FROM suggestedmusic WHERE song = ?");
$checkSong->bind_param("s", $song);
$checkSong->execute();
$checkSong->store_result();

if ($checkSong->num_rows > 0) {
    $message = "The song was already suggested/Ya fue sigerida la cancion";
    $toastClass = "#007bff"; // Primary color
} else {
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO suggestedmusic (name, song, artist,link,repeated) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $song, $artist, $link, $repeated);

    if ($stmt->execute()) {
        $message = "Sugestion created successfully/Sugerencia guardada";
        $toastClass = "#28a745"; // Success color
    } else {
        $message = "Error: " . $stmt->error;
        $toastClass = "#dc3545"; // Danger color
    }

    $stmt->close();
}


$checkSong->close();
    $conn->close();

}

?>