<?php
require_once '../config.php';

$stmt = $pdo->query("SELECT * FROM features ORDER BY created_at DESC");
$features = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html>
<head>
    <title>All Features</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>All Features</h1>
            <p>Manage feature highlights shown across the platform.</p>
        </div>

        <nav class="admin-nav">
            <a href="add_service.php">Add Service</a>
            <a href="view_services.php">View Services</a>
            <a href="add_feature.php">Add Feature</a>
            <a href="view_features.php">View Features</a>
            <a href="add_industry.php">Add Industry</a>
            <a href="view_industries.php">View Industries</a>
        </nav>

        <div class="admin-card">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
                <?php foreach ($features as $feature): ?>
                <tr>
                    <td><?= $feature['id'] ?></td>
                    <td><?= htmlspecialchars($feature['name']) ?></td>
                    <td><?= htmlspecialchars($feature['description']) ?></td>
                    <td><?= $feature['created_at'] ?></td>
                    <td>
                        <a href="edit_feature.php?id=<?= $feature['id'] ?>">Edit</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </table>
        </div>
    </div>
</body>
</html>
