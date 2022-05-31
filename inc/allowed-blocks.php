<?php 
/**
 * Allowed blocks
 * 
 * This determines what blocks are allowed in the editor
 * with the aim of reducing the impact of WordPress updates.
 * Only the blocks in the following arrays are allowed in the editor.
 * If adding a cusstom block, it must be added to one of/all arrays (depending on requirements)
 * and the route to it's directory must be included too.
 * 
 * 
*/

function wpboiler_allowed_blocks( $allowed_block_types, $editor_context ) {
    if ( 'post' === $editor_context->post->post_type ) {
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
 
    // return $blocks;
}
 
add_filter( 'allowed_block_types_all', 'wpboiler_allowed_blocks', 10, 2 );



/**
 * Include custom blocks
 * Instead of loading custom blocks as plugins, they are side-loaded into the editor
 * Whenever a new custom block is made, include it's directory here
 * 
 * 
*/
include_once(TEMPLATEPATH . '/gutenberg/flexiblock/flexiblock.php');
include_once(TEMPLATEPATH . '/gutenberg/cta/cta.php');
include_once(TEMPLATEPATH . '/gutenberg/card-group/card-group.php');
include_once(TEMPLATEPATH . '/gutenberg/card-group-item/card-group-item.php');
include_once(TEMPLATEPATH . '/gutenberg/promo-group/promo-group.php');
include_once(TEMPLATEPATH . '/gutenberg/promo-group-item/promo-group-item.php');
include_once(TEMPLATEPATH . '/gutenberg/columns/columns.php');
include_once(TEMPLATEPATH . '/gutenberg/column/column.php');
include_once(TEMPLATEPATH . '/gutenberg/feed/feed.php');
include_once(TEMPLATEPATH . '/gutenberg/feed-item/feed-item.php');
include_once(TEMPLATEPATH . '/gutenberg/panel/panel.php');
include_once(TEMPLATEPATH . '/gutenberg/partners/partners.php');
include_once(TEMPLATEPATH . '/gutenberg/faqs/faqs.php');
include_once(TEMPLATEPATH . '/gutenberg/site-search/site-search.php');
include_once(TEMPLATEPATH . '/gutenberg/card-group-item/card-group-item.php');
include_once(TEMPLATEPATH . '/gutenberg/callout/callout.php');
include_once(TEMPLATEPATH . '/gutenberg/callout-item/callout-item.php');
include_once(TEMPLATEPATH . '/gutenberg/customer-testimonials/customer-testimonials.php');
include_once(TEMPLATEPATH . '/gutenberg/quote/quote.php');
include_once(TEMPLATEPATH . '/gutenberg/banner-image/banner-image.php');
include_once(TEMPLATEPATH . '/gutenberg/separator/separator.php');
include_once(TEMPLATEPATH . '/gutenberg/fixed-spacer/fixed-spacer.php');
include_once(TEMPLATEPATH . '/gutenberg/hero/hero.php');
include_once(TEMPLATEPATH . '/gutenberg/hero-slide/hero-slide.php');
