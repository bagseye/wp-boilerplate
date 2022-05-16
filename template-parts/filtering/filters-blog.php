<?php $cats = get_categories(); ?>
<div class="filters">
    <select name="categoryDropdown" onchange="document.location.pathname='/category/' + this.options[this.selectedIndex].value">
        <option value=""><?php esc_attr( _e('Select Category', 'textdomain') ); ?></option>
        <?php foreach($cats as $cat) : ?>
            <option value="<?php echo $cat->slug ?>"><?php echo $cat->name ?></option>
        <?php endforeach; ?>
    </select>
    
    <select name="archiveDropdown" onchange="document.location.href=this.options[this.selectedIndex].value;">
        <option value=""><?php esc_attr( _e('Select Month', 'textdomain') ); ?></option>
        <?php wp_get_archives( 
            array( 
                'type' => 'monthly',
                'format' => 'option',
                'show_post_count' => 1
                )
            ); 
        ?>
    </select>
    
    <?php $authors = get_users(); ?>
    <select name="authorDropdown" onchange="document.location.pathname='/author/' + this.options[this.selectedIndex].value">
        <option value=""><?php esc_attr( _e('Select Author', 'textdomain') ); ?></option>
        <?php foreach($authors as $author) : ?>
            <option value="<?php echo $author->user_nicename ?>"><?php echo $author->display_name; ?></option>
        <?php endforeach; ?>
    </select>
</div>
