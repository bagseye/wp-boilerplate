<div class="contactmethods">
    <div class="contactmethods__container">
        <ul>
            <?php 

            $phone = get_field('phone_number', 'option');
            $email = get_field('email_address', 'option');
            $addressFieldOne = get_field('address_field_one', 'option'); 
            $addressFieldTwo = get_field('address_field_two', 'option'); 
            $addressFieldThree = get_field('address_field_three', 'option');
            $addressFieldFour = get_field('address_field_four', 'option'); 
            
            if(isset($phone) && !empty($phone)) {
                echo '<li><a href="tel:' . $phone . '">' . $phone . '</a></li>';
            }

            if(isset($email) && !empty($phone)) {
                echo '<li><a href="mainto:' . $email . '">' . $email . '</a></li>';
            }

            if(isset($addressFieldOne) && !empty($addressFieldOne)) {
                echo '<address>';
                    echo $addressFieldOne;
                    echo $addressFieldTwo;
                    echo $addressFieldThree;
                    echo $addressFieldFour;
                echo '</address>';
            }
            
            ?>
        </ul>
    </div>
</div>