function addString(nbr_one, nbr_two){

  nbr_one = parseInt(nbr_one);
	nbr_two = parseInt(nbr_two);
  var resulting_number = nbr_one + nbr_two;
  resulting_number = resulting_number.toString();
  nbr_one = nbr_one.toString();
  nbr_one = nbr_one.toString();
	
  document.write('"' + nbr_one + '" + "'  + nbr_two + '" = "' + resulting_number + '"<br>');
};

addString(4, 8);

addString(258, 143);
