<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once '../config.php';

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if (!$id) {
    http_response_code(400);
    echo json_encode(["error" => "Missing or invalid id."]);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT id, title, description, created_at FROM services WHERE id = :id");
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $service = $stmt->fetch();

    if (!$service) {
        http_response_code(404);
        echo json_encode(["error" => "Service not found."]);
        exit;
    }

    echo json_encode($service);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>
