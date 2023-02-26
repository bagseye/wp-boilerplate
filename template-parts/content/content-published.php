<?php 
$publish_date = get_the_date('jS F Y'); 
$publish_date_ISO = get_the_date('c');
?>

<?php if($publish_date && !empty($publish_date)) : ?>
<div class="e-published">
  <div class="e-published__inner">
    <div class="e-published__container">
      <p class="e-published__message">Published on <time <?= $publish_date_ISO ? 'datetime="' . $publish_date_ISO . '"' : null ?> class="e-published__date"><?= $publish_date ?></time></p>
    </div>
  </div>
</div>
<?php endif; ?>