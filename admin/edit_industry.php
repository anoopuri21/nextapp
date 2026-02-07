<?php
require_once 'auth.php';
require_admin();

require_once '../config.php';

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if (!$id) {
    header('Location: view_industries.php');
    exit;
}

if ($_POST) {
    $name = $_POST['name'];
    $overview = $_POST['overview'];

    try {
        $stmt = $pdo->prepare("UPDATE industries SET name = ?, overview = ? WHERE id = ?");
        $stmt->execute([$name, $overview, $id]);
        $message = "Industry updated successfully!";
    } catch (Exception $e) {
        $error = $e->getMessage();
    }
}

$stmt = $pdo->prepare("SELECT * FROM industries WHERE id = ?");
$stmt->execute([$id]);
$industry = $stmt->fetch();

if (!$industry) {
    header('Location: view_industries.php');
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Edit Industry</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>Edit Industry</h1>
            <p>Adjust the industry summary and positioning.</p>
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
                    <input type="text" name="name" value="<?= htmlspecialchars($industry['name']) ?>" required />
                </div>
                <div>
                    <label>Overview</label>
                    <textarea name="overview" rows="4" required><?= htmlspecialchars($industry['overview']) ?></textarea>
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    </div>
</body>
</html>
