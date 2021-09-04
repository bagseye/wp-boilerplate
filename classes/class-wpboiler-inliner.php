<?php 

// If there are problems with caching, 
// change this version number
define('CACHE_VERSION', '1.0.0');

class WpboilerInliner {

    function __construct() {
        add_action( 'init', array(&$this, 'init') );
        add_action( 'wp_head', array(&$this, 'addCriticalCss') );
        add_action( 'wp_footer', array(&$this, 'addGeneralCss') );
    }

    // This will add the critical CSS to the header
    function addCriticalCss() {
        // Set to not load in the admin as this will 'break' it
        if(!is_admin()) {
            $criticalFonts = '<link rel="preconnect" href="https://fonts.googleapis.com">
                              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                              <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,300&display=swap" rel="stylesheet"> ';
    
            $criticalCSSContent = file_get_contents( get_template_directory_uri() . '/css/atf.css' );
            $criticalCSS = "<style type='text/css'>
                                <!-- BEGIN CRITICAL STYLES -->
                                {$criticalCSSContent}
                                <!-- END CRITICAL STYLES -->
                            </style>";

            echo $criticalFonts . $criticalCSS;

        }
    }

    // General styles, these will be added in the footer
    function addGeneralCss() {

        // Add the filename to be added to the footer(below the fold) here
        // Add files in their correct cascade order
        // e.g filename.css
        // filename.min.css 
        // subdirectory/filename.css
        $generalCssFileName = array(
            'general.css',
            'type.css',
        );

        foreach($generalCssFileName as $cssFileName) {
            $linkFormat = '<link rel="stylesheet" href="' . get_template_directory_uri() . '/css/%s?ver=%s" />';
        
            $cssLink = sprintf($linkFormat, $cssFileName, CACHE_VERSION);

            echo $cssLink;
        }
    }

    function init() {

        // Remove everything to do with emojis
        remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
        remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
        remove_action( 'wp_print_styles', 'print_emoji_styles' );
        remove_action( 'admin_print_styles', 'print_emoji_styles' );

        remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
        remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
        remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

        add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
        add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );

        // Remove version number from header
        remove_action( 'wp_head', 'wp_generator' );

        remove_action( 'wp_head', 'wlwmanifest_link');
        remove_action( 'wp_head', 'rsd_link' );

        // Removes shortlink
        remove_action( 'wp_head', 'wp_shortlink_wp_head' );

        // Removes feed links 
        remove_action( 'wp_head', 'feed_links', 2 );

        // // Removes comments feed 
        remove_action( 'wp_head', 'feed_links_extra', 3 );

        /**
         * Filter function used to remove the TinyMCE emoji plugin 
         * 
         * @param array $plugins 
         * @return array Difference between the two arrays
        */
        function disable_emojis_tinymce( $plugins ) {

            if( is_array( $plugins ) ) {
                return array_diff( $plugins, array( 'wpemoji' ) );
            } else {
                return array();
            }

        } 
        
        /**
         * Remove emoji CDN hostname from DNS prefetching hints
         * 
         * @param array $urls URLs to print for resource hints 
         * @param string $relation_type The relation type the URLs are printed for 
         * @return array Difference between the two arrays 
        */
        function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {

            if( 'dns-prefetch' == $relation_type ) {
                /** This filter is documented in wp-includes/formatting.php */
                $emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );

                $urls = array_diff( $urls, array( $emoji_svg_url ) );
            }

            return $urls;

        }

        // Load JS files
        wp_enqueue_script('wpboiler-critical-js', get_template_directory_uri() . '/js/atf.min.js', array(), CACHE_VERSION, false);
        wp_enqueue_script('wpboiler-general-js', get_template_directory_uri() . '/js/general.min.js', array(), CACHE_VERSION, true);
 
    }

}

$wpboilerInliner = new WpboilerInliner();