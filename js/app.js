// Problem: No user interaction causes change to application
// Solution: When user interacts cause changes to app

var color = $('.selected').css('background-color');

// When clicking on control list items
$('.controls li').click(function() {
	// Deselect sibling elements
	$(this).siblings().removeClass('selected');
	// Select clicked element
	$(this).addClass('selected');
	// Cache current color here
	color = $(this).css('background-color');
});


// When "New Color" button is clicked 
	// Show color select menu or hide menu

// When color sliders change
	// Update the new color span

// When "add color" is presed
	// Append the color to the list
	// Select the new color

// On mouse events on the canvass
	// Draw lines

































































