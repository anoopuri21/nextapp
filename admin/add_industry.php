<?php
require_once 'auth.php';
require_admin();

if ($_POST) {
    require_once '../config.php';

    $name = $_POST['name'];
    $overview = $_POST['overview'];

    try {
        $stmt = $pdo->prepare("INSERT INTO industries (name, overview) VALUES (?, ?)");
        $stmt->execute([$name, $overview]);
        $message = "Industry added successfully!";
    } catch (Exception $e) {
        $error = $e->getMessage();
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Add Industry</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>Add New Industry</h1>
            <p>Capture industry segments you serve.</p>
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
            <?php if (isset($message)): ?>
                <p class="badge-success"><?= $message ?></p>
            <?php endif; ?>

            <?php if (isset($error)): ?>
                <p class="badge-error"><?= $error ?></p>
            <?php endif; ?>

            <form method="POST" class="form-grid">
                <div>
                    <label>Name</label>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label>Overview</label>
                    <textarea name="overview" rows="4" required></textarea>
                </div>
                <button type="submit">Add Industry</button>
            </form>
        </div>
    </div>
</body>
</html>
