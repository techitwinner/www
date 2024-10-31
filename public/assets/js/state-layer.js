$(document).ready(function () {
    const hasStateLayer = ['.btn', '.topbar-navitem'].join(',');
    $(hasStateLayer).each(function () {
        const $parent = $(this);

        // Create the state layer and append it to the parent
        const $stateLayer = $('<span class="state-layer"></span>');
        $parent.append($stateLayer);

        // Get the computed color of the parent element
        const parentColor = $parent.css('color');
        const colorWithOpacity = (opacity) => {
            return parentColor.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
        };

        // Hover effect
        $parent.hover(
            function () {
                $stateLayer.css('background-color', colorWithOpacity(0.08));
            },
            function () {
                $stateLayer.css('background-color', 'transparent');
            }
        );

        $parent.on('focusin', function () {
            $stateLayer.css('background-color', colorWithOpacity(0.1));
        });
        $parent.on('focusout', function () {
            $stateLayer.css('background-color', 'transparent');
        });

        // Mousedown and mouseup effects
        $parent.on('mousedown', function () {
            $stateLayer.css('background-color', colorWithOpacity(0.1));
        });

        $parent.on('mouseup', function () {
            $stateLayer.css('background-color', colorWithOpacity(0.08));
        });
    });

    const $tooltip = $('<div class="tooltip"></div>').appendTo('body');
});
