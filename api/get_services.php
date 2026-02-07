<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once '../config.php';

$limit = filter_input(INPUT_GET, 'limit', FILTER_VALIDATE_INT);
$limit = $limit && $limit > 0 ? min($limit, 50) : 6;

try {
    $stmt = $pdo->prepare("SELECT id, title, description FROM services ORDER BY created_at DESC LIMIT :limit");
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->execute();
    $services = $stmt->fetchAll();
    echo json_encode($services);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>
