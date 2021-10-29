<?php
/**
 * Plugin Name:       Feed
 * Description:       Displays a feed of posts or pages
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       feed
 *
 * @package           wpboiler-core
 */


function wpboiler_core_feed_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'feed/index.js';
	wp_register_script(
		'wpboiler-core-feed-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-feed-block-editor', 'feed' );

	$catList = array(
		array(
			'ID' => -1,
			'Name' => 'All Categories'
		)
	);

	$cats = get_terms('category', array(
		'hide_empty' => true,
	));

	if($cats && count($cats) > 0) {
		foreach($cats as $cat) {
			$catList[] = array(
				'ID' => $cat->term_id,
				'Name' => $cat->name,
			);
		}
	}

	wp_reset_postdata();
	wp_localize_script( 'wpboiler-core-feed-block-editor', 'wpboilerFeedCategories', $catList );

	$editor_css = 'feed/editor.css';
	wp_register_style(
		'wpboiler-core-feed-block-editor',
		get_template_directory_uri() . "/gutenberg/$editor_css",
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'feed/style.css';
	wp_register_style(
		'wpboiler-core-feed-block',
		get_template_directory_uri() . "/gutenberg/$style_css",
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'wpboiler-core/feed',
		array(
			'editor_script' 	=> 'wpboiler-core-feed-block-editor',
			'editor_style'  	=> 'wpboiler-core-feed-block-editor',
			'style'         	=> 'wpboiler-core-feed-block',
			'render_callback' 	=> 'wpboiler_core_feed_render',
		)
	);
}
add_action( 'init', 'wpboiler_core_feed_block_init' );

function wpboiler_core_feed_render( $attr, $content ) {

	$html = '';


	$type = ((isset($attr['postType']) && $attr['postType'] === 'category') ? 'category' : 'custom');
	$catID = ((isset($attr['categoryID']) && is_numeric($attr['categoryID'])) ? $attr['categoryID'] : 1);

	// If set to category overwrite set blog posts with specific cat 
	if($type == 'category') {

		$postItem = '';

		$catPosts = new WP_Query(array(
			'post_type' => array( 'post' ),
			'post_status' => 'publish',
			'orderby' => 'date',
			'order' => 'DESC',
			'cat' => $catID
		));

		if($catPosts->have_posts()) {
			while($catPosts->have_posts()) {
				$catPosts->the_post();
				$postItem .= wpboiler_get_blog_post_card(get_the_ID());
			}
		}

		wp_reset_postdata();
	}

	$html = "<section class='feed'>
				<div class='feed__container'>";

				$html .= $content;
				
		$html .= "</div>
			</section>";

	return $html;
}
