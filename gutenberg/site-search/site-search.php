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

	register_block_type(
		'wpboiler-core/site-search',
		array(
			'editor_script' 	=> 'wpboiler-core-site-search-block-editor',
			'editor_style'  	=> 'wpboiler-core-site-search-block-editor',
			'render_callback'	=> 'wpboiler_core_site_search_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_site_search_block_init' );

function wpboiler_core_site_search_render($attr, $content) {

	$html = '';
	$modifiers = array();

	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__topBottom');

	if($margins != 'margins__none' && isset($attr['margindouble'])) {
		$modifiers[] = $attr['margindouble'];
	}

	$html = '<div class="sitesearch ' . implode(" ", $modifiers) . '">
				<div class="sitesearch__container">
					<form id="searchform" method="get" action="' . esc_url(home_url('/')) . '">
						<input class="sitesearch__field" type="text" name="s" placeholder="Search" value="' . get_search_query() . '">
						<input class="sitesearch__submit" type="submit" value="Search">
					</form>
				</div>
			</div>';

	return $html;
}
