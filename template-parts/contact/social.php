<?php 

if(!defined('ABSPATH')) {
    exit;
}

?>
<nav class="socialmedia">
    <h5 class="socialmedia__title">Social</h5>
    <?php 

    $socials = array(
        'facebook',
        'twitter',
        'instagram',
        'linkedin',
        'youtube'
    );

    echo '<ul class="socialmedia__list">';

    foreach($socials as $social) {
        $socialField = get_field('social_' . $social, 'option');

        if(isset($socialField) && !empty($socialField)) {
            echo sprintf('<li><a href="%s" target="_blank" rel="nofollow noreferrer">%s</a></li>', $socialField['url'], $socialField['name']);
        }
    }

    echo '</ul>';
    
    ?>
</nav>