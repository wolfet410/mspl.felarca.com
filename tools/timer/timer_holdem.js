// JavaScript Document

var c=0;
var t;
var round;
var nextRound;
var roundLength=15;
var breakNumber = new Array (0,'Break', 'Break', 'Break', 'Break','Done');
var sBlind =  new Array (0,1,2,3,4,breakNumber[1],5,10,15,20,breakNumber[2],25,50,75,breakNumber[3],100,200,300,400,breakNumber[4],500,1000,1500,2000,2500,breakNumber[5]);
var bBlind =  new Array (0,2,4,6,8,breakNumber[1],10,20,30,40,breakNumber[2],50,100,150,breakNumber[3],200,400,600,800,breakNumber[4],1000,2000,3000,4000,5000,breakNumber[5]);

function GatherInformation()
{
	document.getElementById('startTournament').disabled = true;
	document.getElementById('round').value = 0;
	StartTimer();
	return true;
}

function ChangeChips(round)
{
	picName = 'images/chips_' + round + '.gif';
	document.chips.src = picName;
	return true;
}

function changeRoundWav(round)
{
	switch(round)
	{
		case 1: document.round_1.Play(); ChangeChips(round); document.LeagueBanner.src='images/league.gif'; document.GameBanner.src='images/holdem.gif'; break
		case 2: document.next_round.Play(); break    
		case 3: document.next_round.Play(); break    
		case 4: document.next_round.Play(); document.BreakBanner.src='images/break_banner.gif'; break    
		case 5: document.break_round.Play(); ChangeChips(round); document.GameBanner.src='images/break.gif'; document.BreakBanner.src='images/spacer.gif'; break    
		case 6: document.next_round.Play(); document.GameBanner.src='images/holdem.gif'; break    
		case 7: document.next_round.Play(); break    
		case 8: document.next_round.Play(); break    
		case 9: document.next_round.Play(); document.BreakBanner.src='images/break_banner.gif'; break    
		case 10: document.break_round.Play(); ChangeChips(round); document.GameBanner.src='images/break.gif'; document.BreakBanner.src='images/spacer.gif'; break    
		case 11: document.next_round.Play(); document.GameBanner.src='images/holdem.gif'; break    
		case 12: document.next_round.Play(); break    
		case 13: document.next_round.Play(); document.BreakBanner.src='images/break_banner.gif'; break    
		case 14: document.break_round.Play(); ChangeChips(round); document.GameBanner.src='images/break.gif'; document.BreakBanner.src='images/spacer.gif'; break    
		case 15: document.next_round.Play(); document.GameBanner.src='images/holdem.gif'; break    
		case 16: document.next_round.Play(); break    
		case 17: document.next_round.Play(); break    
		case 18: document.next_round.Play(); document.BreakBanner.src='images/break_banner.gif'; break    
		case 19: document.break_round.Play(); ChangeChips(round); document.GameBanner.src='images/break.gif'; document.BreakBanner.src='images/spacer.gif'; break    
		case 20: document.next_round.Play(); document.GameBanner.src='images/holdem.gif'; break    
		case 21: document.next_round.Play(); break    
		case 22: document.next_round.Play(); break    
		case 23: document.next_round.Play(); break    
		case 24: document.next_round.Play(); break    
	}
	return true;
}

function StartTimer()
{
	round = parseInt(document.getElementById('round').value) + 1;
	nextRound = parseInt(round) + 1;
	document.getElementById('round').value = round;
	document.getElementById('sBlind').value = sBlind[round];
	document.getElementById('bBlind').value = bBlind[round];
	document.getElementById('minutes').value = roundLength;
	document.getElementById('seconds').value = 0;
	changeRoundWav(round);
	if (round=='24')
	{
		return true;
	}
	t = setTimeout("TimedCount()",1000);
}

function TimedCount()
{
	document.getElementById('restartTimer').disabled = true;
	document.getElementById('stopTimer').disabled = false;
	minutes = document.getElementById('minutes').value;
	seconds = document.getElementById('seconds').value;
	
	if (seconds == 0)
	{
		document.getElementById('seconds').value = 59;
		document.getElementById('minutes').value = parseInt(minutes) - 1;
	}
	
	else if (seconds == 1)
	{
		document.getElementById('seconds').value = 0;
		if (minutes == 2)
		{
			document.warning.Play();
		}

		if (minutes == 0)
		{
			StopTimer();
			StartTimer();
			return true;
		}
	}
	
	else
	{

		document.getElementById('seconds').value = parseInt(seconds) - 1;
	}
	t = setTimeout("TimedCount()",1000);
}

function StopTimer()
{
	clearTimeout(t);
	document.getElementById('stopTimer').disabled = true;
	document.getElementById('restartTimer').disabled = false;
	return true;
}

function RestartTimer()
{
	TimedCount();
	round = parseInt(document.getElementById('round').value);
	if (round < 5)
	{
		ChangeChips(1);
	}
	
	else if (round < 10)
		{
			ChangeChips(5);
		}

	else if (round < 14)
	{
		ChangeChips(10);
	}

	else if (round < 19)
	{
		ChangeChips(14);
	}
	
	else
	{
		ChangeChips(19);
	}
	return true;
}	
