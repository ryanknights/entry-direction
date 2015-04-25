(function (document, window, $)
{
	function entryDirection (event, includePaddingBorder)
	{	
		var el = $(this);

		if (includePaddingBorder === undefined || includePaddingBorder !== false)
		{
			includePaddingBorder = true;
		}

	    var width  = (includePaddingBorder)? el.outerWidth() : el.width(),
	        height = (includePaddingBorder)? el.outerHeight() : el.height(),
	        offset = el.offset(),
	        elX    = (event.pageX - offset.left - (width/2)) * ( width > height ? (height/width) : 1 ),
	        elY    = (event.pageY - offset.top  - (height/2)) * ( height > width ? (width/height) : 1 );

	    return Math.round((((Math.atan2(elY, elX) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;		
	}

	$.fn.entryDirection = entryDirection;

}(document, window, jQuery));