<?php
require_once 'auth.php';
require_admin();
require_once 'content_store.php';

$aboutFile = __DIR__ . '/../data/about.json';
$defaultAbout = [
    'headline' => 'Building dependable digital ecosystems for growing teams',
    'summary' => 'NextApp helps mid-size organizations orchestrate services, products, and industry insights through a single, dependable platform.',
    'mission' => 'Our mission is to simplify how teams discover, launch, and scale initiatives with clarity and speed.',
    'vision' => 'We envision a connected operating system where every service, product, and industry insight is accessible in seconds.',
    'values' => [
        'Customer-first execution',
        'Data-informed decisions',
        'Transparent collaboration',
        'Continuous improvement',
    ],
    'highlights' => [
        [
            'title' => '12+ years of delivery',
            'description' => 'Serving product-led organizations across fintech, healthcare, and consumer tech.',
        ],
        [
            'title' => '150+ launches',
            'description' => 'From MVPs to global rollouts, our team has delivered with measurable impact.',
        ],
        [
            'title' => 'Always-on support',
            'description' => 'Dedicated success teams with clear SLAs, playbooks, and reporting.',
        ],
    ],
];

$content = load_json_file($aboutFile, $defaultAbout);
$message = null;
$error = null;

if ($_POST) {
    $content['headline'] = $_POST['headline'] ?? '';
    $content['summary'] = $_POST['summary'] ?? '';
    $content['mission'] = $_POST['mission'] ?? '';
    $content['vision'] = $_POST['vision'] ?? '';
    $valuesRaw = $_POST['values'] ?? '';
    $content['values'] = array_values(array_filter(array_map('trim', explode("\n", $valuesRaw))));

    $content['highlights'] = [
        [
            'title' => $_POST['highlight_title_1'] ?? '',
            'description' => $_POST['highlight_desc_1'] ?? '',
        ],
        [
            'title' => $_POST['highlight_title_2'] ?? '',
            'description' => $_POST['highlight_desc_2'] ?? '',
        ],
        [
            'title' => $_POST['highlight_title_3'] ?? '',
            'description' => $_POST['highlight_desc_3'] ?? '',
        ],
    ];

    if (save_json_file($aboutFile, $content)) {
        $message = 'About content updated successfully!';
    } else {
        $error = 'Unable to save about content. Please check file permissions.';
    }
}

$valuesText = implode("\n", $content['values'] ?? []);
$highlights = $content['highlights'] ?? [];
?>
<!DOCTYPE html>
<html>
<head>
    <title>Edit About Content</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>About Content</h1>
            <p>Update the about section with your latest story, mission, and highlights.</p>
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
                    <label>Headline</label>
                    <input type="text" name="headline" value="<?= htmlspecialchars($content['headline'] ?? '') ?>" required />
                </div>
                <div>
                    <label>Summary</label>
                    <textarea name="summary" rows="3" required><?= htmlspecialchars($content['summary'] ?? '') ?></textarea>
                </div>
                <div>
                    <label>Mission</label>
                    <textarea name="mission" rows="3" required><?= htmlspecialchars($content['mission'] ?? '') ?></textarea>
                </div>
                <div>
                    <label>Vision</label>
                    <textarea name="vision" rows="3" required><?= htmlspecialchars($content['vision'] ?? '') ?></textarea>
                </div>
                <div>
                    <label>Values (one per line)</label>
                    <textarea name="values" rows="4" required><?= htmlspecialchars($valuesText) ?></textarea>
                </div>
                <div class="form-grid two-columns">
                    <div>
                        <label>Highlight 1 Title</label>
                        <input type="text" name="highlight_title_1" value="<?= htmlspecialchars($highlights[0]['title'] ?? '') ?>" required />
                    </div>
                    <div>
                        <label>Highlight 1 Description</label>
                        <textarea name="highlight_desc_1" rows="2" required><?= htmlspecialchars($highlights[0]['description'] ?? '') ?></textarea>
                    </div>
                </div>
                <div class="form-grid two-columns">
                    <div>
                        <label>Highlight 2 Title</label>
                        <input type="text" name="highlight_title_2" value="<?= htmlspecialchars($highlights[1]['title'] ?? '') ?>" required />
                    </div>
                    <div>
                        <label>Highlight 2 Description</label>
                        <textarea name="highlight_desc_2" rows="2" required><?= htmlspecialchars($highlights[1]['description'] ?? '') ?></textarea>
                    </div>
                </div>
                <div class="form-grid two-columns">
                    <div>
                        <label>Highlight 3 Title</label>
                        <input type="text" name="highlight_title_3" value="<?= htmlspecialchars($highlights[2]['title'] ?? '') ?>" required />
                    </div>
                    <div>
                        <label>Highlight 3 Description</label>
                        <textarea name="highlight_desc_3" rows="2" required><?= htmlspecialchars($highlights[2]['description'] ?? '') ?></textarea>
                    </div>
                </div>
                <button type="submit">Save About Content</button>
            </form>
        </div>
    </div>
</body>
</html>
