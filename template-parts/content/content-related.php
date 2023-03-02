<?php 
$post_cats = wp_get_post_categories(get_the_ID());
$args = array(
  'post_type'       => 'post',
  'post_status'     => 'published',
  'category__in'    => $post_cats,
  'post__not_in'    => array(get_the_ID()),
  'order'           => 'DESC',
  'orderby'         => 'date',
  'posts_per_page'  => 5
);

$query = new WP_Query($args);

?>
<?php if($query->have_posts()) : ?>
<div class="h-container-large grid">
    <div class="grid__span-3">
      <div class="e-related splide">
        <div class="e-related__inner">
            <div class="e-related__container">
                <header class="e-related__header">
                    <h3 class="e-related__heading">Entries related to this subject</h3>
                </header>
                <div class="splide__track">
                  <div class="e-related__items splide__list">
                  <?php while($query->have_posts()) : $query->the_post(); ?>
                    <div class="e-related__item splide__slide">
                      <a href="<?php the_permalink() ?>" class="e-related__item--link" title="<?php the_title() ?>">
                        <div class="e-related__item--media">
                          <?php 
                          
                          $image_id = get_post_thumbnail_id(get_the_ID());
                          $image_src = get_the_post_thumbnail_url(get_the_ID(), 'large');
                          
                          ?>
                          <figure class="e-related__item--figure">
                            <picture class="e-related__item--picture"> 
                              <?= wp_filter_content_tags( '<img src="' . $image_src . '" alt="" class="e-related__item--img wp-image-' . $image_id . '">' ) ?>
                            </picture>
                          </figure>
                        </div>
                        <div class="e-related__item--content">
                          <header class="e-related__item--header">
                            <h3 class="e-related__item--heading"><?php the_title() ?></h3>
                            <?php get_template_part( 'template-parts/content/content', 'published' ); ?>
                          </header>
                          <div class="e-btn">
                            <span class="e-btn__link wp-block-button__link">Read entry</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  <?php endwhile; wp_reset_postdata(); ?>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>