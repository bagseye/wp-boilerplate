<?php




class boilerplate_service_pt {

    function __construct() {
        add_action('init', array($this, 'boilerplate_custom_post_service'));
        add_action('init', array($this, 'boilerplate_taxonomies_service'));
    }

    function boilerplate_custom_post_service() {

        $labels = array(
            'name' => __('Services', 'post type general name'),
            'singular_name' => __('Service', 'post type singular name'),
            'add_new' => __('Add New'),
            'add_new_item' => __('Add New Service'),
            'edit_item' => __('Edit Service'),
            'new_item' => __('New Service'),
            'all_items' => __('All Services'),
            'view_items' => __('View Service'),
            'search_items' => __('Search Services'),
            'not_found' => __('No services found'),
            'not_found_in_trash' => __('No services found in the trash'),
            'parent_item_colon' => 'Parent Services',
            'menu_name' => 'Services',
        );
        $args = array(
            'labels' => $labels,
            'public' => true,
            'exclude_from_search' => false,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_nav_menus' => true,
            'show_in_menu' => true,
            'show_in_admin_bar' => true,
            'description' => 'Holds services and service specific data',
            'menu_position' => 5,
            'menu_icon' => 'dashicons-products',
            'hierarchical' => false, 
            'supports' => array('title', 'editor', 'thumbnail'),
            'has_archive' => true,
            'rewrite' => 'service',
            'query_var' => true,
            // 'taxonomies' => array('category'),
            'show_in_rest' => true
        );

        register_post_type('service', $args);
    }


    function boilerplate_taxonomies_service() {
        $labels = array(
            'name' => __('Service Categories', 'taxonomy general name'),
            'singular_name' => __('Service Category', 'taxonomy singular name'),
            'search_items' => __('Search Services'),
            'all_items' => __('Search Service Categories'),
            'parent_item' => __('Parent Service Category'),
            'parent_item_colon' => __('Parent Service Category:'),
            'edit_item'         => __( 'Edit Service Category' ), 
            'update_item'       => __( 'Update Service Category' ),
            'add_new_item'      => __( 'Add New Service Category' ),
            'new_item_name'     => __( 'New Service Category' ),
            'menu_name'         => __( 'Service Categories' ),
        );
        
        $args = array(
            'labels' => $labels,
            'hierarchical' => true,
            'show_ui' => true, 
            'show_admin_column' => true,
            'query_var' => true,
        );
        
        register_taxonomy( 'boilerplate_service_category', 'boilerplate_service', $args );
    }

}

new boilerplate_service_pt();

// add_action('init', 'boilerplate_custom_post_service');


// function boilerplate_updated_service_messages( $messages ) {

//     global $post, $post_ID;

//     $messages['boilerplate_service'] = array(
//         0 => '’', 
//         1 => sprintf( __('Service updated. <a href="%s">View service</a>'), esc_url( get_permalink($post_ID) ) ),
//         2 => __('Custom field updated.'),
//         3 => __('Custom field deleted.'),
//         4 => __('Service updated.'),
//         5 => isset($_GET['revision']) ? sprintf( __('Service restored to revision from %s'), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
//         6 => sprintf( __('Service published. <a href="%s">View service</a>'), esc_url( get_permalink($post_ID) ) ),
//         7 => __('Service saved.'),
//         8 => sprintf( __('Service submitted. <a target="_blank" href="%s">Preview service</a>'), esc_url( add_query_arg( 'preview', 'true', get_permalink($post_ID) ) ) ),
//         9 => sprintf( __('Service scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview service</a>'), date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
//         10 => sprintf( __('Service draft updated. <a target="_blank" href="%s">Preview service</a>'), esc_url( add_query_arg( 'preview', 'true', get_permalink($post_ID) ) ) ),
//     );

//     return $messages;

// }

// add_filter( 'post_updated_messages', 'boilerplate_updated_service_messages' );


