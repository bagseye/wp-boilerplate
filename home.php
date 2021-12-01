<?php 

get_header();

if(have_posts()) { ?>

    <div class="postlist">
        <div class="postlist__container">
            <div class="postlist__items">

            <?php 
            
            while(have_posts()) {

                the_post();

                get_template_part('template-parts/content/content', 'excerpt');
            }

            ?>

            </div>

            <?php 
            
            wpboiler_the_posts_navigation(); 
            
            ?>
            
        </div>
    </div>

    <?php
} else {
    get_template_part('template-parts/content/content', 'none');
}

get_footer();

?>