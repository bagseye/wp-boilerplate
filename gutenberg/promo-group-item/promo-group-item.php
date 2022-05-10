<?php
/**
 * Plugin Name:       Promo Group Item
 * Description:       A single promo group card. This is only available within a promo group block
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       promo-group-item
 *
 * @package           wpboiler-core
 */

function wpboiler_core_promo_group_item_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'promo-group-item/index.js';
	wp_register_script(
		'wpboiler-core-promo-group-item-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-promo-group-item-block-editor', 'promo-group-item' );

	register_block_type(
		'wpboiler-core/promo-group-item',
		array(
			'editor_script' 	=> 'wpboiler-core-promo-group-item-block-editor',
			'render_callback'	=> 'wpboiler_core_promo_group_item_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_promo_group_item_block_init' );

function wpboiler_core_promo_group_item_render($attr, $content) {

	$html = '';
	$mediaid = '';
	$mediaurl = '';
	$mediaSrc = '';
	$mediaAlt = '';
	$pictureMarkup = '';

	$heading = (isset($attr['title']) ? $attr['title'] : '');
	$bodyContent = (isset($attr['content']) ? $attr['content'] : '');

	if(isset($attr['mediaid'])) {
		$mediaid = $attr['mediaid'];
		$mediaSrc = wp_get_attachment_image_src($mediaid, 'promo');
		$mediaAlt = get_post_meta($mediaid, '_wp_attachment_img_alt', TRUE);

		$mediaurl = $mediaSrc[0];

		$pictureMarkup = '
			<picture>
				' . wp_filter_content_tags('<img class="promogroupitem__media--img wp-image-' . $mediaid . '" src="' . $mediaurl . '" alt="' . $mediaAlt . '" />') . '
			</picture>
		';
	}

	$html = '<article class="promogroupitem">
				<div class="promogroupitem__container">
					<div class="promogroupitem__media">
						' . $pictureMarkup . '
					</div>
					<div class="promogroupitem__text">';
						if($heading) {
							$html .= '<h2 class="promogroupitem__title">' . $heading . '</h2>';
						}

						if($bodyContent) {
							$html .= '<p class="promogroupitem__content">' . $bodyContent . '</p>';
						}	
		$html .= '</div>
				</div>
			</article>';

	return $html;
}