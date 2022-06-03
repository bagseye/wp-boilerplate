<?php
/**
 * Plugin Name:       Quote
 * Description:       Displays a single quote
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       quote
 *
 * @package           wpboiler-core
 */

function wpboiler_core_quote_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'quote/index.js';
	wp_register_script(
		'wpboiler-core-quote-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-quote-block-editor', 'quote' );

	$editor_css = 'quote/editor.css';
	wp_register_style(
		'wpboiler-core-quote-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	register_block_type(
		'wpboiler-core/quote',
		array(
			'editor_script' 	=> 'wpboiler-core-quote-block-editor',
			'editor_style'  	=> 'wpboiler-core-quote-block-editor',
			'render_callback'	=> 'wpboiler_core_quote_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_quote_block_init' );

function wpboiler_core_quote_render($attr, $content) {

	$html = '';
	$modifiers = array();

	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__none');
	if($margins != 'margins__none' && isset($attr['margindouble'])) {
		$modifiers[] = $attr['margindouble'];
	}

	$quotecontent = (isset($attr['quotecontent']) ? $attr['quotecontent'] : '');
	$quotename = (isset($attr['quotename']) ? $attr['quotename'] : '');

	$html = '<figure class="quote ' . implode(" ", $modifiers) . '">
				<blockquote>
					<p>' . $quotecontent . '</p>
				</blockquote>';

				if($quotename) {
					$html .= '<figcaption>' . $quotename .'</figcaption>';
				}
	$html .= '</figure>';

	return $html;
}
