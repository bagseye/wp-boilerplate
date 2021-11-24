<?php

get_header();

if ( have_posts() ) {
	?>
    <div class="searchresults">
        <h1 class="searchresults__title">
			<?php
			printf(
				/* translators: %s: Search term. */
				esc_html__( 'Results for "%s"', 'wpbpoiler' ),
				'<span class="searchresults__term">' . esc_html( get_search_query() ) . '</span>'
			);
			?>
		</h1>
    </div>

	<div class="searchresults__count">
        <h3>
		<?php
		printf(
			esc_html(
				/* translators: %d: The number of search results. */
				_n(
					'We found %d result for your search.',
					'We found %d results for your search.',
					(int) $wp_query->found_posts,
					'wpboiler'
				)
			),
			(int) $wp_query->found_posts
		);
		?>
        </h3>
	</div>
	<?php
	// Start the Loop.
	while ( have_posts() ) {
		the_post();

		/*
		 * Include the Post-Format-specific template for the content.
		 * If you want to override this in a child theme, then include a file
		 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
		 */
		get_template_part( 'template-parts/content/content-excerpt' );
	} // End the loop.

	// Previous/next page navigation.
	wpboiler_the_posts_navigation();

	// If no content, include the "No posts found" template.
} else {
	get_template_part( 'template-parts/content/content-none' );
}

get_footer();
