<?php get_header(); ?>

<?php echo get_template_part('template-parts/filtering/filters', 'blog'); ?>

<?php $description = get_the_archive_description(); ?>

<?php the_archive_title('<h1>', '</h1>'); ?>

<?php if(have_posts()) : ?>

    <?php while(have_posts()) : ?>
        <?php 
        the_post(); 
        get_template_part('template-parts/content/content', 'excerpt');

        $type = get_post_meta(get_the_ID(), '_service_type_meta_key', true);

        var_dump($type);
        ?>

    <?php endwhile; ?>

    <?php wpboiler_the_posts_navigation(); ?>

<?php else : ?>
    <?php get_template_part('template-parts/content/content', 'none'); ?>
<?php endif; ?>

<?php get_footer(); ?>