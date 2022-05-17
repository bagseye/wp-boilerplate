<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php wpboiler_the_html_classes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
</head>

<?php 

    $modifiers = array();

    $showAlert = get_field('show_alert_message', 'option');
    $alertMessage = get_field('alert_message', 'option');

    if($showAlert && isset($alertMessage)) {
        $modifiers[] = 'has__alert';
    }

?>

<body <?php body_class(implode(' ', $modifiers)); ?>>
<?php 
if( function_exists( 'wp_body_open' ) ) {
	wp_body_open();
} else {
	do_action( 'wp_body_open' );
}
?>

<div id="page" class="site">

    <?php 

    if($showAlert && isset($alertMessage)) :
        
        get_template_part('template-parts/alert/alert', '', array(
            'show-alert' => $showAlert,
            'alert-message' => $alertMessage
        ));

    endif; 
    
    ?>    

    <?php get_template_part( 'template-parts/header/site-header' ); ?>

    <main id="main" class="site-main container__main">