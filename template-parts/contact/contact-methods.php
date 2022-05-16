<div class="contactmethods">
    <div class="contactmethods__container">
        <ul>
            <?php 

            $phone = get_field('phone_number', 'option');
            $email = get_field('email_address', 'option');
            $address = get_field('address', 'option');  
            
            if(isset($phone) && !empty($phone)) {
                echo '<li><a href="tel:' . $phone . '">' . $phone . '</a></li>';
            }

            if(isset($email) && !empty($phone)) {
                echo '<li><a href="mailto:' . $email . '">' . $email . '</a></li>';
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