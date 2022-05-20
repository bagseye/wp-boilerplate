<?php 

get_header(); ?>


    <?php if(have_posts()) { ?>
    <div class="postlist">
        <div class="postlist__container">
            <?php echo get_template_part('template-parts/filtering/filters', 'blog'); ?>
            <div class="postlist__items">

            <?php 
            
            while(have_posts()) {
                the_post();

                echo wpboiler_get_blog_post_card(get_the_ID());
            }

            ?>

            </div>

            <?php 

            wpboiler_numeric_posts_nav();
            
            //wpboiler_the_posts_navigation(); 
            
            ?>
            
        </div>
    </div>

    <?php
} else {
    get_template_part('template-parts/content/content', 'none');
}

get_footer();

?>