<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$blogs = [
    ["id" => 1, "title" => "Getting Started with Next.js", "excerpt" => "Learn how to build modern web apps...", "date" => "2025-04-01"],
    ["id" => 2, "title" => "PHP for Beginners", "excerpt" => "Core PHP without frameworks...", "date" => "2025-04-05"],
    ["id" => 3, "title" => "Deploying to cPanel", "excerpt" => "Step-by-step guide for interns...", "date" => "2025-04-10"]
];

echo json_encode($blogs);
?>