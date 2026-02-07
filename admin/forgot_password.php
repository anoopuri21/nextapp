<!DOCTYPE html>
<html>
<head>
    <title>Reset Password</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>Reset Password</h1>
            <p>Enter your email to receive a reset link.</p>
        </div>

        <div class="admin-card">
            <form class="form-grid" method="POST">
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="admin@nextapp.io" required />
                </div>
                <button type="submit">Send reset link</button>
            </form>
            <div class="helper-links">
                <a href="login.php">Back to login</a>
            </div>
        </div>
    </div>
</body>
</html>
