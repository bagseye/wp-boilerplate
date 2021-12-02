<?php 

get_header(); ?>

<div style="padding-top: 200px"></div>

<?php $cats = get_categories(); 

var_dump($cats);
?>

<select name="" id="" onchange="getSelect(this)">
    <?php foreach($cats as $cat) : ?>
        <option value="<?php echo $cat->slug ?>"><?php echo $cat->name ?></option>
    <?php endforeach; ?>
</select>
<?php if(have_posts()) { ?>

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

    <?php wp_dropdown_categories(); ?>

    <?php
} else {
    get_template_part('template-parts/content/content', 'none');
}

get_footer();

?>