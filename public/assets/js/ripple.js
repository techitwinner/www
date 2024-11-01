/*!
 * Ripple.js Copyright (c) 2014 Jacob Kelley
 * Licensed under MIT (https://github.com/jakiestfu/Ripple.js/blob/develop/LICENSE)
 */

;(function($, document, Math){
    $.ripple = function(selector, options) {
        var self = this;
        self.selector = selector;
        self.defaults = {
            on: 'mousedown',
            opacity: 0.15,
            color: "auto",
            multi: true,
            duration: 0.5,
            rate: function(pxPerSecond) {
                return pxPerSecond;
            },
            easing: 'linear'
        };
        self.defaults = $.extend({}, self.defaults, options);
        var Trigger = function(e) {
            var $this = $(this);
            var $ripple;
            var settings;
            $this.addClass('has-ripple');
            settings = $.extend({}, self.defaults, $this.data());
            if ( settings.multi || (!settings.multi && $this.find(".ripple").length === 0) ) {
                $ripple = $("<span></span>").addClass("ripple");
                $ripple.appendTo($this);
                if (!$ripple.height() && !$ripple.width()) {
                    var size = Math.max($this.outerWidth(), $this.outerHeight());
                    $ripple.css({
                        height: size,
                        width: size
                    });
                }
                if(settings.rate && typeof settings.rate == "function") {
                    var rate = Math.round( $ripple.width() / settings.duration );
                    var filteredRate = settings.rate(rate);
                    var newDuration = ( $ripple.width() / filteredRate);
                    if(settings.duration.toFixed(2) !== newDuration.toFixed(2)) {
                        settings.duration = newDuration;
                    }
                }
                var color = (settings.color == "auto") ? $this.css('color') : settings.color;
                var css = {
                    animationDuration: (settings.duration).toString() + 's',
                    animationTimingFunction: settings.easing,
                    background: color,
                    opacity: settings.opacity
                };
                $ripple.css(css);
            }
            if(!settings.multi) {
                $ripple = $this.find(".ripple");
            }
            $ripple.removeClass("ripple-animate");
            var x = e.pageX - $this.offset().left - $ripple.width() / 2;
            var y = e.pageY - $this.offset().top - $ripple.height() / 2;
            if(settings.multi) {
                $ripple.one('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function() {
                    $(this).remove();
                });
            }
            $ripple.css({
                top: y + 'px',
                left: x + 'px'
            }).addClass("ripple-animate");
        };
        $(document).on(self.defaults.on, self.selector, Trigger);
    };
})(jQuery, document, Math);

$.ripple(".btn, .drawer-item, .topbar-navitem, .card");