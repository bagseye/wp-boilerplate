<?php
/**
 * Plugin Name:       Promo Group Item
 * Description:       A single promo group card. This is only available within a promo group block
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       promo-group-item
 *
 * @package           wpboiler-core
 */

function wpboiler_core_promo_group_item_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'promo-group-item/index.js';
	wp_register_script(
		'wpboiler-core-promo-group-item-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-promo-group-item-block-editor', 'promo-group-item' );

	$editor_css = 'promo-group-item/editor.css';
	wp_register_style(
		'wpboiler-core-promo-group-item-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'promo-group-item/style.css';
	wp_register_style(
		'wpboiler-core-promo-group-item-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/promo-group-item',
		array(
			'editor_script' => 'wpboiler-core-promo-group-item-block-editor',
			'editor_style'  => 'wpboiler-core-promo-group-item-block-editor',
			'style'         => 'wpboiler-core-promo-group-item-block',
		)
	);
}
add_action( 'init', 'wpboiler_core_promo_group_item_block_init' );