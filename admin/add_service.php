<?php
if ($_POST) {
    require_once '../config.php';
    
    $title = $_POST['title'];
    $description = $_POST['description'];

    try {
        $stmt = $pdo->prepare("INSERT INTO services (title, description) VALUES (?, ?)");
        $stmt->execute([$title, $description]);
        $message = "Service added successfully!";
    } catch (Exception $e) {
        $error = $e->getMessage();
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Add Service</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Arial; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; }
        input, textarea { width: 100%; padding: 8px; }
        button { background: #007BFF; color: white; padding: 10px 20px; border: none; cursor: pointer; }
        .success { color: green; }
        .error { color: red; }
    </style>
</head>
<body>
    <h2>Add New Service</h2>
    
    <?php if (isset($message)): ?>
        <p class="success"><?= $message ?></p>
    <?php endif; ?>
    
    <?php if (isset($error)): ?>
        <p class="error"><?= $error ?></p>
    <?php endif; ?>

    <form method="POST">
        <div class="form-group">
            <label>Title</label>
            <input type="text" name="title" required />
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="description" rows="4" required></textarea>
        </div>
        <button type="submit">Add Service</button>
    </form>

    <br><br>
    <a href="view_services.php">View All Services</a>
</body>
</html>