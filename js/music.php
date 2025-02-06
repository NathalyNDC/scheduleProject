<?php
include 'db.php';

$data = '{}'; // json string

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding, X-Token-Auth, Authorization");
header("Access-Control-Allow-Methods: POST");

$obj = json_decode($_POST["x"], false);

/*
// Allow from any origin
if(isset($_SERVER["HTTP_ORIGIN"]))
{
    // You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as we do here, just allow all
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
else
{
    //No HTTP_ORIGIN set, so we allow any. You can disallow if needed here
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 600");    // cache for 10 minutes

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
        header("Access-Control-Allow-Methods: POST"); 

    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    //Just exit with 200 OK with the above headers for OPTIONS method
    exit(0);
}
//From here, handle the request as it is ok

*/


$message = "";
$toastClass = "";

system.out.println($_POST['name']);
$name = $_POST['name'];
$song = $_POST['song'];
$artist = $_POST['artist'];
$link = $_POST['link'];
$repeated = false;
system.out.println($song);
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


?>