<?php

  $phoneCompanies = array(
    0 => array('name' => 'Oi', 'code' => 14, 'category' => 'Celular', 'price' => 2),
    1 => array('name' => 'Vivo', 'code' => 15, 'category' => 'Celular', 'price' => 1),
    2 => array('name' => 'Tim', 'code' => 41, 'category' => 'Celular', 'price' => 3),
    3 => array('name' => 'GVT', 'code' => 25, 'category' => 'Fixo', 'price' => 1),
    4 => array('name' => 'Embratel', 'code' => 21, 'category' => 'Fixo', 'price' => 2)
  );

  echo json_encode($phoneCompanies);

?>
