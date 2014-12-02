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

    var crystalline = {
        formatPost:function($postContent){
            if($postContent.length){
                /* YouTube */
                /* Must be in http://youtu.be/xxxxxxxx format found in Share section */
                if( $postContent.has('a[href*="youtu.be"]').length ){
                    var $video = $postContent.find('a[href*="youtu.be"]');
                    $video.attr('data-poptrox', 'youtube,800x480').wrap('<span class="poptrox"></span>');
                }

                /* Vimeo */
                /* Must be in http://vimeo.com/xxxxxxxx format found in Share section */
                if( $postContent.has('a[href*="vimeo.com"]').length ){
                    var $video = $postContent.find('a[href*="vimeo.com"]');
                    $video.attr('data-poptrox', 'vimeo,800x480').wrap('<span class="poptrox"></span>');
                }

                /* Soundcloud */
                /* Must be in http://api.soundcloud.com/tracks/xxxxxxxx format found in Embed section */
                if( $postContent.has('a[href*="api.soundcloud.com"]').length ){
                    var $video = $postContent.find('a[href*="api.soundcloud.com"]');
                    $video.attr('data-poptrox', 'soundcloud').wrap('<span class="poptrox"></span>');
                }

                $poptroxElements = $('.poptrox');
                $poptroxElements.poptrox({
                    popupPadding:0,
                    usePopupDefaultStyling:false,
                });
            }
        }
    };

	$(function() {

        var	$window = $(window),
            $banner = $('#banner'),
			$body = $('body');

        $body.addClass('loading');

        // Banner Intro
        $('.banner-title').addClass('delay-05s');
        $('.banner-description').addClass('delay-1s');
        $('.banner-intro .actions').addClass('delay-05s');

        $window.load(function(){
            $body.removeClass('loading');

            $('.banner-title').addClass('animated fadeInDown');
            $('.banner-description').addClass('animated fadeInUp');
            $('.banner-intro .actions').addClass('animated fadeIn');
        });

        // Format Blog Posts/Pages
        var blog = $('.post-content');
        crystalline.formatPost(blog);

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
