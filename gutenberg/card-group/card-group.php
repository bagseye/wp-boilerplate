<?php
/**
 * Plugin Name:       Card Group
 * Description:       Displays a group of cards. Useful for displaying snippets of information
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       card-group
 *
 * @package           wpboiler-core
 */

function wpboiler_core_card_group_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'card-group/index.js';
	wp_register_script(
		'wpboiler-core-card-group-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-card-group-block-editor', 'card-group' );

	register_block_type(
		'wpboiler-core/card-group',
		array(
			'editor_script' 	=> 'wpboiler-core-card-group-block-editor',
			'render_callback' 	=> 'wpboiler_core_card_group_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_card_group_block_init' );

function wpboiler_core_card_group_render( $attr, $content ) {

	$html = $pictureMarkup = $mediaid = $mediaurl = $mediaSrc = $mediaAlt = '';
	$modifiers = array();

	$pretitle = (isset($attr['pretitle']) ? $attr['pretitle'] : '');
	$title = (isset($attr['title']) ? $attr['title'] : '');
	$introduction = (isset($attr['introduction']) ? $attr['introduction'] : '');

	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__none');

	if($margins != 'margins__none' && isset($attr['marginsdouble'])) {
		$modifiers[] = $marginsDouble = $attr['marginsdouble'];
	}

	if(isset($attr['mediaid'])) {
		$pictureMarkup = createImage($attr['mediaid']);
	}

	$html = '<section class="cardgroup container__full ' . implode(" ", $modifiers) . '">
				<div class="cardgroup__container">
					<div class="cardgroup__container--title">';

						if($pretitle && !empty($pretitle)) {
							$html .= '<h3 class="cardgroup__heading cardgroup__heading--pre">' . $pretitle . '</h3>';
						}

						if($title && !empty($title)) {
							$html .= '<h2 class="cardgroup__heading cardgroup__heading--title">' . $title . '</h2>';
						}

						if($introduction && !empty($introduction)) {
							$html .= '<p class="cardgroup__introduction">' . $introduction . '</p>';
						}
					
			$html .= '</div>
					<div class="cardgroup__container--content">
					
					' . $content . '

					</div>
				
				</div>
				<div class="cardgroup__container--media">
					' . $pictureMarkup . '	
				</div>
			</section>';

	return $html;


}