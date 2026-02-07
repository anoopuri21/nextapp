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
            <div class="helper-links">
                <a href="signup.php">Create account</a>
                <a href="forgot_password.php">Forgot password?</a>
            </div>
        </div>
    </div>
</body>
</html>
