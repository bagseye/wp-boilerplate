<?php 

// SERVICE PRICE START
// META BOXES 
// add_action( 'add_meta_boxes', 'service_price_box' );
// function service_price_box() {
//     add_meta_box( 
//         'service_price_box',
//         __( 'Service Price', 'boilerplate' ),
//         'service_price_box_content',
//         'service',
//         'side',
//         'high'
//     );
// }

// function service_price_box_content( $post ) {
//     wp_nonce_field( plugin_basename( __FILE__ ), 'service_price_box_content_nonce' );
//     echo '<label for="service_price"></label>';
//     echo '<input type="text" id="service_price" name="service_price" placeholder="Enter a price" />';
// }

// add_action( 'save_post', 'service_price_box_save' );

// function service_price_box_save( $post_id ) {

//     if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) 
//     return;

//     if ( !wp_verify_nonce( $_POST['service_price_box_content_nonce'], plugin_basename( __FILE__ ) ) )
//     return;

//     if ( 'page' == $_POST['post_type'] ) {
//         if ( !current_user_can( 'edit_page', $post_id ) )
//         return;
//     } else {
//         if ( !current_user_can( 'edit_post', $post_id ) )
//         return;
//     }
//     $service_price = $_POST['service_price'];

//     update_post_meta( $post_id, 'service_price', $service_price );
// }
//SERVICE PRICE END



/**
 * SERVICE PRICE
 * 
 * 
*/
add_action( 'add_meta_boxes', 'service_price_box' );
function service_price_box() {
    add_meta_box(
        'service_price_box',
        __( 'Service Price', 'boilerplate' ),
        'service_price_box_content',
        'service',
        'side',
        'high'
    );
}

function service_price_box_content( $post ) {
    wp_nonce_field( plugin_basename( __FILE__ ), 'service_price_box_content_nonce' );
    $value = get_post_meta($post->ID, '_service_price_meta_key', true);
    ?>
    <label for="service_price"></label>
    <input type="text" name="service_price" id="service_price" placeholder="Enter a price..." value="<?php echo $value ?>"/>

    <?php
}

function service_price_box_save( $post_id ) {
    if(array_key_exists('service_price', $_POST)) {
        update_post_meta(
            $post_id,
            '_service_price_meta_key',
            $_POST['service_price']
        );
    }
}
add_action( 'save_post', 'service_price_box_save' );





/**
 * SERVICE TYPE
 * 
 * 
*/
add_action( 'add_meta_boxes', 'service_type_box' );
function service_type_box() {
    add_meta_box( 
        'service_type_box',
        __( 'Service Type', 'boilerplate' ),
        'service_type_box_content',
        'service',
        'side',
        'high'
    );
}

function service_type_box_content( $post ) {
    wp_nonce_field( plugin_basename( __FILE__ ), 'service_type_box_content_nonce' );
    $value = get_post_meta($post->ID, '_service_type_meta_key', true);
    ?>
    <label for="service_type"></label>
    <select name="service_type" id="service_type">
        <option value="">Choose...</option>
        <option value="weekly" <?php selected($value, 'weekly') ?>>Weekly</option>
        <option value="monthly" <?php selected($value, 'monthly') ?>>Monthly</option>
        <option value="yearly" <?php selected($value, 'yearly') ?>>Yearly</option>
    </select>
    <?php

}

function service_type_box_save( $post_id ) {
    if(array_key_exists('service_type', $_POST)) {
        update_post_meta(
            $post_id,
            '_service_type_meta_key',
            $_POST['service_type']
        );
    }
}
add_action( 'save_post', 'service_type_box_save' );

