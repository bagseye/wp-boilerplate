<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php wpboiler_the_html_classes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php 
if( function_exists( 'wp_body_open' ) ) {
	wp_body_open();
} else {
	do_action( 'wp_body_open' );
}
?>
<div id="page" class="site">

    <?php 
    
    $showAlert = get_field('show_alert_message', 'option');
    $alertMessage = get_field('alert_message', 'option');
    $includeLink = get_field('include_link', 'option');
    $alertLink = get_field('alert_link', 'option');

    if($showAlert && isset($alertMessage)) : ?>

    <div class="alert">
        <div class="alert__container">
            <p><?php echo $alertMessage ?><?php echo ($includeLink && isset($alertLink)) ? ' <a href="' . $alertLink . '">Find out more</a>' : '' ?></p>
        </div>
    </div>

    <?php endif; ?>

    <?php get_template_part( 'template-parts/header/site-header' ); ?>

    <main id="main" class="site-main container__main" role="main">