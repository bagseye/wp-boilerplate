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

if ( ! function_exists( 'wpboiler_the_posts_navigation' ) ) {
	function wpboiler_the_posts_navigation() {
		the_posts_pagination(
			array(
				'before_page_number' => esc_html__( 'Page', 'wpboiler' ) . ' ',
				'mid_size'           => 0,
				'prev_text'          => sprintf(
					'<span class="pagination pagination__prev">%s</span>',
					wp_kses(
						__( 'Newer <span class="pagination pagination__short">posts</span>', 'wpboiler' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					)
				),
				'next_text'          => sprintf(
					'<span class="pagination pagination__next">%s</span>',
					wp_kses(
						__( 'Older <span class="pagination pagination__short">posts</span>', 'wpboiler' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
				),
			)
		);
	}
}
