<?php
/**
 * Plugin Name:       Site Search
 * Description:       Displays a search form
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       site-search
 *
 * @package           wpboiler-core
 */


function wpboiler_core_site_search_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'site-search/index.js';
	wp_register_script(
		'wpboiler-core-site-search-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-site-search-block-editor', 'site-search' );

	$editor_css = 'site-search/editor.css';
	wp_register_style(
		'wpboiler-core-site-search-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'site-search/style.css';
	wp_register_style(
		'wpboiler-core-site-search-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/site-search',
		array(
			'editor_script' 	=> 'wpboiler-core-site-search-block-editor',
			'editor_style'  	=> 'wpboiler-core-site-search-block-editor',
			'style'         	=> 'wpboiler-core-site-search-block',
			'render_callback'	=> 'wpboiler_core_site_search_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_site_search_block_init' );

function wpboiler_core_site_search_render($attr, $content) {

	$html = '';

	$html = '<form id="searchform" method="get" action="' . esc_url(home_url('/')) . '">
				<input type="text" class="search-field" name="s" placeholder="Search" value="' . get_search_query() . '">
				<input type="submit" value="Search">
			</form>';

	return $html;
}
