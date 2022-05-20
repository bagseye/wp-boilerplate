<?php

if ( ! function_exists( 'wpboiler_post_thumbnail' ) ) {

	function wpboiler_post_thumbnail() {
		if ( ! wpboiler_can_show_post_thumbnail() ) {
			return;
		}
		?>

		<?php if ( is_singular() ) : ?>

			<figure class="postthumbnail">
				<?php
				// Lazy-loading attributes should be skipped for thumbnails since they are immediately in the viewport.
				the_post_thumbnail( 'post-thumbnail', array( 'loading' => false ) );
				?>
				<?php if ( wp_get_attachment_caption( get_post_thumbnail_id() ) ) : ?>
					<figcaption><?php echo wp_kses_post( wp_get_attachment_caption( get_post_thumbnail_id() ) ); ?></figcaption>
				<?php endif; ?>
			</figure>

		<?php else : ?>

			<figure class="postthumbnail">
				<a class="postthumbnail__inner" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
					<?php the_post_thumbnail( 'post-thumbnail' ); ?>
				</a>
				<?php if ( wp_get_attachment_caption( get_post_thumbnail_id() ) ) : ?>
					<figcaption><?php echo wp_kses_post( wp_get_attachment_caption( get_post_thumbnail_id() ) ); ?></figcaption>
				<?php endif; ?>
			</figure>

		<?php endif; ?>
		<?php
	}
}

// if ( ! function_exists( 'wpboiler_the_posts_navigation' ) ) {
// 	function wpboiler_the_posts_navigation() {
// 		the_posts_pagination(
// 			array(
// 				'before_page_number' => esc_html__( 'Page', 'wpboiler' ) . ' ',
// 				'mid_size'           => 0,
// 				'prev_text'          => sprintf(
// 					'<span class="pagination pagination__prev">%s</span>',
// 					wp_kses(
// 						__( 'Newer <span class="pagination pagination__short">posts</span>', 'wpboiler' ),
// 						array(
// 							'span' => array(
// 								'class' => array(),
// 							),
// 						)
// 					)
// 				),
// 				'next_text'          => sprintf(
// 					'<span class="pagination pagination__next">%s</span>',
// 					wp_kses(
// 						__( 'Older <span class="pagination pagination__short">posts</span>', 'wpboiler' ),
// 						array(
// 							'span' => array(
// 								'class' => array(),
// 							),
// 						)
// 					),
// 				),
// 			)
// 		);
// 	}
// }



function wpboiler_numeric_posts_nav() {

	if(is_singular()) return;

	global $wp_query;

	// If there is only 1 page, don't execute 
	if($wp_query->max_num_pages <= 1) return;

	$paged = get_query_var( 'paged' ) ? absint(get_query_var('paged')) : 1;

	$max = intval($wp_query->max_num_pages);

	// Add current page to the array
	if($paged >= 1) {
		$links[] = $paged;
	}

	// Add the pages around the current page to the array 
	if($paged >= 3) {
		$links[] = $paged - 1;
		$links[] = $paged - 2;
	}

	if(($paged + 2) <= $max) {
		$links[] = $paged + 2;
		$links[] = $paged + 1;
	}

	echo '<div class="navigation">
			<ul>' . "\n";

	// If previous post link 
	if(get_previous_posts_link()) {
		printf('<li>%s</li>' . "\n", get_previous_posts_link());
	}

	// Link to first page, plus ellipses if necessary 
	if(!in_array(1, $links)) {

		$class = 1 == $paged ? ' class="active"' : '';

		printf('<li %s><a href="%s">%s</a></li>' . "\n", $class, esc_url(get_pagenum_link(1)), '1');

		if(!in_array(2, $links)) {
			echo '<li>...</li>';
		}
	}


	// Links to current page, plus 2 pages in either direction if necessary 
	sort($links);
	foreach((array) $links as $link) {
		$class = $paged == $link ? ' class="active"' : '';
		printf('<li %s><a href="%s">%s</a></li>' . "\n", $class, esc_url(get_pagenum_link($link)), $link);
	}


	// Link to last page, plus ellipses if necessary 
	if(!in_array($max, $links)) {
		if(!in_array($max - 1, $links)) {
			echo '<li>...</li>' . "\n";
		}

		$class = $paged == $max ? ' class="active"' : '';
		printf('<li %s><a href="%s">%s</a></li>' . "\n", $class, esc_url(get_pagenum_link( $max )), $max);
	}

	// Next post link 
	if(get_next_posts_link()) {
		printf('<li>%s</li>' . "\n", get_next_posts_link());
	}

	echo '</ul></div>' . "\n";


}
