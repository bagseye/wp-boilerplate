<?php

if(!defined('ABSPATH')) {
    exit;
}

?>

<div class="contactmethods">
    <div class="contactmethods__container" itemscope itemtype="https://schema.org/LocalBusiness">
        <h5 class="contactmethods__title">Contact</h5>
        <ul class="contactmethods__list">
            <?php 

            $phone = get_field('phone_number', 'option');
            $email = get_field('email_address', 'option');
            $address = get_field('address', 'option');  
            
            if(!empty($phone)) {
                $phone_esc = esc_html($phone);
                echo "<li class='contactmethods__list--item'><a href='tel:{$phone_esc}' aria-label='Phone number' itemprop='telephone'>{$phone_esc}</a></li>";
            }

            if(!empty($email)) {
                $email_esc = esc_html($email);
                echo "<li class='contactmethods__list--item'><a href='mailto:{$email_esc}' aria-label='Email address' itemprop='email'>{$email_esc}</a></li>";
            }
            
            ?>
        </ul>
        <?php 
            if(!empty($address)) {
                $address_esc = nl2br(esc_html($address));
                echo "<address itemprop='address'>{$address_esc}</address>";
            }
        ?>
    </div>
</div>