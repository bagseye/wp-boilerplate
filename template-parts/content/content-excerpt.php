<article id="post-<?php the_ID(); ?>" <?php post_class('postcard'); ?>>
	<?php 
	$featureImageID = get_post_thumbnail_id(the_ID()); 
	$featureImageURL = get_the_post_thumbnail_url(the_ID());
	$featureImageALT = get_post_meta($featureImageID, '_wp_attachment_image_alt', true);
	$imgMarkup = '';

	if($featureImageID) {
		$imgMarkup = sprintf('<img class="wp-image-%s" src="%s" alt="%s" />', $featureImageID, $featureImageURL, $featureImageALT);
	} else {
		$imgMarkup = '<img loading="lazy" src="' . get_bloginfo('template_directory') . '/images/placeholders/placeholder-postcard.webp" />';
	}
	$titleMarkup = sprintf( '<h3 class="postcard__title"><a href="%s">', esc_url( get_permalink() ) );
	
	?>
	<div class="postcard__container">
		<div class="postcard__media">
			<picture>
				<?php echo wp_filter_content_tags($imgMarkup); ?>
			</picture>
		</div>
		<div class="postcard__content">
			<?php the_title( $titleMarkup, '</a></h3>'); ?>
			<?php the_date('d F Y') ?>
			<?php the_excerpt(); ?>
		</div>
	</div>
</article>
