<?php

require 'common.php';

$db = DbConnection::getConnection();
$stmt = $db->prepare(
  'DELETE FROM Certification WHERE certificationID = ?'
);

$stmt->execute([
  $_POST['certificationID']
]);

// If needed, get auto-generated PK from DB
//$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

header('HTTP/1.1 303 See Other');
header('Location: ../certification/');
