<?php
/**
 * Plugin Name:       Column
 * Description:       Displays an individual column
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       column
 *
 * @package           wpboiler
 */

function wpboiler_column_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'column/index.js';
	wp_register_script(
		'wpboiler-column-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-column-block-editor', 'column' );

	$editor_css = 'column/editor.css';
	wp_register_style(
		'wpboiler-column-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'column/style.css';
	wp_register_style(
		'wpboiler-column-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler/column',
		array(
			'editor_script' => 'wpboiler-column-block-editor',
			'editor_style'  => 'wpboiler-column-block-editor',
			'style'         => 'wpboiler-column-block',
		)
	);
}
add_action( 'init', 'wpboiler_column_block_init' );
