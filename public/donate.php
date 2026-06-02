<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name  = htmlspecialchars(trim($input['name']  ?? ''));
$email = htmlspecialchars(trim($input['email'] ?? ''));
$phone = htmlspecialchars(trim($input['phone'] ?? ''));

if (!$name || !$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name and a valid email are required.']);
    exit;
}

$to      = 'hello@biblepeedia.org';
$subject = 'Donation Account Number Request – Biblepeedia';

$body  = "Someone has requested Biblepeedia's donation account details.\n\n";
$body .= "Name:  $name\n";
$body .= "Email: $email\n";
if ($phone) {
    $body .= "Phone: $phone\n";
}
$body .= "\nPlease reply to them with the account number at your earliest convenience.";

$headers  = "From: noreply@biblepeedia.org\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail could not be sent. Please try again.']);
}
