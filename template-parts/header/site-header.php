<?php 

$wrapper_classes = 'site-header';
$wrapper_classes .= has_custom_logo() ? ' has-logo' : '';
$wrapper_classes .= has_nav_menu( 'primary' ) ? ' has-menu' : '';

?>

<header id="masthead" class="<?php echo esc_attr( $wrapper_classes ); ?>" role="banner">

    <?php get_template_part( 'template-parts/header/site-branding' ); ?>
    <?php get_template_part( 'template-parts/header/site-nav' ); ?>

</header>