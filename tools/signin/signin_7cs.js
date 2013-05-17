// JavaScript Document

//Bounty variables
var firstBounty = new Array(0,2,4,6,8,10,12,14,16,9,10,11,12,13,14,15,16,11,12,12,13,14,14,15,16,12,13,13,14,14,15,15,16,13,13,14,14,14,15,15,16,13,14,14,14,15,15,15,16,14,14,14,14);
var secondBounty = new Array(0,0,0,0,0,0,0,0,0,9,10,11,12,13,14,15,16,11,12,13,13,14,15,15,16,12,13,13,14,14,15,15,16,13,13,14,14,15,15,15,16,13,14,14,14,15,15,15,16,14,14,14,15);
var thirdBounty = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,13,14,14,15,16,16,13,13,14,14,15,15,16,16,13,14,14,14,15,15,16,16,14,14,14,15,15,15,16,16,14,14,14,15);
var fourthBounty = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,14,14,15,15,16,16,13,14,14,15,15,15,16,16,14,14,14,15,15,15,16,16,14,14,15,15);
var fifthBounty = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,14,14,15,15,16,16,16,14,14,15,15,15,16,16,16,14,14,15,15);
var sixthBounty = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,14,15,15,15,16,16,16,14,15,15,15);

function SetupTables()
{
	entrants = parseInt(document.getElementById('entrantsRemaining').value);
	document.getElementById('table1').value = entrants;
	
	tTables = Math.ceil(entrants / 8);
	sPer = parseInt(entrants / tTables);
	leftovers = entrants - (tTables * sPer);
	
	for(i=1; i < (tTables + 1); i++)
	{
		tableId = 'table' + i;
		document.getElementById(tableId).value = sPer;
	}
	
	for(j=1; j < (leftovers + 1); j++)
	{
		tableId = 'table' + j;
		document.getElementById(tableId).value = parseInt(document.getElementById(tableId).value) + 1;
	}

	for(k=(tTables+1); k < 7; k++)
	{
		tableId = 'table' + k;
		document.getElementById(tableId).value = 0;
	}

	return true;
}