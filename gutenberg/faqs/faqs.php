<?php
/**
 * Plugin Name:       FAQs
 * Description:       Displays an FAQ block
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       faqs
 *
 * @package           wpboiler-core
 */

function wpboiler_core_faqs_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'faqs/index.js';
	wp_register_script(
		'wpboiler-core-faqs-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-faqs-block-editor', 'faqs' );

	$editor_css = 'faqs/editor.css';
	wp_register_style(
		'wpboiler-core-faqs-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'faqs/style.css';
	wp_register_style(
		'wpboiler-core-faqs-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/faqs',
		array(
			'editor_script' 	=> 'wpboiler-core-faqs-block-editor',
			'editor_style'  	=> 'wpboiler-core-faqs-block-editor',
			'style'         	=> 'wpboiler-core-faqs-block',
			'render_callback'	=> 'wpboiler_core_faqs_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_faqs_block_init' );

function wpboiler_core_faqs_render($attr,$content) {
	$html = '';
	$modifiers = array();

	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__none');

	if($margins != 'margins__none' && isset($attr['margindouble'])) {
		$modifiers[] = $marginDouble = $attr['margindouble'];
	}

	if(have_rows('faqs_item', 'option')) :

		$html = '<div class="faq ' . implode(" ", $modifiers) . '">
					<div class="faq__container">
						<div class="faq__items">';
							while(have_rows('faqs_item', 'option')) : the_row();

								$question = get_sub_field('faq_question', 'option');
								$answer = get_sub_field('faq_answer', 'option');

						$html .= '<div class="faq__item">
									<button class="faq__question" type="button">' . $question . '</button>
									<div class="faq__answer">
										' . $answer . '
									</div>
								</div>';
							
							endwhile;
			$html .= '</div>
					</div>
				</div>';

	endif;

	return $html;
}
