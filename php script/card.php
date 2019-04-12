<?php 
header("Access-Control-Allow-Origin: *");?>
<?php
class Card{

public static function generateCard(){
    $count=$_GET['personCount'];
    $cardCount=52;
    $persons=array();
    $values = array('2', '3', '4', '5', '6', '7', '8', '9', 'X', 'J', 'Q', 'K', 'A');
    $suits  = array('S', 'H', 'D', 'C');

    $cards = array();
    foreach ($suits as $suit) {
    foreach ($values as $value) {
    $cards[] ="{$suit}-{$value}";
    }
    }
    for($i=0; $i<$count; $i++){
        $values = Array();
        $cardarray=Array();
        $values['cardList']=$cardarray;
        array_push($persons,$values);
    }
    shuffle($cards);
    $l=0;  
    for($i=0; $i<$cardCount; $i++){
        array_push($persons[$l]['cardList'], $cards[$i]); 
        $l == $count-1 ? ($l=0):($l++);
    }
  return json_encode($persons);
}

}
$cardslist = Card::generateCard();
echo ($cardslist);