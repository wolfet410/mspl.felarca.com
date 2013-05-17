// JavaScript Document

var maxEntrants = 48;
var tTables = 0;
var players = new Array('Kim Ad', 'Rick Ad', 'Chris Al', 'Brian Be', 'Mark Co', 'Ott Cu', 'Keith Da', 'Tom De Jr.', 'Tom De Sr.', 'Emily Ec', 'Dan Fe', 'Frank Fe Jr.', 'Frank Fe Sr.', 'Fred Fe', 'Fred Fe II', 'Sam Fe', 'Samantha Fe', 'Brandon Fe', 'Ray Fi', 'Marc Fr', 'Kristen He', 'Darren Ho', 'Mike Ho', 'Amber Ho', 'James Ho', 'Mark Ho', 'Sonny Ja', 'Dan Ja', 'Rob Ki', 'Geoff Ki', 'Pete Ki', 'Ray La', 'Bud Le', 'Bill M', 'Paul Ma', 'Colin Ma', 'Jerry Ma', 'Ryan Mc', 'Joe Mc', 'Jeremy Mi', 'Derek Mo', 'Seann Mo', 'John Ne', 'Rick Ne', 'Chris Pa', 'Brian Pf', 'Chris Pr', 'Jim Ra', 'Chad Ru', 'Mark Ru', 'Mike S', 'John Sa', 'Matt Sc', 'Craig Sh', 'Mary Sh', 'Jeff St', 'Joe Te', 'Kris To', 'Eric Va', 'Laura Vi', 'Kim W', 'Ted W', 'Sandy Wa', 'James Wi', 'Todd Wi', 'Heather Wo', 'Tim Wo', 'Todd Wo');

var retiredPlayers = new Array('Nick At', 'Danielle Ba', 'Sam Ba', 'Ken De', 'Ross De', 'Bryan Ec', 'Kathy Fe', 'Dionne G', 'Michael Ga', 'Bob Ir', 'Marvin Ja Jr.', 'Marvin Ja Sr.', 'Chris Ju', 'Matt La', 'Jason Mo', 'Scott Mu', 'Jeff Pe', 'Ryan Po', 'Jim Ro', 'Jeff Sc', 'Matt S', 'Don Su', 'Rick Ug', 'Travis Va', 'JP Wo', 'Becky Zu');

function Initialize()
{
	document.getElementById('entrants').value = '0';
	document.getElementById('entrantsRemaining').value = '0';
	document.getElementById('entrantsUnpaid').value = '0';
	document.getElementById('moneyCollected').value = '0';
	CalculateMoney();
	GetPayouts();
	return true;
}

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

function WritePlayers()
{
	for(i=0; i<players.length; i++)
	{
		writeStatement1 = 'onClick="StatusChange(' + "'" + players[i] + "');" + '"';
		writeStatement2 = "<input type='button' id='" + players[i] + "' value='" + players[i] + "' " + writeStatement1 + " class='class1'>";
		writeStatement = writeStatement1 + writeStatement2;
		document.write(writeStatement2);
	}
	return true;
}

function WriteRetiredPlayers()
{
	for(i=0; i<retiredPlayers.length; i++)
	{
		writeStatement1 = 'onClick="StatusChange(' + "'" + retiredPlayers[i] + "');" + '"';
		writeStatement2 = "<input type='button' id='" + retiredPlayers[i] + "' value='" + retiredPlayers[i] + "' " + writeStatement1 + " class='class1'>";
		writeStatement = writeStatement1 + writeStatement2;
		document.write(writeStatement2);
	}
	return true;
}

function GetPayouts()
{
	document.getElementById('firstPlace').value = firstPlace[entrants];
	document.getElementById('secondPlace').value = secondPlace[entrants];
	document.getElementById('thirdPlace').value = thirdPlace[entrants];
	document.getElementById('fourthPlace').value = fourthPlace[entrants];
	document.getElementById('fifthPlace').value = fifthPlace[entrants];
	document.getElementById('sixthPlace').value = sixthPlace[entrants];
	document.getElementById('seventhPlace').value = seventhPlace[entrants];
	document.getElementById('eighthPlace').value = eighthPlace[entrants];

	document.getElementById('firstBounty').value = firstBounty[entrants];
	document.getElementById('secondBounty').value = secondBounty[entrants];
	document.getElementById('thirdBounty').value = thirdBounty[entrants];
	document.getElementById('fourthBounty').value = fourthBounty[entrants];
	document.getElementById('fifthBounty').value = fifthBounty[entrants];
	document.getElementById('sixthBounty').value = sixthBounty[entrants];
	return true;
}

function StatusChange(name)
{
	if (document.getElementById(name).className == 'class1')
	{
		if(document.getElementById('entrants').value==maxEntrants)
		{
			alertMessage = 'You have reached the maximum number of entrants (' + maxEntrants + ').  You will not be able to add more entrants until one or more are removed.'
			alert(alertMessage);
		}
		
		else
		{
			document.getElementById(name).className = 'class2';
			document.getElementById('entrants').value = parseInt(document.getElementById('entrants').value) + 1;
			document.getElementById('entrantsUnpaid').value = parseInt(document.getElementById('entrantsUnpaid').value) + 1;
			document.getElementById('entrantsRemaining').value = parseInt(document.getElementById('entrantsRemaining').value) + 1;
		}
	}
	
	else if (document.getElementById(name).className == 'class2')
	{
		document.getElementById('entrantsUnpaid').value = parseInt(document.getElementById('entrantsUnpaid').value) - 1;
		document.getElementById(name).className = 'class3';
	}
	
	else if (document.getElementById(name).className == 'class3')
	{
		document.getElementById(name).className = 'class4';
		document.getElementById('entrantsRemaining').value = parseInt(document.getElementById('entrantsRemaining').value) - 1;
	}
	
	else if (document.getElementById(name).className == 'class4')
	{
		document.getElementById(name).className = 'class1';
		document.getElementById('entrants').value = parseInt(document.getElementById('entrants').value) - 1;
	}
	
	CalculateMoney();
	GetPayouts();
	SetupTables();
	return true;
}

function NewPersonAdd(name)
{
	nameText = name + 'Text';
	document.getElementById(name).value = document.getElementById(nameText).value;
	StatusChange(name);
}

function CloseTournament()
{
	playerButtons = document.getElementsByTagName('');
}