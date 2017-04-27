//Run jQuery
$(document).ready(function(){
	var buzzer = $('#buzzer')[0];
	var count = parseInt($('#num').html());
	var breakCount = parseInt($('#breakNum').html());
	console.log(count);
	$('#reset').hide();

	$('#start').click(function(){
		var counter = setInterval(timer , 1000);
		function timer(){
			//hide variables
			$('#start, #minus5Clock , #add5Clock , #minus5Break, #add5Break, #breakNum,  #title1 , #title2').hide();
			$('#timeType').html("Session Time:");
			count-=1
			if (count===0){
				buzzer.play();
				clearInterval(counter);
				$('#start, #minus5Clock , #add5Clock, #minus5Break, #add5Break, #breakNum,  #title1 , #title2').show();
				$('#timeType').hide();
			}
			$('#num').html(count);

		}
	});

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

	$('#minus5Break').click(function(){
		if (breakCount > 5) {
		breakCount -= 5;
		$('#breakNum').html(breakCount);
		}
	})

	$('#add5Break').click(function(){
		if (breakCount < 100) {
		breakCount += 5;
		$('#breakNum').html(breakCount);
		}
	})


});