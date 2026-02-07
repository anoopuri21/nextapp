<?php
require_once 'auth.php';
require_admin();

require_once '../config.php';

$stmt = $pdo->query("SELECT * FROM industries ORDER BY created_at DESC");
$industries = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html>
<head>
    <title>All Industries</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>All Industries</h1>
            <p>Review the list of industry segments.</p>
        </div>

        <nav class="admin-nav">
            <a href="add_service.php">Add Service</a>
            <a href="view_services.php">View Services</a>
            <a href="add_feature.php">Add Feature</a>
            <a href="view_features.php">View Features</a>
            <a href="add_industry.php">Add Industry</a>
            <a href="view_industries.php">View Industries</a>
            <a href="edit_about.php">About Content</a>
            <a href="site_settings.php">Site Settings</a>
            <a href="logout.php">Logout</a>
        </nav>

        <div class="admin-card">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Overview</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
                <?php foreach ($industries as $industry): ?>
                <tr>
                    <td><?= $industry['id'] ?></td>
                    <td><?= htmlspecialchars($industry['name']) ?></td>
                    <td><?= htmlspecialchars($industry['overview']) ?></td>
                    <td><?= $industry['created_at'] ?></td>
                    <td>
                        <a href="edit_industry.php?id=<?= $industry['id'] ?>">Edit</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </table>
        </div>
    </div>
</body>
</html>
