<?php
/**
 * Plugin Name:       Call to Action
 * Description:       Displays text and media to guide users to other areas of the site and grab their attention
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cta
 *
 * @package           wpboiler-core
 */


function wpboiler_core_cta_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'cta/index.js';
	wp_register_script(
		'wpboiler-core-cta-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-cta-block-editor', 'cta' );

	$editor_css = 'cta/editor.css';
	wp_register_style(
		'wpboiler-core-cta-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'cta/style.css';
	wp_register_style(
		'wpboiler-core-cta-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/cta',
		array(
			'editor_script' => 'wpboiler-core-cta-block-editor',
			'editor_style'  => 'wpboiler-core-cta-block-editor',
			'style'         => 'wpboiler-core-cta-block',
		)
	);
}
add_action( 'init', 'wpboiler_core_cta_block_init' );
