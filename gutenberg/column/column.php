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

	register_block_type(
		'wpboiler/column',
		array(
			'editor_script' => 'wpboiler-column-block-editor',
		)
	);
}
add_action( 'init', 'wpboiler_column_block_init' );
