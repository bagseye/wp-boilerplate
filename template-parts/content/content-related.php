<?php 
$post_cats = wp_get_post_categories(get_the_ID());
$args = array(
  'post_type' => 'post',
  'post_status' => 'published',
  'category__in' => $post_cats,
  'post__not_in' => array(get_the_ID())
);

$query = new WP_Query($args);

?>
<?php if($query->have_posts()) : ?>
<div class="h-container-large grid">
    <div class="grid__span-3">
      <div class="e-related">
        <div class="e-related__inner">
            <div class="e-related__container">
                <header class="e-related__header">
                    <h3 class="e-related__heading">Entries related to this subject</h3>
                </header>
                <?php while($query->have_posts()) : $query->the_post(); ?>
                <?php the_title(); ?>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>