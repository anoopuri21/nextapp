<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Next.js से connect करने के लिए

// Mock Data — बाद में MySQL से आएगा
$services = [
    ["id" => 1, "title" => "Web Design", "description" => "Beautiful responsive websites"],
    ["id" => 2, "title" => "SEO Optimization", "description" => "Rank higher on Google"],
    ["id" => 3, "title" => "Social Media Marketing", "description" => "Grow your brand online"],
    ["id" => 4, "title" => "Content Writing", "description" => "Engaging content for your audience"],
    ["id" => 5, "title" => "Logo Design", "description" => "Creative logos for your business"],
    ["id" => 6, "title" => "App Development", "description" => "Mobile apps that users love"]
];

echo json_encode($services);
?>