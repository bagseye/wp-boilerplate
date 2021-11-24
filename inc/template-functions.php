<?php 

/**
 * Determines if post thumbnail can be displayed.
 *
 */
function wpboiler_can_show_post_thumbnail() {
	/**
	 * Filters whether post thumbnail can be displayed.
	 *
	 * @param bool $show_post_thumbnail Whether to show post thumbnail.
	 */
	return apply_filters(
		'wpboiler_can_show_post_thumbnail',
		! post_password_required() && ! is_attachment() && has_post_thumbnail()
	);
}