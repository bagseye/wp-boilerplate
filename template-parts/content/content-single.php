<article id="post-<?php the_ID(); ?>" <?php post_class('h-type-standard h-container-large grid'); ?>>
    <div class="grid__span-3">
        <?php the_title('<h1>', '</h1>'); ?>

        <?php get_template_part( 'template-parts/content/content', 'published' ); ?>
    
        <?php the_content(); ?>

    </div>
    <div class="grid__span-3-5">
        <?php get_template_part( 'template-parts/content/content', 'author' ); ?>
        <?php get_template_part( 'template-parts/content/content', 'categories' ); ?>
    </div>
</article>
<?php get_template_part( 'template-parts/content/content', 'related' ); ?>