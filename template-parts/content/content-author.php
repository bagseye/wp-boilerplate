<?php 

$author_id = get_the_author_meta( 'ID' );
$author_name = get_the_author_meta('display_name');
$author_description = get_the_author_meta('description');
$author_avatar = get_avatar($author_id, 120, 'retro', $author_name . ' avatar');

?>

<?php if($author_name && !empty($author_name)) : ?>
<div class="e-author">
    <div class="e-author__inner">
        <div class="e-author__container">
            <div class="e-author__media">
                <figure class="e-author__figure">
                    <picture class="e-author__picture">
                        <?= $author_avatar ?>
                    </picture>
                </figure>
            </div>
            <div class="e-author__content">
                <p class="e-author__name">Written by <?= $author_name ?></p>
                <?php if($author_description && !empty($author_description)) : ?>
                    <p class="e-author__description"><?= $author_description ?></p>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>