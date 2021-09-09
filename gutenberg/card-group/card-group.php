<?php
/**
 * Plugin Name:       Card Group
 * Description:       Displays a group of cards. Useful for displaying snippets of information
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       card-group
 *
 * @package           wpboiler-core
 */

function wpboiler_core_card_group_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'card-group/index.js';
	wp_register_script(
		'wpboiler-core-card-group-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-card-group-block-editor', 'card-group' );

	$editor_css = 'card-group/editor.css';
	wp_register_style(
		'wpboiler-core-card-group-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'card-group/style.css';
	wp_register_style(
		'wpboiler-core-card-group-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/card-group',
		array(
			'editor_script' => 'wpboiler-core-card-group-block-editor',
			'editor_style'  => 'wpboiler-core-card-group-block-editor',
			'style'         => 'wpboiler-core-card-group-block',
		)
	);
}
add_action( 'init', 'wpboiler_core_card_group_block_init' );