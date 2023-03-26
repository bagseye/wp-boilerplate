<?php 

define('THEME_NAME', 'wpboiler');
// If there are problems with caching, 
// change this version number
define('CACHE_VERSION', '1.0.0');

// require get_template_directory() . '/classes/class-wpboiler-svg-icons.php';
require get_template_directory() . '/inc/template-functions.php';
require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/inc/allowed-blocks.php';
require get_template_directory() . '/inc/acf-functions.php';
require get_template_directory() . '/inc/custom-hooks.php';
require get_template_directory() . '/inc/post-types.php';
require get_template_directory() . '/inc/custom-taxonomies.php';
require get_template_directory() . '/inc/meta-boxes.php';

if(!function_exists('wpboiler_init')) {

    function wpboiler_init() {
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

        /**
         * Filter function used to remove the TinyMCE emoji plugin 
         * 
         * @param array $plugins 
         * @return array Difference between the two arrays
        */
        function disable_emojis_tinymce( $plugins ) {

            if( is_array( $plugins ) ) {
                return array_diff( $plugins, array( 'wpemoji' ) );
            } 
            return array();

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


        // Remove version number from header
        remove_action( 'wp_head', 'wp_generator' );
        remove_action( 'wp_head', 'wlwmanifest_link');
        remove_action( 'wp_head', 'rsd_link' );

        // Removes shortlink
        remove_action( 'wp_head', 'wp_shortlink_wp_head' );


        // Removes feed links 
        remove_action( 'wp_head', 'feed_links', 2 );

        // Removes comments feed 
        remove_action( 'wp_head', 'feed_links_extra', 3 );
    }

}
add_action('init', 'wpboiler_init');

if(!function_exists('wpboiler_setup')) {

    function wpboiler_setup() {

        /**
         * CUSTOM IMAGE SIZES
        */
        add_image_size( 'promo', 600 );
        add_image_size( 'cta', 2000 );
        add_image_size( 'post-item', 1000 );
        

        /**
         * ADD THEME SUPPORT
        */ 
        add_theme_support( 'post-thumbnails', array('post', 'page') );
        add_theme_support( 'title-tag' );
        add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ) );
        add_theme_support( 'responsive-embeds' );
        add_theme_support( 'editor-styles' );
    
        add_post_type_support( 'page', 'excerpt' );
    
        // add_editor_style( './css/style-editor.css' );
        add_editor_style( './dist/editorStyle.css' );

        remove_theme_support( 'core-block-patterns' );


        // NAV MENU REGISTRATION
        register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary menu', THEME_NAME ),
				'footer'  => __( 'Secondary menu', THEME_NAME ),
			)
		);
    }
}
add_action('after_setup_theme', 'wpboiler_setup');

/**
 * Script and styles enqueues
 * 
*/
function wpboiler_scripts_init() {

    // wp_enqueue_style( 'wpboiler-styles', get_template_directory_uri() . '/dist/style.css' );
    // wp_enqueue_style( 'wpboiler-app-styles', get_template_directory_uri() . '/dist/app.css' );

    // wp_enqueue_script( 'wpboiler-app-js', get_template_directory_uri() . '/dist/app.js', array(), CACHE_VERSION, true );

    // Remove basic block styles for WP core blocks
    wp_dequeue_style( 'wp-block-library' );

}
add_action( 'wp_enqueue_scripts', 'wpboiler_scripts_init' );



/**
 * Load Google Fonts
 * 
*/
function wpboiler_load_google_fonts() {
    ?>
    <link rel="dns-prefetch" href="https://fonts.gstatic.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"> 
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300&display=swap" as="fetch" crossorigin="anonymous">
    <?php
}
add_action( 'wp_head', 'wpboiler_load_google_fonts' );



/**
 * Custom scripts for the block editor
 * Used to add new options in the sidebar
 * Also removes basic functionality added by WP
 * 
*/
function wpboiler_block_additional_styles_enqueue() {
    wp_enqueue_script(
        'wpboiler-block-additonal-styles-script', get_template_directory_uri() . '/js/wpboiler-block-additional-styles.js', array('wp-blocks', 'wp-dom-ready', 'wp-edit-post')
    );
}
add_action( 'enqueue_block_editor_assets', 'wpboiler_block_additional_styles_enqueue' );



function wpboiler_the_html_classes() {
    /**
	 * Filters the classes for the main <html> element.
	 *
	 */
    $classes = apply_filters( 'wpboiler_html_classes', '' );
    if( !$classes ) {
        return;
    }
    echo 'class="' . esc_attr( $classes ) . '"';
}
// This scripts loader is used to load the scripts generated by HtmlWebpackPlugin
// This is used to load the scripts with the correct hash
function wpboiler_scripts_loader() {
    // if(is_front_page()) {
        $html = file_get_contents(__DIR__ . '/dist/index.html'); // get the contents of the generated index.html file using HtmlWebpackPlugin
        // get all the script tags
        // we want to inject the script tags in the footer using the file HtmlWebpackPlugin generates
        // this will supply the correct hash for the file
        preg_match_all('/<script.*?\s+src="([^"]+)"><\/script>/', $html, $matches); 

        foreach($matches[1] as $script) {
            $file_path = '/wp-content/themes/wp-boilerplate/dist/' . $script; // get the file path
            // $file_url = get_template_directory_uri() . $file_path; // get the file url
            $file_url = $script; // get the file url

            wp_enqueue_script(basename($script, '.js'), $file_url, array(), null, true); // enqueue the script
        }
    // }
}
add_action('wp_enqueue_scripts', 'wpboiler_scripts_loader');

function wpboiler_styles_loader() {
    /**
     * @TODO: If builds and devs work ok, remove the commented code below
    */
    // if(WP_ENV === 'development') {
        // wp_enqueue_style('wp-boilerplate-main', 'http://localhost:8080/wp-content/themes/wp-boilerplate/dist/app.css', [], null);
        // wp_enqueue_script('wp-boilerplate-main', 'http://localhost:8080/wp-content/themes/wp-boilerplate/dist/app.js', [], null, true);
    // } else {
        // if(is_front_page()) {
            $html = file_get_contents(__DIR__ . '/dist/index.html'); // get the contents of the generated index.html file using HtmlWebpackPlugin
            // get all the link tags
            // we want to inject the link tags in the header using the file HtmlWebpackPlugin generates
            // this will supply the correct hash for the file
            preg_match_all('/<link.*?\s+href="([^"]+\.css)".*?>/i', $html, $matches);
    
            foreach($matches[1] as $style) {
                $file_path = '/wp-content/themes/wp-boilerplate/dist/' . $style; // get the file path
                // $file_url = get_template_directory_uri() . $file_path; // get the file url
                $file_url = $style; // get the file url
    
                var_dump(basename($style, '.css'));
    
                wp_enqueue_style(basename($style, '.css'), $file_url, array(), false, 'all'); // enqueue the styles
            }
        // }
    // }
}
add_action('wp_enqueue_scripts', 'wpboiler_styles_loader');


