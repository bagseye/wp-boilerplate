<?php
/**
 * Plugin Name:       Callout
 * Description:       Displays an image with up to 3 detail areas
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       callout
 *
 * @package           wpboiler-core
 */

function wpboiler_core_callout_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'callout/index.js';
	wp_register_script(
		'wpboiler-core-callout-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-callout-block-editor', 'callout' );

	register_block_type(
		'wpboiler-core/callout',
		array(
			'editor_script' 	=> 'wpboiler-core-callout-block-editor',
			'render_callback'	=> 'wpboiler_core_callout_render'

		)
	);
}
add_action( 'init', 'wpboiler_core_callout_block_init' );

function wpboiler_core_callout_render($attr, $content) {

	$html = $mediaid = $mediaurl = $mediaSrc = $mediaAlt = $pictureMarkup = '';
	$modifiers = array();

	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__topBottom');

	if($margins != 'margins__none' && isset($attr['marginsdouble'])) {
		$modifiers[] = $attr['marginsdouble'];
	}

	if(isset($attr['mediaid'])) {
		$mediaid = $attr['mediaid'];
		$mediaSrc = wp_get_attachment_image_src($mediaid, 'post-item');
		$mediaAlt = get_post_meta($mediaid, '_wp_attachment_img_alt', TRUE);

		$mediaurl = $mediaSrc[0];

		$pictureMarkup = '
			<div class="callout__media">
				<picture>
					' . wp_filter_content_tags('<img class="callout__background wp-image-' . $mediaid . '" src="' . $mediaurl . '" alt="' . $mediaAlt . '" />') . '
				</picture>
			</div>
		';
	}

	$html = '<div class="callout ' . implode(" ", $modifiers) . '">
				<div class="callout__container">
					' . $pictureMarkup . '';

					if($content) {
						$html .= '<div class="callout__content">
									' . $content . '
								</div>';
					}
					
		$html .= '</div>
			</div>';

	return $html;
}
