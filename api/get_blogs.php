<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once '../config.php';

try {
    $stmt = $pdo->query("SELECT id, title, excerpt, published_date FROM blogs ORDER BY published_date DESC LIMIT 3");
    $blogs = $stmt->fetchAll();
    echo json_encode($blogs);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>