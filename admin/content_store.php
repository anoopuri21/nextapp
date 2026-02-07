<?php
function load_json_file(string $filePath, array $fallback = []): array {
    if (!file_exists($filePath)) {
        return $fallback;
    }

    $raw = file_get_contents($filePath);
    if ($raw === false) {
        return $fallback;
    }

    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : $fallback;
}

function save_json_file(string $filePath, array $data): bool {
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    if ($json === false) {
        return false;
    }

    return file_put_contents($filePath, $json) !== false;
}
?>
