<?php 

$wrapper_classes = 'site-header';
$wrapper_classes .= has_custom_logo() ? ' has-logo' : '';
$wrapper_classes .= has_nav_menu( 'primary' ) ? ' has-menu' : '';

?>

<header id="masthead" class="<?php echo esc_attr( $wrapper_classes ); ?>" role="banner">

    <?php get_template_part( 'template-parts/header/site-branding' ); ?>
    <?php get_template_part( 'template-parts/header/site-nav' ); ?>

</header>

<?php if(is_front_page()) : ?>
<section class="hero splide">
    <?php if(have_rows('hero_slide', 'option')) : ?>
        <div class="hero__track splide__track">
            <div class="hero__list splide__list">
                <?php while(have_rows('hero_slide', 'option')) : the_row(); ?>

                <?php 
                
                $title = get_sub_field('title', 'option');
                $subTitle = get_sub_field('sub_title', 'option');
                $image = get_sub_field('image', 'option');
                ?>

                <div class="hero__slide splide__slide">
                    <div class="hero__slide--content">
                        <h2 class="hero__title"><?php echo $title ?></h2>
                        <h4 class="hero__title--sub"><?php echo $subTitle ?></h4>
                    </div>
                    <div class="hero__slide--media">
                        <?php echo wp_filter_content_tags('<img class="wp-image-' . $image['ID'] . '" src="' . $image['url'] . '" />') ?>
                    </div>
                </div>

                <?php endwhile; ?>
            </div>
        </div>
    <?php endif; ?>
</section>
<?php endif; ?>