<?php
/**
 * Plugin Name:       Callout Item
 * Description:       An individual callout item
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       callout-item
 *
 * @package           wpboiler-core
 */

function wpboiler_core_callout_item_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'callout-item/index.js';
	wp_register_script(
		'wpboiler-core-callout-item-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-callout-item-block-editor', 'callout-item' );

	register_block_type(
		'wpboiler-core/callout-item',
		array(
			'editor_script' 	=> 'wpboiler-core-callout-item-block-editor',
			'render_callback'	=> 'wpboiler_core_callout_item_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_callout_item_block_init' );

function wpboiler_core_callout_item_render($attr,$content) {

	$html = '';

	$title = (isset($attr['title']) ? $attr['title'] : '');
	$content = (isset($attr['content']) ? $attr['content'] : '');

	$html = '<div class="callout__item">';

				if($title) {
					$html .= '<h5 class="callout__item--title">' . $title . '</h5>';
				}

				if($content) {
					$html .= '<p class="callout__item--content">' . $content . '</p>';
				}

	
	$html .= '</div>';

	return $html;

}
