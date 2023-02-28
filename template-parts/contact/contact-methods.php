<div class="contactmethods">
    <div class="contactmethods__container">
        <h5 class="contactmethods__title">Contact</h5>
        <ul class="contactmethods__list">
            <?php 

            $phone = get_field('phone_number', 'option');
            $email = get_field('email_address', 'option');
            $address = get_field('address', 'option');  
            
            if(isset($phone) && !empty($phone)) {
                echo '<li class="contactmethods__list--item"><a href="tel:' . $phone . '">' . $phone . '</a></li>';
            }

            if(isset($email) && !empty($phone)) {
                echo '<li class="contactmethods__list--item"><a href="mailto:' . $email . '">' . $email . '</a></li>';
            }
            
            ?>
        </ul>
        <?php 
            if(isset($address) && !empty($address)) {
                echo '<address>';
                    echo $address;
                echo '</address>';
            }
        ?>
    </div>
</div>