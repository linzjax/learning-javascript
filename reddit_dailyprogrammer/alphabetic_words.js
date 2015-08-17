function alphabetic_words(word){
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var word_array = word.split('');
	var placement = [];
	var in_order = true;
	$.each(word_array, function(i, word){
		letter = word_array.shift();
		$.each(alphabet, function(x, letters){
			if (letter === alphabet[x]){
				place = alphabet.indexOf(alphabet[x]);
				placement.push(place);
			}
		});
	});
	for (y = 0; y < placement.length; y++){
		if (placement[y] < placement[y-1]){
			in_order = false;
		}
	}
	if (in_order){
		console.log(word + ': IN ORDER');
	} else {
		console.log(word + ': NOT IN ORDER');
	}
}//end function

$(document).ready(function(){
	var word_list = 'billowy,biopsy,chinos,defaced,chintz,sponged,bijoux,abhors,fiddle,begins,chimps,wronged'.split(',');
	$.each(word_list, function(i, word){
		alphabetic_words(word);
	});
});//end document ready



