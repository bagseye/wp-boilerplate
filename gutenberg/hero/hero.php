<?php
/**
 * Plugin Name:       Hero
 * Description:       Displays a hero for displaying standout content
 * Requires at least: 5.8
 * Requires PHP:      7.4.1
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hero
 *
 * @package           wpboiler-core
 */

function wpboiler_core_hero_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'hero/index.js';
	wp_register_script(
		'wpboiler-core-hero-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-hero-block-editor', 'hero' );

	$editor_css = 'hero/editor.css';
	wp_register_style(
		'wpboiler-core-hero-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'hero/style.css';
	wp_register_style(
		'wpboiler-core-hero-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/hero',
		array(
			'editor_script' 	=> 'wpboiler-core-hero-block-editor',
			'editor_style'  	=> 'wpboiler-core-hero-block-editor',
			'style'         	=> 'wpboiler-core-hero-block',
			'render_callback'	=> 'wpboiler_core_hero_render'

		)
	);
}
add_action( 'init', 'wpboiler_core_hero_block_init' );

function wpboiler_core_hero_render($attr, $content) {

	// $html = '';
	// $mediaID = '';
	// $mediaURL = '';
	// $mediaSrc = '';
	// $mediaAlt = '';
	// $pictureMarkup = '';
	// $modifiers = array();

	// $modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__topBottom');

	// if($margins != 'margins__none' && isset($attr['marginsdouble'])) {
	// 	$modifiers[] = $attr['marginsdouble'];
	// }

	// if(isset($attr['mediaID'])) {
	// 	$mediaID = $attr['mediaID'];
	// 	$mediaSrc = wp_get_attachment_image_src($mediaID, 'post-item');
	// 	$mediaAlt = get_post_meta($mediaID, '_wp_attachment_img_alt', TRUE);

	// 	$mediaURL = $mediaSrc[0];

	// 	$pictureMarkup = '
	// 		<picture>
	// 			' . wp_filter_content_tags('<img class="callout__background wp-image-' . $mediaID . '" src="' . $mediaURL . '" alt="' . $mediaAlt . '" />') . '
	// 		</picture>
	// 	';
	// }

	// $html = '<div class="callout ' . implode(" ", $modifiers) . '">
	// 			<div class="callout__container">
	// 				<div class="callout__media">
	// 					' . $pictureMarkup . '
	// 				</div>';

	// 				if($content) {
	// 					$html .= '<div class="callout__content">
	// 								' . $content . '
	// 							</div>';
	// 				}
					
	// 	$html .= '</div>
	// 		</div>';

	// return $html;

    $html = null;

    $html  = '<section class="hero splide">
                ' . $content . '
            </section>';
}
