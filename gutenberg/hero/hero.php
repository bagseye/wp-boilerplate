<?php
/**
 * Plugin Name:       Hero
 * Description:       Displays a hero for displaying standout content
 * Requires at least: 5.8
 * Requires PHP:      7.4.1
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hero
 *
 * @package           wpboiler-core
 */

function wpboiler_core_hero_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'hero/index.js';
	wp_register_script(
		'wpboiler-core-hero-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-hero-block-editor', 'hero' );

	register_block_type(
		'wpboiler-core/hero',
		array(
			'editor_script' 	=> 'wpboiler-core-hero-block-editor',
			'render_callback'	=> 'wpboiler_core_hero_render'

		)
	);
}
add_action( 'init', 'wpboiler_core_hero_block_init' );

function wpboiler_core_hero_render($attr, $content, $block) {

	$html = null;
	$modifiers = array();
	$modifiers[] = (isset($attr['marginselect']) ? esc_attr($attr['marginselect']) : 'margins__none');
	$modifiers[] = (isset($attr['marginsdouble']) ? esc_attr($attr['marginsdouble']) : '');

	$html = '<section class="hero js-carousel ' . join(' ', $modifiers) . '">
						<div class="hero__list js-carousel__items">
							' . $content . '
						</div>
				</section>';

	// If its just a single slide, remove all splide functionality
	if(count($block->parsed_block['innerBlocks']) < 2) {
		$html = str_replace(['js-carousel', 'js-carousel__items'], '', $html);
	}

	return $html;
}