$(document).ready(function(){
	
	var years = ["2017","2016","2015","2014"]
	var dates = [
		["020817"],
		["121416","110916","101216","091416","081016","060816","051116","041316","030916","021016","011316"],
		["112015","101615","091815","082115","071715","061915","051515","041715","032015","022015","011615"],
		["112114","111814","100314"]
	];
	
	var createTable = function(year){
		// Get the page body
		var pageBody = document.getElementsByTagName('body')[0];
		// create a table
		var newTable = document.createElement('table');
		// put the table in the body
		pageBody.append(newTable);
		// create a tbody because the stupid HCM will if I don't and that would screw up my script so ...
		var newTableBody = document.createElement('tbody');
		// assign the tBody a year
		newTableBody.setAttribute('id', year);
		// put the tBody in the table
		newTable.append(newTableBody);
		
		var bannerRow = document.createElement('tr');
		var bannerCell = document.createElement('td');
		bannerRow.append(bannerCell);
		bannerCell.setAttribute('colspan', '3');
		var banner = '<img src="files//upload/GrandRounds/' + year + '.png" />';
		bannerCell.innerHTML = banner;
		newTableBody.append(bannerRow);
	}
	
	var fillTable = function (thisYear){
		
		var i;
		
		var datesArray = dates[thisYear]; // what year is it?
		
		for (i = 0; i < datesArray.length; i++){
			
			var thisTable = years[thisYear];
			
			// if the last cell added was the third cell in a row, add a new row
			if (i % 3 === 0){
				// I hate the fact that I have to declare these variables again instead of just using line 24
				var tbody = document.getElementById(thisTable);
				var newRow = document.createElement('tr');
				tbody.append(newRow);
			};
			
			var date = datesArray[i]; // grab the dates for this table's year
			
			// this goes inside every cell
			var video = '<div><a href="files//upload/GrandRounds/' + date + '.wmv"><img src="' + date + '.png" /></a></div>';
			
			// Create new cell for each item in dates array
			var newCell = document.createElement('td');
			
			// put video information in cell
			newCell.innerHTML = video;
			
			// find last row added
			var lastRow = tbody.lastChild;
			
			// add cell to last row added
			lastRow.appendChild(newCell);
		};
	}
	
	$(function(){
		
		var j;
		
		for (j=0; j < years.length; j++){
			var year = years[j];
			createTable(year);
			var thisYear = j;
			fillTable(thisYear);
		}	
		
	});
	
});