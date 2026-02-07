<!DOCTYPE html>
<html>
<head>
    <title>Admin Sign Up</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>Create Admin Account</h1>
            <p>Set up a new admin profile to manage content.</p>
        </div>

        <div class="admin-card">
            <form class="form-grid" method="POST">
                <div>
                    <label>Full name</label>
                    <input type="text" name="name" placeholder="Alex Morgan" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="admin@nextapp.io" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Create a password" required />
                </div>
                <button type="submit">Create Account</button>
            </form>
            <div class="helper-links">
                <a href="login.php">Back to login</a>
            </div>
        </div>
    </div>
</body>
</html>
