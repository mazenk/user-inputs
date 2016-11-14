$(document).ready(function() {
	console.log("hello")
	$("#submit").on("click", function() {
		var answer = $("#scale").val()
		var answerNumber = parseInt(answer);

		if (answerNumber < 11) {
			var answerText = "...maybe";
		} else {
			var answerText = "Ah... thinking outside the box"
		}

		$("#answer").text(answerText);

		});
});