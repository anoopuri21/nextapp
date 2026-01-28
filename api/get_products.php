<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once '../config.php';

try {
    $stmt = $pdo->query("SELECT id, name, price, image FROM products LIMIT 6");
    $products = $stmt->fetchAll();
    echo json_encode($products);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>