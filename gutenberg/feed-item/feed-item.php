<?php
/**
 * Plugin Name:       Feed Item
 * Description:       An individual feed item
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
 * Version:           1.0.0
 * Author:            Morgan Baker
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       feed-item
 *
 * @package           wpboiler-core
 */


function wpboiler_core_feed_item_block_init() {
	$dir = get_template_directory() . '/gutenberg';

	$index_js = 'feed-item/index.js';
	wp_register_script(
		'wpboiler-core-feed-item-block-editor',
		get_template_directory_uri() . "/gutenberg/$index_js",
		array(
			'wp-block-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_set_script_translations( 'wpboiler-core-feed-item-block-editor', 'feed-item' );

	$postList = array();

	$posts = new WP_Query(array(
		'post_type' => array('post'),
		'posts_per_page' => -1,
		'orderby' => 'menu_order',
		'order' => 'ASC'
	));

	if($posts->have_posts()) {
		while($posts->have_posts()) {

			$posts->the_post();

			$postList[] = array(
				'ID' => get_the_ID(),
				'Title' => esc_html(get_the_title()),
				'Slug' => str_replace(get_bloginfo( 'wpurl' ), '', get_the_permalink())
			);
		}
	}

	wp_reset_postdata();
	wp_localize_script( 'wpboiler-core-feed-item-block-editor', 'wpboilerPosts', $postList );

	register_block_type(
		'wpboiler-core/feed-item',
		array(
			'editor_script' => 'wpboiler-core-feed-item-block-editor',
			'render_callback' => 'wpboiler_core_feed_item_render',
		)
	);
}
add_action( 'init', 'wpboiler_core_feed_item_block_init' );

function wpboiler_core_feed_item_render( $attr, $content ) {

	// DONT RENDER ON ADMIN
	if( strpos( $_SERVER["REQUEST_URI"], "wp-admin" ) ) {
		return '';
	}

	$postID = ((isset($attr[ 'postID' ]) && is_numeric($attr[ 'postID' ])) ? intval($attr[ 'postID' ]) : null );

	return wpboiler_get_blog_post_card( $postID ); 
}
