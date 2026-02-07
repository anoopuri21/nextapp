<?php
require_once '../config.php';

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if (!$id) {
    header('Location: view_services.php');
    exit;
}

if ($_POST) {
    $title = $_POST['title'];
    $description = $_POST['description'];

    try {
        $stmt = $pdo->prepare("UPDATE services SET title = ?, description = ? WHERE id = ?");
        $stmt->execute([$title, $description, $id]);
        $message = "Service updated successfully!";
    } catch (Exception $e) {
        $error = $e->getMessage();
    }
}

$stmt = $pdo->prepare("SELECT * FROM services WHERE id = ?");
$stmt->execute([$id]);
$service = $stmt->fetch();

if (!$service) {
    header('Location: view_services.php');
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Edit Service</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>Edit Service</h1>
            <p>Update the service details and save changes.</p>
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
                    <label>Title</label>
                    <input type="text" name="title" value="<?= htmlspecialchars($service['title']) ?>" required />
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" rows="4" required><?= htmlspecialchars($service['description']) ?></textarea>
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    </div>
</body>
</html>
