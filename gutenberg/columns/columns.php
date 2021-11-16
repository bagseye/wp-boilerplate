<?php
/**
 * Plugin Name:       Columns
 * Description:       Displays content in columns
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       columns
 *
 * @package           wpboiler-core
 */

function wpboiler_core_columns_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'columns/index.js';
	wp_register_script(
		'wpboiler-core-columns-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-columns-block-editor', 'columns' );

	$editor_css = 'columns/editor.css';
	wp_register_style(
		'wpboiler-core-columns-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'columns/style.css';
	wp_register_style(
		'wpboiler-core-columns-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/columns',
		array(
			'editor_script' 	=> 'wpboiler-core-columns-block-editor',
			'editor_style'  	=> 'wpboiler-core-columns-block-editor',
			'style'         	=> 'wpboiler-core-columns-block',
			'render_callback' 	=> 'wpboiler_core_columns_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_columns_block_init' );

function wpboiler_core_columns_render($attr, $content) {

	$html = '';
	$modifiers = array();

	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__inContent');
	$modifiers[] = $columns = (isset($attr['columnselect']) ? "columns__count--" . $attr['columnselect'] : 'columns__count--2');
	$modifiers[] = $narrow = (isset($attr['narrowcontent']) ? $attr['narrowcontent'] : '');
	$modifiers[] = $reverse = (isset($attr['reverseorder']) ? $attr['reverseorder'] : '');

	if($margins != 'margins__none' && $margins != 'margins__inContent' && isset($attr['margindouble'])) {
		$modifiers[] = $marginDouble = $attr['margindouble'];
	}

	if($columns == 'columns__count--2' && isset($attr['columnoffset'])) {
		$modifiers[] = $attr['columnoffset'];
	}

	$html = '<section class="columns ' . implode(" ", $modifiers) . '">
				<div class="columns__container">
					' . $content . '
				</div>
			</section>';

	return $html;

}
