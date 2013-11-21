var hej = 1;
$(document).ready(function() {
$.getJSON("database.php", function(data){
  // vad du vill göra här, allt retuneras i data-variabeln
  console.log(data.lol);
  hej = data.lol
});
alert(hej);
});


	 simpleText = {
					      x: (window.innerHeight/100)*20,
					      y: (window.innerHeight/100)*90,
					      text: "lol",
				          fontSize: 30,
				          fontFamily: 'Calibri',
			    	      fill: 'black'
					       
					};


