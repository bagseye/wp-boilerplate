<?php 

$wrapper_classes = 'siteHeader';
$wrapper_classes .= has_nav_menu( 'primary' ) ? ' hasMenu' : '';

?>

<header id="masthead" class="<?php echo esc_attr( $wrapper_classes ); ?>">
    <?php get_template_part( 'template-parts/header/site-nav' ); ?>
</header>