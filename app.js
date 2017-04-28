//Run jQuery
$(document).ready(function(){
	var buzzer = $('#buzzer')[0];
	var count = parseInt($('#num').html());
	var breakTime = parseInt($('#breakNum').html());
	console.log(count);
	$('#reset').hide();
$('#start').click(function(){
		var counter = setInterval(timer , 1000);
		count = count * 60;
		function timer(){
			//hide variables
			$('#start, #minus5Clock , #add5Clock , #minus5Break, #add5Break, #breakNum,  #title1 , #title2').hide();
			$("#timeType").show();
			$('#timeType').html("Session Time:");
			count -= 1
			if (count === 0){
				buzzer.play();
				clearInterval(counter);
				var startBreak = setInterval(breakTimer , 1000);
				$("#num").hide();	
			}
			if (count%60 >=10){
				$("#num").html(count/60+":"+count%60);
			}
			
			function breakTimer(){
				$("#timeType").html("Break Time:");
				$("#breakNum").show();
				$("#timeType").show();
				breakTime -= 1;
				if (breakTime === 0){
					clearInterval(startBreak);
					buzzer.play();
					$("#reset").show();
					$("#breakNum ,#timeType").hide();
				}
				$("#breakNum").html(breakTime);
			}

		}
	});

	$("#reset").click(function(){
		count = 25;
		breakTime=5
		$("#num").html(count);
		$("#breakNum").html(breakTime);
		$("#start, #minus5Clock , #add5Clock , #minus5Break, #add5Break, #num ,#breakNum,  #title1 , #title2").show();
		$("#reset").hide();
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