<?php
/**
 * Plugin Name:       Partners
 * Description:       Displays a list of global partner logos
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       partners
 *
 * @package           wpboiler-core
 */

function wpboiler_core_partners_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'partners/index.js';
	wp_register_script(
		'wpboiler-core-partners-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-partners-block-editor', 'partners' );

	$editor_css = 'partners/editor.css';
	wp_register_style(
		'wpboiler-core-partners-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'partners/style.css';
	wp_register_style(
		'wpboiler-core-partners-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/partners',
		array(
			'editor_script' 	=> 'wpboiler-core-partners-block-editor',
			'editor_style'  	=> 'wpboiler-core-partners-block-editor',
			'style'         	=> 'wpboiler-core-partners-block',
			'render_callback'	=> 'wpboiler_core_partners_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_partners_block_init' );

function wpboiler_core_partners_render($attr, $content, $block) {

	$html = '';
	$modifiers = array();

	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__none');

	if($margins != 'margins__none' && isset($attr['margindouble'])) {
		$modifiers[] = $attr['margindouble'];
	}

	if(have_rows('partner_links', 'option')) :
		$html = '<section class="partners ' . implode(" ", $modifiers) . '">
					<div class="partners__container">
						<div class="partners__items">';
		
						while(have_rows('partner_links', 'option')) : the_row();

						$anchorStart = '';
						$anchorEnd = '';

						$title = get_sub_field('partner_name', 'option');
						$image = get_sub_field('partner_image', 'option');
						$link = get_sub_field('partner_link', 'option');

						if(!empty($link)) {
							$anchorStart = '<a href="' . $link . '" target="_blank" >';
							$anchorEnd = '</a>';
						}

						$html .= '<div class="partners__item">' 
									. $anchorStart
									. wp_filter_content_tags('<img class="wp-image-' . $image['ID'] . '"  src="' . $image['sizes']['promo'] . '" alt="' . $image['alt'] . '" />') 
									. $anchorEnd
								. '</div>';

						endwhile;
			$html .= "</div>
					</div>
				</section>";
	endif;

	return $html;
}
