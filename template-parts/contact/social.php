<?php 

if(!defined('ABSPATH')) {
    exit;
}

?>
<nav class="socialmedia" itemscope itemtype="https://schema.org/Organization">
    <h5 class="socialmedia__title">Social</h5>
    <ul class="socialmedia__list">
    <?php 

    $socials = array(
        'facebook',
        'twitter',
        'instagram',
        'linkedin',
        'youtube'
    );

    foreach($socials as $social) {
        $socialField = get_field('social_' . $social, 'option');

        if(isset($socialField) && !empty($socialField)) {
            $url = esc_url($socialField['url']);
            $name = esc_html($socialField['name']);
            echo "<li><a href='{$url}' target='_blank' rel='nofollow noreferrer' aria-label='{$name}' itemProp='sameAs'>{$name}</a></li>";
        }
    }
    
    ?>
    </ul>
</nav>