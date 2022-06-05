<?php
/**
 * Plugin Name:       Promo Card Group
 * Description:       Displays multiple cards, used for promoting content and directing users. Has two layout styles - stacked and inline
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       promo-group
 *
 * @package           wpboiler-core
 */

function wpboiler_core_promo_group_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'promo-group/index.js';
	wp_register_script(
		'wpboiler-core-promo-group-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-promo-group-block-editor', 'promo-group' );

	register_block_type(
		'wpboiler-core/promo-group',
		array(
			'editor_script' 	=> 'wpboiler-core-promo-group-block-editor',
			'render_callback'	=> 'wpboiler_core_promo_group_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_promo_group_block_init' );

function wpboiler_core_promo_group_render($attr, $content) {

	$html = '';
	$orientation = '';
	$modifier = array();

	$modifier[] = $orientation = (isset($attr['orientation']) ? $attr['orientation'] : 'promogroup__stacked');
	$modifier[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__none');

	if($orientation == 'promogroup__columns') {
		$modifier[] = $columns = (isset($attr['columnselect']) ? 'promogroup__columns--' . $attr['columnselect'] : 'promogroup__columns--2');
	}

	if($margins != 'margins__none' && isset($attr['marginsdouble'])) {
		$modifier[] = $marginsDouble = $attr['marginsdouble'];
	}

	$html = '<section class="promogroup ' . implode(" ", $modifier) . '">
				<div class="promogroup__container">
					<div class="promogroup__container--content">
					' . $content . '
					</div>
				</div>
			</section>';

	return $html;
}