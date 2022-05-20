<?php get_header(); ?>

<?php echo get_template_part('template-parts/filtering/filters', 'blog'); ?>

<?php $description = get_the_archive_description(); ?>

<?php the_archive_title('<h1>', '</h1>'); ?>

<?php if(have_posts()) : ?>

    <?php while(have_posts()) : ?>
        <?php 
        the_post(); 
        get_template_part('template-parts/content/content', 'excerpt');
        ?>

    <?php endwhile; ?>

    <?php wpboiler_numeric_posts_nav(); ?>

<?php else : ?>
    <?php get_template_part('template-parts/content/content', 'none'); ?>
<?php endif; ?>

<?php get_footer(); ?>