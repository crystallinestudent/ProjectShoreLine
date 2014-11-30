/* skel-baseline v2.0.0 | (c) n33 | getskel.com | MIT licensed */

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {

			// Global.
				global: {
					href: '/assets/css/style.css',
					containers: 720,
					grid: {
						gutters: ['2em', 0]
					}
				},

			// XLarge.
				xlarge: {
					media: '(max-width: 1680px)',
					href: '/assets/css/style-xlarge.css',
					containers: 720
				},

			// Large.
				large: {
					media: '(max-width: 1280px)',
					href: '/assets/css/style-large.css',
					containers: 720,
					grid: {
						gutters: ['1.5em', 0]
					},
					viewport: {
						scalable: false
					}
				},

			// Medium.
				medium: {
					media: '(max-width: 980px)',
					href: '/assets/css/style-medium.css',
					containers: '75%',
					grid: {
						zoom: 2
					}
				},

			// Small.
				small: {
					media: '(max-width: 736px)',
					href: '/assets/css/style-small.css',
					containers: '90%',
					grid: {
						zoom: 3,
						gutters: ['1.25em', 0]
					}
				},

			// XSmall.
				xsmall: {
					media: '(max-width: 480px)',
					href: '/assets/css/style-xsmall.css',
					grid: {
						zoom: 4
					}
				}

		},
		plugins: {
			layers: {

				// Config.
					config: {
						transform: true
					},

				// Navigation Panel.
					navPanel: {
						animation: 'pushX',
						breakpoints: 'medium',
						clickToHide: true,
						height: '100%',
						hidden: true,
						html: '<div data-action="moveElement" data-args="nav"></div>',
						orientation: 'vertical',
						position: 'top-right',
						side: 'right',
						width: 250
					},

				// Navigation Button.
					navButton: {
						breakpoints: 'medium',
						height: '4em',
						html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
						position: 'top-right',
						side: 'right',
						width: '6em'
					}

			}
		}
	});

	$(function() {

		// Waypoints

        $(document).ready(function() {
            $('.feature-image img').waypoint(function() {
                $(this).addClass('active');
            }, {
                offset: '65%'
            });
        });

        $(document).ready(function() {
            $('.smooth').smoothScroll({
                speed:1000,
            });
        });


	});

})(jQuery);
