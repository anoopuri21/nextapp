<?php
require_once '../config.php';

$stmt = $pdo->query("SELECT * FROM services ORDER BY created_at DESC");
$services = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html>
<head>
    <title>All Services</title>
    <meta charset="UTF-8">
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h2>All Services</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
        </tr>
        <?php foreach ($services as $service): ?>
        <tr>
            <td><?= $service['id'] ?></td>
            <td><?= htmlspecialchars($service['title']) ?></td>
            <td><?= htmlspecialchars($service['description']) ?></td>
            <td><?= $service['created_at'] ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
    <br>
    <a href="add_service.php">Add New Service</a>
</body>
</html>