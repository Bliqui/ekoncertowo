





<?php

$baseUrl = "https://app.ticketmaster.com/discovery/v2/events.json";
// zmien na swoj apiKey jezeli potrzebujesz
$apiKey = "pEBWAxY6PMccGxWvWLs40HkXMzpyym6o";

$url = $baseUrl . "?apikey=" . urlencode($apiKey);

// M.C. Hammer - U Can't Touch This
foreach ($_GET as $key => $value) {
    $url .= "&" . urlencode($key) . "=" . urlencode($value);
}


// M.C. Hammer - U Can't Touch This
function fetch_event($url) {
    //curl bo czemu nie
    $curl = curl_init();
    
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HEADER, false);

    $data = curl_exec($curl);
    curl_close($curl);

    return $data;
}


$response_data = fetch_event($url);
$json_data = json_decode($response_data, true);

// ta linijka powoduje, ladnie ulozony output, jezeli nie potrzebne, zakomentowac
$pretty_json = json_encode($json_data, JSON_PRETTY_PRINT);

// to samo co powyzej
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

echo $pretty_json;
?>