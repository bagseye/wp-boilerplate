<article id="post-<?php the_ID(); ?>" <?php post_class('h-type-standard h-container-large grid'); ?>>
    <div class="grid__span-3">
        <?php the_title('<h1>', '</h1>'); ?>

        <?php get_template_part( 'template-parts/content/content', 'published' ); ?>
    
        <?php the_content(); ?>

        <?php get_template_part( 'template-parts/content/content', 'author' ); ?>
    </div>
</article>