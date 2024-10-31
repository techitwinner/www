$(document).ready(function () {
    // Store the navbar element
    const $navbar = $('.navbar-autohide-enabled');

    // Initially set the navbar to be visible
    $navbar.css({
        transform: 'translateY(0)',
        transition: 'transform 0.3s ease', // Smooth transition for hiding
    });

    // On scroll, hide or show the navbar
    let lastScrollTop = 0;
    $(window).on('scroll', function () {
        const currentScrollTop = $(this).scrollTop();

        if (currentScrollTop > lastScrollTop) {
            // User is scrolling down
            $navbar.css('transform', 'translateY(-100%)'); // Hide the navbar
        } else {
            // User is scrolling up
            $navbar.css('transform', 'translateY(0)');
        }

        lastScrollTop = currentScrollTop; // Update the last scroll position
    });
});
