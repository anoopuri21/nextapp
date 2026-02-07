<?php
require_once '../config.php';

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if (!$id) {
    header('Location: view_features.php');
    exit;
}

if ($_POST) {
    $name = $_POST['name'];
    $description = $_POST['description'];

    try {
        $stmt = $pdo->prepare("UPDATE features SET name = ?, description = ? WHERE id = ?");
        $stmt->execute([$name, $description, $id]);
        $message = "Feature updated successfully!";
    } catch (Exception $e) {
        $error = $e->getMessage();
    }
}

$stmt = $pdo->prepare("SELECT * FROM features WHERE id = ?");
$stmt->execute([$id]);
$feature = $stmt->fetch();

if (!$feature) {
    header('Location: view_features.php');
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Edit Feature</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>Edit Feature</h1>
            <p>Update feature messaging and descriptions.</p>
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
                    <input type="text" name="name" value="<?= htmlspecialchars($feature['name']) ?>" required />
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" rows="4" required><?= htmlspecialchars($feature['description']) ?></textarea>
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    </div>
</body>
</html>
