<?php 
/**
* Allow the following blocks in the editor
*
*/
// add_filter( 'allowed_block_types', 'wpboiler_block_types', 10, 2 );

// function wpboiler_block_types( $allowed_blocks ) {
//     return array(
//         'core/paragraph',
//         'core/heading',
//         'core/buttons',
//         'core/button',
//         'core/separator',
//         'core/list',
//         'core/quote',
//         'core/image',
//         'core/table',
//         'core/block',
//         'core/gallery',
//         'core/spacer',
//         'core/embed',
//         'core-embed/youtube',
//         'core/html',
//         'wpboiler-core/flexiblock',
//         'wpboiler-core/cta',
//     );
// }

include_once(TEMPLATEPATH . '/gutenberg/flexiblock/flexiblock.php');
include_once(TEMPLATEPATH . '/gutenberg/cta/cta.php');