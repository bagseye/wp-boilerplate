<?php
/**
 * Plugin Name:       Feed
 * Description:       Displays a feed of posts or pages
 * Requires at least: 5.7
 * Requires PHP:      7.3.5
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

	register_block_type(
		'wpboiler-core/feed',
		array(
			'editor_script' 	=> 'wpboiler-core-feed-block-editor',
			'render_callback' 	=> 'wpboiler_core_feed_render',
		)
	);
}
add_action( 'init', 'wpboiler_core_feed_block_init' );

function wpboiler_core_feed_render( $attr, $content ) {

	$html = '';
	$modifiers = array();


	$type = ((isset($attr['posttype']) && $attr['posttype'] === 'category') ? 'category' : 'custom');
	$catID = ((isset($attr['categoryid']) && is_numeric($attr['categoryid'])) ? $attr['categoryid'] : 1);
	$modifiers[] = $margins = (isset($attr['marginselect']) ? $attr['marginselect'] : 'margins__none');

	if($margins != 'margins__none' && isset($attr['doublemargins'])) {
		$modifiers[] = $marginsDouble = $attr['doublemargins'];
	}

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

			$html .= "<section class='feed " . implode(" ", $modifiers) . "'>
					<div class='feed__container'>";

			while($catPosts->have_posts()) {
				$catPosts->the_post();

				$html .= wpboiler_get_blog_post_card(get_the_ID());
			}

			$html .= "</div>
			</section>";
		}

		wp_reset_postdata();
	} else {
		$html = "<section class='feed " . implode(" ", $modifiers) . "'>
					<div class='feed__container'>";

					$html .= $content;
					
			$html .= "</div>
				</section>";
	}



	return $html;
}
