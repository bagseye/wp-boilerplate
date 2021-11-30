<?php
/**
 * Plugin Name:       Fixed Spacer
 * Description:       Creates a fixed unit of space
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fixed-spacer
 *
 * @package           wpboiler-core
 */

function wpboiler_core_fixed_spacer_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'fixed-spacer/index.js';
	wp_register_script(
		'wpboiler-core-fixed-spacer-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-fixed-spacer-block-editor', 'fixed-spacer' );

	$style_css = 'fixed-spacer/style.css';
	wp_register_style(
		'wpboiler-core-fixed-spacer-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/fixed-spacer',
		array(
			'editor_script' 	=> 'wpboiler-core-fixed-spacer-block-editor',
			'style'         	=> 'wpboiler-core-fixed-spacer-block',
			'render_callback'	=> 'wpboiler_core_fixed_spacer_render',
		)
	);
}
add_action( 'init', 'wpboiler_core_fixed_spacer_block_init' );

function wpboiler_core_fixed_spacer_render($attr, $content) {

	$html = '';

	$html = '<div class="fixedspacer"></div>';

	return $html;
}
