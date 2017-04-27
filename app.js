//Run jQuery
$(document).ready(function(){
	var buzzer = $('#buzzer')[0];
	var count = parseInt($('#num').html());
	console.log(count);
	$('#reset').hide();


	$('#minus5Clock').click(function(){
		if (count > 5){
		count -= 5;
		$('#num').html(count);
		console.log(count);
	}
	});

	$('#add5Clock').click(function(){
		if (count < 100) {
		count += 5;
		$('#num').html(count);
		}
	})
});