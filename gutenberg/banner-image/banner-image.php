<?php
/**
 * Plugin Name:       Banner Image
 * Description:       Displays a full-width image
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       banner-image
 *
 * @package           wpboiler-core
 */


function wpboiler_core_banner_image_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'banner-image/index.js';
	wp_register_script(
		'wpboiler-core-banner-image-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-banner-image-block-editor', 'banner-image' );

	$editor_css = 'banner-image/editor.css';
	wp_register_style(
		'wpboiler-core-banner-image-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'banner-image/style.css';
	wp_register_style(
		'wpboiler-core-banner-image-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/banner-image',
		array(
			'editor_script' 	=> 'wpboiler-core-banner-image-block-editor',
			'editor_style'  	=> 'wpboiler-core-banner-image-block-editor',
			'style'         	=> 'wpboiler-core-banner-image-block',
			'render_callback'	=> 'wpboiler_core_banner_image_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_banner_image_block_init' );

function wpboiler_core_banner_image_render($attr, $content) {
	$html = $mediaid = $mediaurl = $mediaSrc = $mediaAlt = $pictureMarkup = '';
	$modifiers = array();

	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__none');

	if($margins != 'margins__none' && isset($attr['marginsdouble'])) {
		$modifiers[] = $attr['marginsdouble'];
	}

	if(isset($attr['mediaid'])) {
		$pictureMarkup = createImage($attr['mediaid'], 'cta');
	}

	$html = '<div class="bannerimage ' . implode(" ", $modifiers) . '">
				<div class="bannerimage__media">
					' . $pictureMarkup . '
				</div>
			</div>';

	return $html;
}
