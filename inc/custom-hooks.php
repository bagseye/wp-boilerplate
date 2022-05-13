<?php

function createImage($img_id, $size = 'full') {

    $html = '';

    $mediaid = $img_id;
    $mediaSrc = wp_get_attachment_image_src($mediaid, $size);
    $mediaAlt = get_post_meta($mediaid, '_wp_attachment_img_alt', TRUE);

    $mediaurl = $mediaSrc[0];

    $html = '
    	<picture>
    		' . wp_filter_content_tags('<img class="wp-image-' . $mediaid . '" src="' . $mediaurl . '" alt="' . $mediaAlt . '" />') . '
    	</picture>
    ';


    return $html;
}