<?php 

define('THEME_NAME', 'wpboiler');

require_once get_template_directory() . '/classes/class-wpboiler-inliner.php';

if(!function_exists('wpboiler_setup')) {

    function wpboiler_setup() {
        add_image_size( 'promo', 600 );
        add_image_size( 'cta', 2000 );
        
        add_theme_support( 'post-thumbnails' );

        add_theme_support( 'title-tag' );
    
        add_theme_support(
            'post-formats',
            array(
                'link',
                'aside',
                'gallery',
                'image',
                'quote',
                'status',
                'video',
                'audio',
                'chat',
            )
        );
    
        add_post_type_support( 'page', 'excerpt' );
    
        register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary menu', THEME_NAME ),
				'footer'  => __( 'Secondary menu', THEME_NAME ),
			)
		);
    
        add_theme_support(
            'html5',
            array(
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
                'navigation-widgets',
            )
        );
    
        $editor_stylesheet_path = './css/style-editor.css';
        add_theme_support( 'editor-styles' );
        add_editor_style( $editor_stylesheet_path );
    
        add_theme_support( 'responsive-embeds' );
        add_theme_support( 'editor-font-sizes' );
        add_theme_support( 'disable-custom-font-sizes' );
        add_theme_support( 'disable-custom-colors' );
        add_theme_support( 'disable-custom-gradients' );
        add_theme_support( 'editor-gradient-presets', array() );
        add_theme_support( 'custom-units', array() );
    
        $brand1 = '#161616';
        $brand2 = '#0093ca';
        $brand3 = '#ffffff';
        $brand4 = '#f2f5f6';
    
        add_theme_support('editor-color-palette', array(
            array(
                'name' => esc_html__( 'Brand 1', THEME_NAME ),
                'slug' => 'brand1',
                'color' => $brand1,
            ),
            array(
                'name' => esc_html__( 'Brand 2', THEME_NAME ),
                'slug' => 'brand2',
                'color' => $brand2,
            ),
            array(
                'name' => esc_html__( 'Brand 3', THEME_NAME ),
                'slug' => 'brand3',
                'color' => $brand3,
            ),
            array(
                'name' => esc_html__( 'Brand 4', THEME_NAME ),
                'slug' => 'brand4',
                'color' => $brand4,
            ),
        ));
    }
}
add_action('after_setup_theme', 'wpboiler_setup');

// require get_template_directory() . '/classes/class-wpboiler-svg-icons.php';
// require get_template_directory() . '/inc/template-functions.php';
// require get_template_directory() . '/inc/menu-functions.php';
// require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/inc/allowed-blocks.php';

function wpboiler_block_additional_styles_enqueue() {
    /**
	 * Adds new styling options to blocks in the sidebar
     * Also removes some default style options from blocks
	 *
	 */
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


function wpboiler_add_ie_class() {
    ?>
    <script>
    if ( -1 !== navigator.userAgent.indexOf( 'MSIE' ) || -1 !== navigator.appVersion.indexOf( 'Trident/' ) ) {
        document.body.classList.add('is-IE');
    }
    </script>
    <?php
}
add_action( 'wp_footer', 'wpboiler_add_ie_class' );


// Remove the basic block styles
function remove_wp_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
}
add_action( 'wp_enqueue_scripts', 'remove_wp_block_library_css' );

// add_filter( 'should_load_separate_core_block_assets', '__return_true' );