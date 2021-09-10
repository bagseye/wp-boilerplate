<?php
/**
 * Plugin Name:       Flexiblock
 * Description:       Allows for flexible layouts that can be used to display images and text.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       flexiblock
 *
 * @package           wpboiler-core
 */

function wpboiler_core_flexiblock_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'flexiblock/index.js';
	wp_register_script(
		'wpboiler-core-flexiblock-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-flexiblock-block-editor', 'flexiblock' );

	$editor_css = 'flexiblock/editor.css';
	wp_register_style(
		'wpboiler-core-flexiblock-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'flexiblock/style.css';
	wp_register_style(
		'wpboiler-core-flexiblock-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/flexiblock',
		array(
			'editor_script' 	=> 'wpboiler-core-flexiblock-block-editor',
			'editor_style'  	=> 'wpboiler-core-flexiblock-block-editor',
			'style'         	=> 'wpboiler-core-flexiblock-block',
		)
	);
}
add_action( 'init', 'wpboiler_core_flexiblock_block_init' );

add_filter( 'the_content', function($content){
	if(preg_match_all('#FlexiBlockImg(\d+)#', $content, $imgs)){
		foreach($imgs[1] as $imgId){
			$image = wp_get_attachment_image_src($imgId, 'large');
			if($image){
				$image = '<picture>'
							. wp_filter_content_tags( '<img class="wp-image-' . $imgId . '" src="'. $image[0] .'" alt="" />') . '
						</picture>';
				$content = str_ireplace("FlexiBlockImg" . $imgId, $image, $content);
			}
		}
	}
	return $content;
});
