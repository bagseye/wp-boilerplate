<?php 


// function boilerplate_taxonomies_service() {
//     $labels = array(
//         'name' => __('Service Categories', 'taxonomy general name'),
//         'singular_name' => __('Service Category', 'taxonomy singular name'),
//         'search_items' => __('Search Services'),
//         'all_items' => __('Search Service Categories'),
//         'parent_item' => __('Parent Service Category'),
//         'parent_item_colon' => __('Parent Service Category:'),
//         'edit_item'         => __( 'Edit Service Category' ), 
//         'update_item'       => __( 'Update Service Category' ),
//         'add_new_item'      => __( 'Add New Service Category' ),
//         'new_item_name'     => __( 'New Service Category' ),
//         'menu_name'         => __( 'Service Categories' ),
//     );
    
//     $args = array(
//         'labels' => $labels,
//         'hierarchical' => true,
//         'show_ui' => true, 
//         'show_admin_column' => true,
//         'query_var' => true,
//     );
    
//     register_taxonomy( 'boilerplate_service_category', 'boilerplate_service', $args );
// }

// add_action( 'init', 'boilerplate_taxonomies_service', 0 );