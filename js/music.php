<?php
include 'db.php';

$data = '{}'; // json string

$name = $_POST['name'];
$song = $_POST['song'];
$artist = $_POST['artist'];
$link = $_POST['link'];
$repeated = false;

header("Access-Control-Allow-Origin: *");
// Check if email already exists
$checkSong = $conn->prepare("SELECT song FROM suggestedmusic WHERE song = ?");
$checkSong->bind_param("s", $song);
$checkSong->execute();
$checkSong->store_result();

if ($checkSong->num_rows > 0) {
  //  $message = "The song was already suggested/Ya fue sugerida la cancion";
   // $toastClass = "#007bff"; // Primary color
    echo "The song was already suggested/Ya fue sugerida la cancion";
    if(isset($_POST['data'])){
        echo 'The song was already suggested/Ya fue sugerida la cancion';
    }

} else {
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO suggestedmusic (name, song, artist,link,repeated) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $song, $artist, $link, $repeated);

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
}


$checkSong->close();
$conn->close();


?>