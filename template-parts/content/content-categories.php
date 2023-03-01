<?php 

$post_categories = wp_get_post_categories(get_the_ID(), array( 'fields' => 'all' ));
$last_key = array_key_last($post_categories);
$cats = array();

?>

<?php if($post_categories && is_array($post_categories)) : ?>
<div class="e-categories">
    <div class="e-categories__inner">
        <div class="e-categories__container">
            <header class="e-categories__header">
                <h3 class="e-categories__heading">Categorised under</h3>
            </header>
            <ul class="e-categories__items">
                <?php 
                foreach($post_categories as $cat_key => $cat_val){
                    $dangle = ($cat_key != $last_key) ? ',' : null;
                    printf('<li class="e-categories__item"><a class="e-categories__item--link" href="%s" title="Posts categorised under %s">%s</a>%s</li>', esc_url( get_category_link( $cat_val->term_id ) ), $cat_val->name, $cat_val->name, $dangle );
                }
                ?>
            </ul>
        </div>
    </div>
</div>
<?php endif; ?>