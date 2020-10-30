
<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM certifiedPeople';
$vars = [];

if (isset($_GET['certifiedPeopleID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM certifiedPeople WHERE certifiedPeopleID = ?';
  $vars = [ $_GET['certifiedPeopleID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$certifiedPeople = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certifiedPeople, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;

