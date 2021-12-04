<?php

add_action('acf/init', 'wpboiler_acf_op_init');

function wpboiler_acf_op_init() {

    // Check the function exists 
    if( function_exists('acf_add_options_page') ) {

        // Register options page 
        $alert_options_page = acf_add_options_page(array(
            'page_title'    => __('Alert Message Settings'),
            'menu_title'    => __('Alert Message'),
            'menu_slug'     => 'alert-message-settings',
            'capability'    => 'edit_posts',
            'redirect'      => false,
            'update_button' => __('Update Alert Message'),
            'icon_url'      => 'dashicons-info',
        ));

        $hero_options_page = acf_add_options_page(array(
            'page_title'    => __('Homepage Hero Settings'),
            'menu_title'    => __('Hero'),
            'menu_slug'     => 'homepage-hero-settings',
            'capability'    => 'edit_posts',
            'redirect'      => false,
            'update_button' => __('Update Hero'),
            'icon_url'      => 'dashicons-shield-alt',
        ));

        $partners_options_page = acf_add_options_page(array(
            'page_title'    => __('Partner Images'),
            'menu_title'    => __('Partners'),
            'menu_slug'     => 'partner-images',
            'capability'    => 'edit_posts',
            'redirect'      => false,
            'update_button' => __('Update Partner'),
            'icon_url'      => 'dashicons-rest-api',
        ));

        $faqs_options_page = acf_add_options_page(array(
            'page_title'    => __('Frequently Asked Questions'),
            'menu_title'    => __('FAQs'),
            'menu_slug'     => 'frequently-asked-questions',
            'capability'    => 'edit_posts',
            'redirect'      => false,
            'update_button' => __('Update FAQs'),
            'icon_url'      => 'dashicons-format-status',
        ));

        $testimonials_options_page = acf_add_options_page(array(
            'page_title'    => __('Customer Testimonials'),
            'menu_title'    => __('Testimonials'),
            'menu_slug'     => 'customer-testimonials',
            'capability'    => 'edit_posts',
            'redirect'      => false,
            'update_button' => __('Update Testimonials'),
            'icon_url'      => 'dashicons-heart',
        ));

        $socials_options_page = acf_add_options_page(array(
            'page_title'    => __('Social Media Settings'),
            'menu_title'    => __('Social Links'),
            'menu_slug'     => 'social-media-settings',
            'capability'    => 'edit_posts',
            'redirect'      => false,
            'update_button' => __('Update Social Links'),
            'icon_url'      => 'dashicons-groups',
        ));

        $contact_options_page = acf_add_options_page(array(
            'page_title'    => __('Contact Methods'),
            'menu_title'    => __('Contacts'),
            'menu_slug'     => 'contact-methods-settings',
            'capability'    => 'edit_posts',
            'redirect'      => false,
            'update_button' => __('Update Contact Methods'),
            'icon_url'      => 'dashicons-phone',
        ));


    }
}