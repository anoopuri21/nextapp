<?php
session_start();

const ADMIN_EMAIL = 'admin@nextapp.io';
const ADMIN_PASSWORD = 'admin123';

function is_admin_logged_in(): bool {
    return isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;
}

function require_admin(): void {
    if (!is_admin_logged_in()) {
        header('Location: login.php');
        exit();
    }
}
?>
