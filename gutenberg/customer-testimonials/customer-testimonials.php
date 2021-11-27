<?php
/**
 * Plugin Name:       Customer Testimonials
 * Description:       Displays customer testimonials in a slideshow
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       customer-testimonials
 *
 * @package           wpboiler-core
 */

function wpboiler_core_customer_testimonials_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'customer-testimonials/index.js';
	wp_register_script(
		'wpboiler-core-customer-testimonials-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-customer-testimonials-block-editor', 'customer-testimonials' );

	$editor_css = 'customer-testimonials/editor.css';
	wp_register_style(
		'wpboiler-core-customer-testimonials-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'customer-testimonials/style.css';
	wp_register_style(
		'wpboiler-core-customer-testimonials-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/customer-testimonials',
		array(
			'editor_script' 	=> 'wpboiler-core-customer-testimonials-block-editor',
			'editor_style'  	=> 'wpboiler-core-customer-testimonials-block-editor',
			'style'         	=> 'wpboiler-core-customer-testimonials-block',
			'render_callback'	=> 'wpboiler_core_customer_testimonials_render'
		)
	);
}
add_action( 'init', 'wpboiler_core_customer_testimonials_block_init' );

function wpboiler_core_customer_testimonials_render( $attr, $content ) {

	$html = '';
	$modifiers = array();

	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : $attr['marginselect']);

	if($margins != 'margins__none' && isset($attr['margindouble'])) {
		$modifiers[] = $attr['margindouble'];
	}

	if(have_rows('customer_testimonial', 'option')) :
		$html = '<section class="testimonials splide ' . implode(" ", $modifiers) . '">
					<div class="testimonials__container splide__track">
						<div class="testimonials__items splide__list">';

						while(have_rows('customer_testimonial', 'option')) : the_row();

						$name = get_sub_field('customer_name', 'option');
						$comment = get_sub_field('customer_comment', 'option');

						$html .= '<figure class="testimonials__item splide__slide">
									<blockquote>
										<p>
										' . $comment . '
										</p>
									</blockquote>
									<figcaption>
										' . $name . '
									</figcaption>
								</figure>';

						endwhile;
						
			 $html .= '</div>
					</div>
		</section>';
	endif;



	return $html;


}
