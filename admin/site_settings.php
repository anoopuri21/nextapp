<?php
require_once 'auth.php';
require_admin();
require_once 'content_store.php';

$settingsFile = __DIR__ . '/../data/site-settings.json';
$defaultSettings = [
    'companyName' => 'NextApp',
    'logoLight' => '/next.svg',
    'logoDark' => '/next.svg',
    'phone' => '+1 (555) 010-2020',
    'email' => 'hello@nextapp.io',
    'contactEmail1' => 'puri.anoop21@gmail.com',
    'contactEmail2' => 'support@nextapp.io',
    'socialLinks' => [
        'linkedin' => 'https://www.linkedin.com',
        'twitter' => 'https://twitter.com',
        'instagram' => 'https://www.instagram.com',
        'facebook' => 'https://www.facebook.com',
    ],
];

$settings = load_json_file($settingsFile, $defaultSettings);
$message = null;
$error = null;

if ($_POST) {
    $settings['companyName'] = $_POST['companyName'] ?? '';
    $settings['logoLight'] = $_POST['logoLight'] ?? '';
    $settings['logoDark'] = $_POST['logoDark'] ?? '';
    $settings['phone'] = $_POST['phone'] ?? '';
    $settings['email'] = $_POST['email'] ?? '';
    $settings['contactEmail1'] = $_POST['contactEmail1'] ?? '';
    $settings['contactEmail2'] = $_POST['contactEmail2'] ?? '';
    $settings['socialLinks'] = [
        'linkedin' => $_POST['linkedin'] ?? '',
        'twitter' => $_POST['twitter'] ?? '',
        'instagram' => $_POST['instagram'] ?? '',
        'facebook' => $_POST['facebook'] ?? '',
    ];

    if (save_json_file($settingsFile, $settings)) {
        $message = 'Site settings updated successfully!';
    } else {
        $error = 'Unable to save site settings. Please check file permissions.';
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Site Settings</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>Site Settings</h1>
            <p>Update the website logo, contact details, and social links.</p>
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
            <?php if ($message): ?>
                <p class="badge-success"><?= $message ?></p>
            <?php endif; ?>

            <?php if ($error): ?>
                <p class="badge-error"><?= $error ?></p>
            <?php endif; ?>

            <form method="POST" class="form-grid">
                <div>
                    <label>Company Name</label>
                    <input type="text" name="companyName" value="<?= htmlspecialchars($settings['companyName'] ?? '') ?>" required />
                </div>
                <div class="form-grid two-columns">
                    <div>
                        <label>Logo (Light)</label>
                        <input type="text" name="logoLight" value="<?= htmlspecialchars($settings['logoLight'] ?? '') ?>" required />
                    </div>
                    <div>
                        <label>Logo (Dark)</label>
                        <input type="text" name="logoDark" value="<?= htmlspecialchars($settings['logoDark'] ?? '') ?>" required />
                    </div>
                </div>
                <div class="form-grid two-columns">
                    <div>
                        <label>Phone</label>
                        <input type="text" name="phone" value="<?= htmlspecialchars($settings['phone'] ?? '') ?>" required />
                    </div>
                    <div>
                        <label>Primary Email</label>
                        <input type="email" name="email" value="<?= htmlspecialchars($settings['email'] ?? '') ?>" required />
                    </div>
                </div>
                <div class="form-grid two-columns">
                    <div>
                        <label>Contact Email 1</label>
                        <input type="email" name="contactEmail1" value="<?= htmlspecialchars($settings['contactEmail1'] ?? '') ?>" required />
                    </div>
                    <div>
                        <label>Contact Email 2</label>
                        <input type="email" name="contactEmail2" value="<?= htmlspecialchars($settings['contactEmail2'] ?? '') ?>" required />
                    </div>
                </div>
                <div class="form-grid two-columns">
                    <div>
                        <label>LinkedIn</label>
                        <input type="text" name="linkedin" value="<?= htmlspecialchars($settings['socialLinks']['linkedin'] ?? '') ?>" />
                    </div>
                    <div>
                        <label>Twitter</label>
                        <input type="text" name="twitter" value="<?= htmlspecialchars($settings['socialLinks']['twitter'] ?? '') ?>" />
                    </div>
                </div>
                <div class="form-grid two-columns">
                    <div>
                        <label>Instagram</label>
                        <input type="text" name="instagram" value="<?= htmlspecialchars($settings['socialLinks']['instagram'] ?? '') ?>" />
                    </div>
                    <div>
                        <label>Facebook</label>
                        <input type="text" name="facebook" value="<?= htmlspecialchars($settings['socialLinks']['facebook'] ?? '') ?>" />
                    </div>
                </div>
                <button type="submit">Save Settings</button>
            </form>
        </div>
    </div>
</body>
</html>
