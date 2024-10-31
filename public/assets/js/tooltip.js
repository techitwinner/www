$(document).ready(function () {
    // Create the tooltip element and append it to the body
    const $tooltip = $('<div class="tooltip"></div>').appendTo('body');

    $('.has-tooltip').hover(
        function () {
            const $element = $(this);
            const tooltipText = $element.attr('data-tooltip');
            $tooltip.text(tooltipText);

            // Calculate the element's position and dimensions
            const elementOffset = $element.offset();
            const elementWidth = $element.outerWidth();
            const elementHeight = $element.outerHeight();
            const tooltipWidth = $tooltip.outerWidth();
            const tooltipHeight = $tooltip.outerHeight();
            const screenPadding = 10; // Buffer space from screen edges

            // Determine available space around the element
            const spaceAbove = elementOffset.top - $(window).scrollTop();
            const spaceBelow = $(window).height() - (elementOffset.top + elementHeight - $(window).scrollTop());
            const spaceLeft = elementOffset.left;
            const spaceRight = $(window).width() - (elementOffset.left + elementWidth);

            // Default position: below the element
            let top = elementOffset.top + elementHeight + 10;
            let left = elementOffset.left + (elementWidth / 2) - (tooltipWidth / 2);

            // Adjust position if there isn't enough space
            if (spaceBelow < tooltipHeight + screenPadding) {
                top = elementOffset.top - tooltipHeight - 10; // Position above if no space below
            }
            if (spaceAbove < tooltipHeight + screenPadding && spaceBelow < tooltipHeight + screenPadding) {
                top = elementOffset.top + elementHeight / 2 - tooltipHeight / 2;
                if (spaceRight > spaceLeft) {
                    left = elementOffset.left + elementWidth + 10; // Position to the right
                } else {
                    left = elementOffset.left - tooltipWidth - 10; // Position to the left
                }
            }

            // Show tooltip with calculated position and scale animation
            $tooltip.css({
                top: top,
                left: left,
                opacity: 1,
                transform: 'scale(1)',
            });
        },
        function () {
            // Hide tooltip on mouse leave
            $tooltip.css({
                opacity: 0,
                transform: 'scale(0)',
            });
        }
    );
});
