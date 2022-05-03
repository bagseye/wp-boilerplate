<?php 
/**
* Allow the following blocks in the editor
*
*/
add_filter( 'allowed_block_types', 'wpboiler_block_types', 10, 2 );

function wpboiler_block_types( $allowed_blocks ) {
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
include_once(TEMPLATEPATH . '/gutenberg/callout/callout.php');
include_once(TEMPLATEPATH . '/gutenberg/callout-item/callout-item.php');
include_once(TEMPLATEPATH . '/gutenberg/customer-testimonials/customer-testimonials.php');
include_once(TEMPLATEPATH . '/gutenberg/quote/quote.php');
include_once(TEMPLATEPATH . '/gutenberg/banner-image/banner-image.php');
include_once(TEMPLATEPATH . '/gutenberg/separator/separator.php');
include_once(TEMPLATEPATH . '/gutenberg/fixed-spacer/fixed-spacer.php');
include_once(TEMPLATEPATH . '/gutenberg/hero/hero.php');
include_once(TEMPLATEPATH . '/gutenberg/hero-slide/hero-slide.php');