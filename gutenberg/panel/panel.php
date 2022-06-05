<?php
/**
 * Plugin Name:       Panel
 * Description:       Creates a full-width panel
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       panel
 *
 * @package           wpboiler-core
 */

function wpboiler_core_panel_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'panel/index.js';
	wp_register_script(
		'wpboiler-core-panel-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-panel-block-editor', 'panel' );

	register_block_type(
		'wpboiler-core/panel',
		array(
			'editor_script' 	=> 'wpboiler-core-panel-block-editor',
			'render_callback'	=> 'wpboiler_core_panel_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_panel_block_init' );

function wpboiler_core_panel_render($attr, $content) {

	$html = $backgroundcolor = $margins = '';
	$modifiers = array();

	$modifiers[] = $backgroundcolor = (isset($attr['backgroundColor']) ? $attr['backgroundColor'] : '');
	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__none');

	if($margins != 'margins__none' && isset($attr['marginsdouble'])) {
		$modifiers[] = $marginsDouble = $attr['marginsdouble'];
	}

	$html = '<div class="panel ' . implode(" ", $modifiers) . '">
				<div class="panel__container">
					' . $content . '
				</div>
			</div>';

	return $html;
}
