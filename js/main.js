document.addEventListener('DOMContentLoaded', function() {


	var player1 = document.getElementById('p1_strip');
	var player2 = document.getElementById('p2_strip');
	var trackLength = 2;
	var movesP1 = 2;
	var movesP2 = 2;
	 
	                                                  
	trackLength = prompt("Please choose your lenght of race from 10 _ 30");
	    
	while (trackLength< 10 || trackLength> 30 || isNaN(trackLength)) {
		var chooseAgain = prompt("you didn't choose yolur length between 10_30");
	};

	// some weird indentation happening here, makes it hard to read

	for (var i = 1; i <= trackLength-1; i++) {			    
		player1.insertCell(2);
		player2.insertCell(2);
    }

    var updatePlayerPosition = function (player, position){
    	if(player === "p1_strip") {
    		
    		// what is 'c'? use descriptive variable names, even if they are long :)
	    	var c = document.querySelector( ".active1");
	    	if (c != null){
	    		c.className = "";	    	    	
	   			document.getElementById('p1_strip').cells[position].className = "active1";
			}

	   	}else if (player === "p2_strip") {
	   		var q = document.querySelector(".active2");
	   		if(q != null) {
	   			q.className = "";
	   			document.getElementById('p2_strip').cells[position].className = "active2";
	   		}
	   	}

	}	
	

	// this is hard to read - if you pull the parts out into well named functions, it will result in more readable, and more easily changable code.
	// functions could be "inputHandler" and "checkWin"... 
	document.addEventListener('keyup', function(keyPress){
		if(keyPress.keyCode === 81){
	    		
	    	// needs correct indentation
	    	if(movesP1< trackLength) {
	    		updatePlayerPosition('p1_strip', movesP1);
	    		movesP1++;
	    	        
    		}else {
    			updatePlayerPosition('p1_strip', movesP1);
	    		alert("horra, player 1 is winner");
	    		 confirm("Are ready to play again?" + location.reload());
	    		
	    	}
	    }else if (keyPress.keyCode === 80){
	    	if(movesP2< trackLength){
	    		updatePlayerPosition('p2_strip', movesP2);
	    		movesP2++;
	    	}else {
	    		updatePlayerPosition('p2_strip', movesP2);
	    		alert("horra, player 2 is winner");
	    		confirm("Are ready to play again?" + location.reload());

	    	};
	    }
	});
			
	    		
});
