//Variable for buy-in amount
var buyin = 15;

//Payout variables
var firstPlace = new Array(0,10,20,30,40,50,60,60,60,60,70,80,80,80,80,80,80,90,90,100,100,110,110,120,120,130,130,140,140,150,150,160,160,170,170,180,180,190,190,200,200,210,210,220,220,230,240,240,240,250,250,260,260);
var secondPlace = new Array(0,0,0,0,0,0,0,10,20,20,20,20,20,20,20,20,20,20,30,30,30,30,40,40,50,50,60,60,60,60,70,70,80,80,80,80,90,90,90,90,90,90,100,100,110,110,110,120,120,120,120,120,130);
var thirdPlace = new Array(0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,30,30,30,30,30,30,40,40,40,40,40,50,50,50,50,50,50,50,50,50,60,60,60,60,60);
var fourthPlace = new Array(0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,30,30,30);
var fifthPlace = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
var sixthPlace = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
var seventhPlace = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
var eighthPlace = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10);

function CalculateMoney()
{
	entrants = parseInt(document.getElementById('entrants').value);

	document.getElementById('moneyCollected').value = entrants * buyin;
	document.getElementById('leagueContribution').value = entrants * 3;
	document.getElementById('prizeFund').value = entrants * (buyin - 3);
	document.getElementById('placePayouts').value = entrants * (buyin - 5);
	document.getElementById('bountyPayouts').value = entrants * 2;
	return true;
}