$(document).ready(function(){

	var dates = ["020817","121416","110916","101216","021016","091815"];

	// Get the table body
	var tbody = document.getElementById('videos');

	// Create new row when needed
	var newRow = document.createElement('tr');

	// Begin by adding a row to table body
	tbody.append(newRow);
	
	$(function(){
		var i;

		for (i = 0; i < dates.length; i++){

			// if the last cell added was the third cell in a row, add a new row
			if (i % 3 === 0){
				// I hate the fact that I have to declare these variables again instead of just using line 24
				var tbody = document.getElementById('videos');
				var newRow = document.createElement('tr');
				tbody.append(newRow);
			};

			var date = dates[i];

			// this goes inside every cell
			var video = '<div><a href="' + date + '.wmv"><img src="' + date + '.png" /></a></div>';

			// Create new cell for each item in dates array
			var newCell = document.createElement('td');

			// put video information in cell
			newCell.innerHTML = video;

			// find last row added
			var lastRow = tbody.lastChild;

			// add cell to last row added
			lastRow.appendChild(newCell);
		};
	});
});
