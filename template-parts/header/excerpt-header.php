<?php

// Don't show the title if the post-format is `aside` or `status`.
$post_format = get_post_format();
if ( 'aside' === $post_format || 'status' === $post_format ) {
	return;
}
?>

<header class="entry-header">
	<?php
	the_title( sprintf( '<h3><a href="%s">', esc_url( get_permalink() ) ), '</a></h3>' );
	wpboiler_post_thumbnail();
	?>
</header>
