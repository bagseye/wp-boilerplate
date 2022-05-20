<?php get_header(); ?>

<?php echo get_template_part('template-parts/filtering/filters', 'blog'); ?>

<h1><?php echo get_the_author(); ?></h1>
<p><?php echo get_the_author_meta('description'); ?></p>

<?php if(have_posts()) : ?>

    <?php while(have_posts()) : ?>
        <?php 
        the_post(); 
        get_template_part('template-parts/content/content', 'excerpt');
        ?>

    <?php endwhile; ?>

    <?php //wpboiler_the_posts_navigation(); ?>

<?php else : ?>
    <?php get_template_part('template-parts/content/content', 'none'); ?>
<?php endif; ?>

<?php get_footer(); ?>