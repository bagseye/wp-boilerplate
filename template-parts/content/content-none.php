<section>
	<header>
		<?php if ( is_search() ) : ?>

			<h1>
				<?php
				printf(
					/* translators: %s: Search term. */
					esc_html__( 'Results for "%s"', 'wpboiler' ),
					'<span>' . esc_html( get_search_query() ) . '</span>'
				);
				?>
			</h1>

		<?php else : ?>

			<h1><?php esc_html_e( 'Nothing here', 'wpboiler' ); ?></h1>

		<?php endif; ?>
	</header>

	<div>
		<?php if ( is_search() ) : ?>

			<p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'wpboiler' ); ?></p>
			<?php get_search_form(); ?>

		<?php else : ?>

			<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'wpboiler' ); ?></p>
			<?php get_search_form(); ?>

		<?php endif; ?>
	</div>
</section>
