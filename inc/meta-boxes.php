<?php 

// META BOXES 
add_action( 'add_meta_boxes', 'service_price_box' );
function service_price_box() {
    add_meta_box( 
        'service_price_box',
        __( 'Service Price', 'boilerplate' ),
        'service_price_box_content',
        'boilerplate_service',
        'side',
        'high'
    );
}

function service_price_box_content( $post ) {
    wp_nonce_field( plugin_basename( __FILE__ ), 'service_price_box_content_nonce' );
    echo '<label for="service_price"></label>';
    echo '<input type="text" id="service_price" name="service_price" placeholder="Enter a price" />';
}

add_action( 'save_post', 'service_price_box_save' );

function service_price_box_save( $post_id ) {

    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) 
    return;

    if ( !wp_verify_nonce( $_POST['service_price_box_content_nonce'], plugin_basename( __FILE__ ) ) )
    return;

    if ( 'page' == $_POST['post_type'] ) {
        if ( !current_user_can( 'edit_page', $post_id ) )
        return;
    } else {
        if ( !current_user_can( 'edit_post', $post_id ) )
        return;
    }
    $service_price = $_POST['service_price'];

    update_post_meta( $post_id, 'service_price', $service_price );
}