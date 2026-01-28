<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once '../config.php';

try {
    $stmt = $pdo->query("SELECT id, title, description FROM services LIMIT 6");
    $services = $stmt->fetchAll();
    echo json_encode($services);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>