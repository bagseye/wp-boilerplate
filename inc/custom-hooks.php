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



/**
 * 
 * Returns the HTML for a blog card
 * 
 * @param int $postID WP Post ID
 * @return string $cardHtml
 * 
 */
function wpboiler_get_blog_post_card($postID) {

    $html = '';

    if(!is_numeric($postID)) return '';

    $title = get_the_title($postID);
    $link = get_the_permalink($postID);
    $date = get_the_date('d F Y', $postID);
    $excerpt = get_the_excerpt($postID);
    $author_name = get_the_author_meta('display_name');
    $image = '';

    if(get_post_thumbnail_id( $postID )) {

        $image = wp_get_attachment_image_src( get_post_thumbnail_id( $postID ), 'post-item' );

        if(is_array( $image )) {

            $alt = '';
            $alt = get_post_meta( get_post_thumbnail_id( $postID ), '_wp_attachment_image_alt', TRUE );

            $image = wp_filter_content_tags( '<img class="wp-image-' . get_post_thumbnail_id( $postID ) . '" src="' . $image[0] . '" alt="' . $alt .'" />' );
        }
    }

    $cardCategoryName = '';

    if( empty( $cardCategoryName ) ) {

        $cats = get_the_category($postID);

        if( $cats && count( $cats ) > 0 ) {
            $cat = $cats[0];
            $cardCategoryName = $cat->name;
        }
    }

    $html = "<a href='{$link}' class='news__item'>
                <div class='news__item--media'>
                    <picture>
                        {$image}
                    </picture>
                </div>
                <div class='news__item--content'>
                 <div class='news__item--author'></div>
                    <h3>{$title}</h3>
                    <p>{$date}</p>
                    <p>{$excerpt}</p>
                    <p>{$author_name}</p>
                    <p>{$cardCategoryName}</p>
                    <span class='btn'>Read on</span>
                </div>
            </a>";

    return $html;
}