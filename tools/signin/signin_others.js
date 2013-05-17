// JavaScript Document

//Bounty variables
var firstBounty = new Array(0,2,4,6,8,10,12,14,16,18,20,11,12,13,14,15,16,17,18,19,20,14,14,15,16,16,17,18,18,14,15,15,16,16,17,17,18,14,15,15,16,16,16,17,17,15,15,15,16,16,16,17,17);
var secondBounty = new Array(0,0,0,0,0,0,0,0,0,0,0,11,12,13,14,15,16,17,18,19,20,14,15,15,16,17,17,18,19,14,15,15,16,16,17,17,18,15,15,15,16,16,17,17,17,15,15,15,16,16,16,17,17);
var thirdBounty = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,15,16,16,17,18,18,19,15,15,16,16,17,17,18,18,15,15,16,16,16,17,17,18,15,15,16,16,16,17,17,17);
var fourthBounty = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,15,16,16,17,17,18,18,15,15,16,16,17,17,17,18,15,15,16,16,16,17,17,17);
var fifthBounty = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,16,16,16,17,17,18,18,15,16,16,16,17,17,17,18);
var sixthBounty = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,16,16,16,17,17,17,18);

function SetupTables()
{
	entrants = parseInt(document.getElementById('entrantsRemaining').value);
	document.getElementById('table1').value = entrants;
	
	if (entrants < 21)
	{
		tTables = Math.ceil(entrants / 10);
	}
	
	else
	{
		tTables = 2 + Math.ceil((entrants - 20) / 8);
	}
	
	sPer = parseInt(entrants / tTables);
	if (sPer > 8)
	{
		sPer = 8;
	}

	leftovers = entrants - (tTables * sPer);
	
	for(i=1; i < (tTables + 1); i++)
	{
		tableId = 'table' + i;
		document.getElementById(tableId).value = sPer;
	}
	
	if(sPer == 8)
	{
		if (tTables == 1)
		{
			document.getElementById('table1').value = parseInt(document.getElementById('table1').value) + leftovers;
		}
		
		else
		{
			for(j=1; j < (leftovers + 1); j++)
			{
				tableNo = ((j+1) % 2) + 1;
				tableId = 'table' + tableNo;
				document.getElementById(tableId).value = parseInt(document.getElementById(tableId).value) + 1;
			}
		}
	}
	
	else
	{
		for(j=1; j < (leftovers + 1); j++)
		{
			tableId = 'table' + j;
			document.getElementById(tableId).value = parseInt(document.getElementById(tableId).value) + 1;
		}
	}

	for(k=(tTables+1); k < 7; k++)
	{
		tableId = 'table' + k;
		document.getElementById(tableId).value = 0;
	}

	return true;
}