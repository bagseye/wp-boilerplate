<?php
/**
 * Plugin Name:       Hero Slide
 * Description:       An individual slide for a hero block
 * Requires at least: 5.8
 * Requires PHP:      7.4.1
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hero-slide
 *
 * @package           wpboiler-core
 */

function wpboiler_core_hero_slide_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'hero-slide/index.js';
	wp_register_script(
		'wpboiler-core-hero-slide-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-hero-slide-block-editor', 'hero-slide' );

	register_block_type(
		'wpboiler-core/hero-slide',
		array(
			'editor_script' 	=> 'wpboiler-core-hero-slide-block-editor',
			'render_callback'	=> 'wpboiler_core_hero_slide_render'

		)
	);
}
add_action( 'init', 'wpboiler_core_hero_slide_block_init' );

function wpboiler_core_hero_slide_render($attr, $content) {

	$html = $pre_title_markup = $title_markup = $introduction_markup = $image_markup = null;

	$pre_title = (isset($attr['pretitle']) ? $attr['pretitle'] : null);
	$title = (isset($attr['title']) ? $attr['title'] : null);
	$introduction = (isset($attr['introduction']) ? $attr['introduction'] : null);
	$media_id = (isset($attr['mediaid']) ? $attr['mediaid'] : null);

	if($pre_title && !empty($pre_title)) {
		$pre_title_markup = "<h3 class='hero__title--pre'>{$pre_title}</h3>";
	}

	if($title && !empty($title)) {
		$title_markup = "<h2 class='hero__title'>{$title}</h2>";
	}

	if($introduction && !empty($introduction)) {
		$introduction_markup = "<h2 class='hero__introduction'>{$introduction}</h2>";
	}

	if($media_id && is_numeric($media_id)) {
		$media_src = wp_get_attachment_image_src($media_id, 'cta');
		$media_alt = get_post_meta($media_id, '_wp_attachment_img_alt', TRUE);

		$image_markup = '
			<div class="hero__slide--media">
				<picture>
					' . wp_filter_content_tags('<img class="wp-image-' . $media_id . '" src="' . $media_src[0] . '" alt="' . $media_alt . '" />') . '
				</picture>
			</div>
		';
	}

	$html = "<div class='hero__slide splide__slide'>
				<div class='hero__container--content'>
					<div class='hero__slide--content'>
						{$pre_title_markup}
						{$title_markup}
						{$introduction_markup}
						{$content}
					</div>
					{$image_markup}
				</div>
			</div>";

	return $html;
}
