//Variable for buy-in amount
var buyin = 25;

//Payout variables
var firstPlace = new Array(0,20,40,60,80,100,120,120,120,120,140,160,160,160,160,160,160,180,180,200,200,220,220,240,240,260,260,280,280,300,300,320,320,340,340,360,360,380,380,400,400,420,420,440,440,460,480,480,480,500,500,500,500);
var secondPlace = new Array(0,0,0,0,0,0,0,20,40,40,40,40,40,40,40,40,40,40,60,60,60,60,80,80,100,100,120,120,120,120,140,140,160,160,160,160,180,180,180,180,180,180,200,200,220,220,220,240,240,240,240,260,260);
var thirdPlace = new Array(0,0,0,0,0,0,0,0,0,20,20,20,20,20,20,20,20,20,20,20,40,40,40,40,40,40,40,40,60,60,60,60,60,60,80,80,80,80,80,100,100,100,100,100,100,100,100,100,120,120,120,120,120);
var fourthPlace = new Array(0,0,0,0,0,0,0,0,0,0,0,0,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,40,40,40,40,40,40,40,40,40,40,40,40,60,60,60);
var fifthPlace = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,40);
var sixthPlace = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20);
var seventhPlace = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20);
var eighthPlace = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20);

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
