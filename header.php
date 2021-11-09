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

    <a href="#content" class="skip-link screen-reader-text"><?php esc_html_e( 'Skip to content', 'wpboiler' ); ?></a>

    <?php get_template_part( 'template-parts/header/site-header' ); ?>

    <main id="main" class="site-main container__main" role="main">