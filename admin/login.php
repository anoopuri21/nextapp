<?php
require_once 'auth.php';

$error = null;

if ($_POST) {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($email === ADMIN_EMAIL && $password === ADMIN_PASSWORD) {
        $_SESSION['admin_logged_in'] = true;
        header('Location: view_services.php');
        exit();
    }

    $error = 'Invalid credentials. Please try again.';
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Login</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>Admin Login</h1>
            <p>Sign in to manage services, features, and industries.</p>
        </div>

        <div class="admin-card">
            <?php if ($error): ?>
                <p class="badge-error"><?= $error ?></p>
            <?php endif; ?>

            <form class="form-grid" method="POST">
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="admin@nextapp.io" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="••••••••" required />
                </div>
                <button type="submit">Log In</button>
            </form>
            <p class="admin-note">
                Demo login: <strong>admin@nextapp.io</strong> / <strong>admin123</strong>
            </p>
            <div class="helper-links">
                <a href="signup.php">Create account</a>
                <a href="forgot_password.php">Forgot password?</a>
            </div>
        </div>
    </div>
</body>
</html>
