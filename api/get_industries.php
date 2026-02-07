<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once '../config.php';

try {
    $stmt = $pdo->query("SELECT id, name, overview FROM industries ORDER BY created_at DESC");
    $industries = $stmt->fetchAll();
    echo json_encode($industries);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>
