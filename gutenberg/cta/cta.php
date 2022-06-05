<?php
/**
 * Plugin Name:       Call to Action
 * Description:       Displays text and media to guide users to other areas of the site and grab their attention
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cta
 *
 * @package           wpboiler-core
 */


function wpboiler_core_cta_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'cta/index.js';
	wp_register_script(
		'wpboiler-core-cta-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-cta-block-editor', 'cta' );

	register_block_type(
		'wpboiler-core/cta',
		array(
			'editor_script' 	=> 'wpboiler-core-cta-block-editor',
			'render_callback' 	=> 'wpboiler_core_cta_render',
		)
	);
}
add_action( 'init', 'wpboiler_core_cta_block_init' );

function wpboiler_core_cta_render( $attr, $content ) {

	$html = $mediaid = $mediaurl = $mediaSrc = $mediaAlt = $pictureMarkup = '';
	$classes = array();

	$category = (isset($attr['category']) ? $attr['category'] : '');
	$heading = (isset($attr['heading']) ? $attr['heading'] : '');
	$subheading = (isset($attr['subheading']) ? $attr['subheading'] : '');

	$classes[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__none');
	$classes[] = $margins = (isset($attr['orientationselect']) ? $attr['orientationselect'] : 'cta__text--left');

	if($margins != 'margins__none' && isset($attr['margindouble'])) {
		$classes[] = $marginDouble = $attr['margindouble'];
	}

	if(isset($attr['mediaid'])) {
		$pictureMarkup = createImage($attr['mediaid'], 'cta');
	}

	$html = '<section class="cta container__full ' . implode( " ", $classes ) . '">
				<div class="cta__container">
					<div class="cta__column">';

					if($category && !empty($category)) {
						$html .= '<h5 class="cta__heading cta__heading--category">' . $category . '</h5>';
					}

					if($heading && !empty($heading)) {
						$html .= '<h2 class="cta__heading cta__heading--main">' . $heading . '</h2>';
					}

					if($subheading && !empty($subheading)) {
						$html .= '<h4 class="cta__heading cta__heading--sub">' . $subheading . '</h4>';
					}

					$html .= $content;
					
		$html .= '</div>
					
				</div>
				<div class="cta__container--media">
					' . $pictureMarkup . '
				</div>
			</section>';

	return $html;

}
