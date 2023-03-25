<?php 

if(!defined('ABSPATH')) {
    exit;
}

?>
<div class="socialmedia">
    <div class="socialmedia__container">
        <?php 

        $socials = array(
            'facebook',
            'twitter',
            'instagram',
            'linkedin',
            'youtube'
        );

        echo '<ul>';

        foreach($socials as $social) {
            $socialField = get_field('social_' . $social, 'option');

            if(isset($socialField) && !empty($socialField)) {
                echo sprintf('<li><a href="%s" target="_blank" rel="nofollow noreferrer">%s</a></li>', $socialField['url'], $socialField['name']);
            }
        }

        echo '</ul>';
        
        ?>
    </div>
</div>