<?php

if(!defined('ABSPATH')) {
    exit;
}

$footerMenuItems = wp_get_nav_menu_items('footer-navigation');

if($footerMenuItems) : ?>
<nav id="footerNavigation" class="footernavigation" aria-label="<?php esc_attr_e('Footer menu', 'wpboiler') ?>" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <h5 class="footernavigation__title">Services</h5>
    <ul class="footernavigation__list">
        <?php foreach($footerMenuItems as $footerMenuItem) : ?>
        <?php 
        /**
         * $is_external looks for the first occurrence of the home_url() in the url
         * if it's not found, it's an external link
        */
        $is_external = strpos($footerMenuItem->url, home_url()) === false;
        $rel = $is_external ? 'rel="noopener noreferrer"' : '';  
        $target = $is_external ? 'target="_blank"' : '';  
        ?>
        <li class="footernavigation__list--item">
            <a href="<?php echo esc_url($footerMenuItem->url) ?>" <?php echo $rel; ?> <?php echo $target; ?> title="<?php echo esc_attr($footerMenuItem->title) ?>">
                <?php echo esc_html($footerMenuItem->title); ?>
            </a>
        </li>
        <?php endforeach; ?>
    </ul>
</nav>
<?php endif; ?>