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
        'core/separator',
        'core/list',
        'core/quote',
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