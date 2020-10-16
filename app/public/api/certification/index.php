<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Certification';
$vars = [];

if (isset($_GET['name'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM Certification WHERE name = ?';
  $vars = [ $_GET['name'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$certifications = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certifications, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
