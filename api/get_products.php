<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$products = [
    ["id" => 1, "name" => "Product 1", "price" => "₹999", "image" => "/placeholder.jpg"],
    ["id" => 2, "name" => "Product 2", "price" => "₹1499", "image" => "/placeholder.jpg"],
    ["id" => 3, "name" => "Product 3", "price" => "₹1999", "image" => "/placeholder.jpg"],
    ["id" => 4, "name" => "Product 4", "price" => "₹2499", "image" => "/placeholder.jpg"],
    ["id" => 5, "name" => "Product 5", "price" => "₹2999", "image" => "/placeholder.jpg"],
    ["id" => 6, "name" => "Product 6", "price" => "₹3499", "image" => "/placeholder.jpg"]
];

echo json_encode($products);
?>