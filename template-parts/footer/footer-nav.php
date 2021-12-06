<nav id="footerNavigation" role="navigation" aria-label="<?php esc_attr_e('Footer menu', 'wpboiler') ?>">

    <?php 
    
    $footerMenuItems = wp_get_nav_menu_items('footer-navigation');

    if($footerMenuItems) {
        $footerMenu = array();

        foreach($footerMenuItems as $footerMenuItem) {
            $tmpItem = array(
                'Text' => $footerMenuItem->title,
                'Link' => $footerMenuItem->url,
                'ObjID' => $footerMenuItem->object_id
            );

            populateFooterNav($footerMenu, $footerMenuItem->menu_item_parent, $footerMenuItem->ID, $tmpItem);
        }
        echo '<ul>';
        
            foreach($footerMenu as $footerMenuItm) {
                paintFooterNav($footerMenuItm);
            }
        
        echo '</ul>';
    }


    ?>
</nav>

<?php 

function paintFooterNav($footerMenuItm) {
    echo '<li>
            <a href="' . $footerMenuItm['Item']['Link'] . '">' . $footerMenuItm['Item']['Text'] . '</a>
        </li>';
}

function populateFooterNav(&$footerMenu, $parentID, $itemID, $tmpItem) {
    $footerMenu[$itemID] = array('Item' => $tmpItem, 'Children' => array());
}

?>