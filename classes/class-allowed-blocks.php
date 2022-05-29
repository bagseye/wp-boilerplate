<?php 

/**
 * Names of custom core blocks
 * These are blocks not part of the basic WP installation
 * 
*/
$all_wpboiler_core_blocks = array(
        'flexiblock',
        'cta',
        'card-group',
        'card-group-item',
        'promo-group',
        'promo-group-item',
        'columns',
        'column',
        'feed',
        'feed-item',
        'panel',
        'partners',
        'faqs',
        'site-search',
        'callout',
        'callout-item',
        'customer-testimonials',
        'quote',
        'banner-image',
        'separator',
        'fixed-spacer',
        'hero',
        'hero-slide'
    );

class IncludeAllowedBlocks {

    public function __construct($custom_blocks_arr) {
        $this->include_allowed_blocks($custom_blocks_arr);
    }

    protected function include_allowed_blocks($blocks_arr) {
        foreach($blocks_arr as $allowed_block) {
            include_once(TEMPLATEPATH . '/gutenberg/' . $allowed_block . '/' . $allowed_block . '.php');
        }
    }
}

$include_allowed_blocks = new IncludeAllowedBlocks($all_wpboiler_core_blocks);


/**
* Allow the following blocks in the editor
*
*/
add_filter( 'allowed_block_types_all', 'wpboiler_block_types', 10, 2 );

function wpboiler_block_types( $allowed_blocks, $editor_context ) {

    // Limit blocks in 'post' post type
    if($editor_context->post->post_type == 'post') {
        // Return an array containing the allowed block types
        // return $selected_wp_core_blocks;
        return array(
            'core/paragraph',
            'core/heading',
            'core/buttons',
            'core/button',
            'core/list',
            'core/image',
            'core/table',
            'core/block',
            'core/gallery',
            'core/spacer',
            'core/embed',
            'core-embed/youtube',
            'core/html',
        );

        // Allow defaults in all other post types
    } else {

        return array(
            'core/paragraph',
            'core/heading',
            'core/buttons',
            'core/button',
            'core/list',
            'core/image',
            'core/table',
            'core/block',
            'core/gallery',
            'core/spacer',
            'core/embed',
            'core-embed/youtube',
            'core/html',
            'wpboiler-core/flexiblock',
            'wpboiler-core/cta',
            'wpboiler-core/card-group',
            'wpboiler-core/card-group-item',
            'wpboiler-core/promo-group',
            'wpboiler-core/promo-group-item',
            'wpboiler-core/columns',
            'wpboiler-core/column',
            'wpboiler-core/feed',
            'wpboiler-core/feed-item',
            'wpboiler-core/panel',
            'wpboiler-core/partners',
            'wpboiler-core/faqs',
            'wpboiler-core/site-search',
            'wpboiler-core/callout',
            'wpboiler-core/callout-item',
            'wpboiler-core/customer-testimonials',
            'wpboiler-core/quote',
            'wpboiler-core/banner-image',
            'wpboiler-core/separator',
            'wpboiler-core/fixed-spacer',
            'wpboiler-core/hero',
            'wpboiler-core/hero-slide',
        );
    }
}