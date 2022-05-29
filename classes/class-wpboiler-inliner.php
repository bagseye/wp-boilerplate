<?php 

// If there are problems with caching, 
// change this version number
define('CACHE_VERSION', '1.0.0');

class WpboilerInliner {

    function __construct() {
        add_action( 'init', [$this, 'init'] );
        add_action( 'wp_head', [$this, 'addCriticalJS'] );
        add_action( 'wp_head', [$this, 'addCriticalCSS'] );
        add_action( 'wp_footer', [$this, 'addGeneralCSS'] );
    }


    function addCriticalJS() {
        if(!is_admin()) {
            echo '<script>' . file_get_contents(get_template_directory_uri() . '/js/atf.js') . '</script>';
        }
    }

    // This will add the critical CSS to the header
    function addCriticalCSS() {
        // Set to not load in the admin as this will 'break' it
        if(!is_admin()) {
            $criticalFonts = '<link rel="preconnect" href="https://fonts.googleapis.com">
                              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                              <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet"> ';
    
            $criticalCSSContent = file_get_contents( get_template_directory_uri() . '/css/splide-core.min.css' );
            $criticalCSSContent .= file_get_contents( get_template_directory_uri() . '/css/atf.css' );
            $criticalCSS = "<style>{$criticalCSSContent}</style>";

            echo $criticalFonts . $criticalCSS;

        }
    }

    // General styles, these will be added in the footer
    function addGeneralCSS() {

        // Add the filename to be added to the footer(below the fold) here
        // Add files in their correct cascade order
        echo '<link rel="stylesheet" href="' . get_template_directory_uri() . '/css/general.css?ver=' . CACHE_VERSION . '" />';
    }

    function init() {

        // Load JS files
        wp_enqueue_script( 'wpboiler-splide-script', get_template_directory_uri() . '/js/splide.min.js', array(), CACHE_VERSION, true );
        wp_enqueue_script('wpboiler-general-js', get_template_directory_uri() . '/js/general.js', array(), CACHE_VERSION, true);
 
    }

}

$wpboilerInliner = new WpboilerInliner();