<?php
if ($_POST) {
    require_once '../config.php';

    $name = $_POST['name'];
    $description = $_POST['description'];

    try {
        $stmt = $pdo->prepare("INSERT INTO features (name, description) VALUES (?, ?)");
        $stmt->execute([$name, $description]);
        $message = "Feature added successfully!";
    } catch (Exception $e) {
        $error = $e->getMessage();
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Add Feature</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>Add New Feature</h1>
            <p>Highlight platform capabilities and value adds.</p>
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
                    <label>Description</label>
                    <textarea name="description" rows="4" required></textarea>
                </div>
                <button type="submit">Add Feature</button>
            </form>
        </div>
    </div>
</body>
</html>
