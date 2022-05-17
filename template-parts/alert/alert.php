

<?php 

    if(isset($args) && is_array($args)) {

        if(isset($args['alert-message'])) {
            $alertMessage = $args['alert-message'];
        }

        $includeLink = get_field('include_link', 'option');
        $alertLink = get_field('alert_link', 'option');

        ?>

        <div class="alert">
            <div class="alert__container">
                <p><?php echo $alertMessage ?><?php echo ($includeLink && isset($alertLink)) ? ' <a href="' . $alertLink . '">Find out more</a>' : '' ?></p>
            </div>
        </div>

        <?php
    }

    

?>

