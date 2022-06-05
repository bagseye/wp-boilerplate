<?php
/**
 * Plugin Name:       Separator
 * Description:       A styling block that separates content using a horizontal line
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       separator
 *
 * @package           wpboiler-core
 */


function wpboiler_core_separator_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'separator/index.js';
	wp_register_script(
		'wpboiler-core-separator-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-separator-block-editor', 'separator' );

	register_block_type(
		'wpboiler-core/separator',
		array(
			'editor_script' 	=> 'wpboiler-core-separator-block-editor',
			'render_callback'	=> 'wpboiler_core_separator_render',
		)
	);
}
add_action( 'init', 'wpboiler_core_separator_block_init' );

function wpboiler_core_separator_render($attr, $content) {

	$html = '';
	$modifiers = array();

	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__topBottom');

	if($margins != 'margins__none' && isset($attr['marginsdouble'])) {
		$modifiers[] = $marginDouble = $attr['marginsdouble'];
	}

	$html = '<hr class="separator ' . implode(" ", $modifiers) . '" />';

	return $html;
}
