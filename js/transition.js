﻿
// Ids courants
var image  = '#img-1';
var bouton = '#b1';

// Timer de l'animation
var timer;

$('#b1').click(function()
{
	if (image !== '#img-1')
	{
		$('#barre').css('width','0px');
		$(bouton).css('color','#999');
		$('#b1').css('color','#006540');
		bouton = '#b1';
		barre_width = 0;
		
		$(image).fadeOut(750);
		$('#img-1').fadeIn(750);
		image = '#img-1';
	}
});

$('#b2').click(function()
{
	if (image !== '#img-2')
	{
		$('#barre').css('width','0px');
		$(bouton).css('color','#999');
		$('#b2').css('color','#006540');
		bouton = '#b2';
		barre_width = 0;
		
		$(image).fadeOut(750);
		$('#img-2').fadeIn(750);
		image = '#img-2';
	}
});

$('#b3').click(function()
{
	if (image !== '#img-3')
	{
		$('#barre').css('width','0px');
		$(bouton).css('color','#999');
		$('#b3').css('color','#006540');
		bouton = '#b3';
		barre_width = 0;
		
		$(image).fadeOut(750);
		$('#img-3').fadeIn(750);
		image = '#img-3';
	}
});

timer = setInterval(function()
{
	switch (image)
	{
		case '#img-1': 
			$('#img-1').fadeOut(750);
			$('#img-2').fadeIn(750);
			
			$('#b1').css('color','#999');
			$('#b2').css('color','#006540');
			
			image = '#img-2';
			bouton = '#b2';
		break;
		case '#img-2':
			$('#img-2').fadeOut(750);
			$('#img-3').fadeIn(750);
			
			$('#b2').css('color','#999');
			$('#b3').css('color','#006540');
			
			image = '#img-3';
			bouton = '#b3';
		break;
		case '#img-3':
			$('#img-3').fadeOut(750);
			$('#img-1').fadeIn(750);
			
			$('#b3').css('color','#999');
			$('#b1').css('color','#006540');
			
			image = '#img-1';
			bouton = '#b1';
		break;
	}
}, 5000);
