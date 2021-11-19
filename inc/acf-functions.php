<?php

add_action('acf/init', 'wpboiler_acf_op_init');

function wpboiler_acf_op_init() {

    // Check the function exists 
    if( function_exists('acf_add_options_page') ) {

        // Register options page 
        $options_page = acf_add_options_page(array(
            'page_title'    => __('Partner Images'),
            'menu_title'    => __('Partners'),
            'menu_slug'     => 'partner-images',
            'capability'    => 'edit_posts',
            'redirect'      => false,
            'update_button' => __('Update Partner'),
            'icon_url'      => 'rest-api',
        ));
    }
}