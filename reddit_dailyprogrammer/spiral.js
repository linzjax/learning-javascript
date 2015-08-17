
function spiral(size, number){
	var center = Math.ceil(size/2);
	console.log(center);
	var counting = 1;
	var pattern = 1;
	var given;

	var point = {
		x : center,
		y : center
	};
	
	while (counting < number){
	for (z = 0; z <= pattern; z++){
		for (i=1; i < 3; i++){
			if (i % 2 === 1 && pattern % 2 === 1){
				point.x = point.x + 1;
			} else if (i % 2 === 0 && pattern % 2 === 1){
				point.y = point.y - 1;
			} else if (i % 2 === 1 && pattern % 2 === 0){
				point.x = point.x - 1;
			} else if (i % 2 === 0 && pattern % 2 === 0){
				point.y = point.y + 1;
			}
			given = '('+point.x+','+point.y+')';
			console.log(given);
			counting++;
			if (counting === number){
				break;
			}
		}
	}
	}
}//end function

$(document).ready(function(){
	

	spiral(3, 7);

});//end document ready


//5x5 grid
//center is (3,3), top-left is (1,1)
//create a spiral that starts at (3,3), moves to (4,3)
/* 
(1,1)(2,1)(3,1)
(1,2)(2,2)(3,2)
(1,3)(2,3)(3,3)


5-4-3
6 1-2
7-8-9








4-3-2
5 0-1
6-7-8

6-5-4
7 2-3
8-9-10

(n+1)/2 = #of moves
(7+1)/2 = 4
1,1,2,2





for (z=1; z <= #of moves(/2?); z++){
	want it to do each move twice:
	for (q=0; q<2; q++){
		if (z is odd and q is 0){
			center[x] + 1;
			i++;
		} elif (z is odd and q is 1){
			center[y] - 1;
			i++;
		} elif (z is even and q is 0){
			
		} elif (z is even and q is 1){

	}
}

So if you know the size 'S', you need to be able to find the middle
S/2 = middle - .5
Math.ceil(s/2)

so let's do number - 1, so that it breaks down at corners.
so let's say 7. making center 0, and our target 6.
6/2 = 3, so go through the pattern 3 times. Right and up are odd, left and down are even.

(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, etc...)

x+ will always be odd
x- will always be even


ONE:
center[x] + 1;
i++;

TWO:
center[y] - 1;
i++;

THREE:
center[x] - 1;
i++
FOUR:
center[x] - 1;
i++

FIVE:
center[y] + 1;
i++
SIX:
center[y] + 1;
i++

So let's say number = 2;
We could store this in an object
center = {
	x: 2;
	y: 2;
}
#2 = {
	x: 2 + 1;
	y: 2;
}
#3 = {
	x: 3;
	y: 2 - 1;
}
#4 = {
	x: 3 - 1;
	y: 1;
}
#5 = {
	x: 2 - 1;
	y: 1;
}
#6 = {
	x: 1;
	y: 1 + 1;
}
#7 = {
	x: 1;
	y: 2 + 1;
}

*/
