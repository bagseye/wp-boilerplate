<?php
/**
 * Plugin Name:       Columns
 * Description:       Displays content in columns
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.1.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       columns
 *
 * @package           wpboiler
 */

function wpboiler_columns_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'columns/index.js';
	wp_register_script(
		'wpboiler-columns-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-columns-block-editor', 'columns' );

	$editor_css = 'columns/editor.css';
	wp_register_style(
		'wpboiler-columns-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'columns/style.css';
	wp_register_style(
		'wpboiler-columns-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler/columns',
		array(
			'editor_script' 	=> 'wpboiler-columns-block-editor',
			'editor_style'  	=> 'wpboiler-columns-block-editor',
			'style'         	=> 'wpboiler-columns-block',
			'render_callback'	=> 'wpboiler_core_columns_render'
		)
	);
}
add_action( 'init', 'wpboiler_columns_block_init' );

function wpboiler_core_columns_render( $attr, $content ) {
	$html = '';

	$classes = array();

	$classes[] = $colCount = (isset($attr['columnselect']) ? 'columns__count--' . $attr['columnselect'] : 'columns__count--2');
	$classes[] = $margins = (isset($attr['marginSelect']) ? $attr['marginSelect'] : 'margins__inContent');
	$classes[] = $narrowContent = (isset($attr['narrowContent']) ? 'content__narrow' : '');
	$classes[] = $reverseOrder = (isset($attr['reverseOrder']) ? 'columns__reverse' : '');

	if($margins != 'margins__inContent' && $margins != 'margins__none' && isset($attr['marginDouble'])) {
		$marginDouble = 'margins__double';
		$classes[] = $marginDouble;
	}
	
	if($colCount == 'columns__count--2' && isset($attr['columnOffset'])) {
		$columnOffset = $attr['columnOffset'];
		$classes[] = $columnOffset;
	}

	$html = '<section class="columns ' . implode(" ", $classes) . '">
				<div class="columns__container">
					' . $content . '
				</div>
			</section>';

	return $html;
}

