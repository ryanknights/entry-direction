#Entry-Direction

jQuery plugin that returns 0-3 (0 - Top, 1 - Right, 2 - Bottom, 3 - Left) based on direction the mouse enters the element.

```
$(element).on('mouseenter', function (event)
{
	var directionEntered = $(this).entryDirection(event);
});
```