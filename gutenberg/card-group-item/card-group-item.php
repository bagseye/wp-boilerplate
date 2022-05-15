<?php
/**
 * Plugin Name:       Card Group Item
 * Description:       An individual card item, which works as part of the card group block
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       card-group-item
 *
 * @package           wpboiler-core
 */

function wpboiler_core_card_group_item_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'card-group-item/index.js';
	wp_register_script(
		'wpboiler-core-card-group-item-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-card-group-item-block-editor', 'card-group-item' );

	register_block_type(
		'wpboiler-core/card-group-item',
		array(
			'editor_script' 	=> 'wpboiler-core-card-group-item-block-editor',
			'render_callback'	=> 'wpboiler_core_card_group_item_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_card_group_item_block_init' );

function wpboiler_core_card_group_item_render($attr, $content) {

	$html = '';

	$heading = (isset($attr['title']) ? $attr['title'] : '');
	$bodyContent = (isset($attr['content']) ? $attr['content'] : '');

	$html = '<article class="cardgroupitem">';

				if($heading && !empty($heading)) {
					$html .= '<h2 class="cardgroupitem__title">' . $heading . '</h2>';
				}

				if($bodyContent && !empty($bodyContent)) {
					$html .= '<p class="cardgroupitem__content">' . $bodyContent . '</p>';
				}
	
	$html .= '</article>';

	return $html;

}