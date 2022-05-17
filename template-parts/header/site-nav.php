<?php if( has_nav_menu( 'primary' ) ) : ?>
    <nav id="siteNavigation" class="headernavigation" aria-label="<?php esc_attr_e( 'Primary menu', 'wpboiler' ); ?>">
        <div class="headernavigation__button--container">
            <button id="navigationButton" class="headernavigation__button" aria-controls="headerNavigation" aria-expanded="false">
                Menu
            </button>
        </div>

        <?php 

        $menuItems = wp_get_nav_menu_items( 'header-navigation' );

        if($menuItems) {
            $menu = array();

            foreach($menuItems as $menuItem) {
                $tmpItem = array(
                    'Text'  => $menuItem->title,
                    'Link'  => $menuItem->url,
                    'ObjID' => $menuItem->object_id
                );

                populateNav($menu, $menuItem->menu_item_parent, $menuItem->ID, $tmpItem);
            }

            echo '<div class="headernavigation__flyout">
                    <div class="headernavigation__flyout--container">
                        <ul id="headerNavigation">';

                        foreach($menu as $menuItm) {
                            paintNav($menuItm);
                        }

                echo '</ul>
                        
                    </div>

                  </div>';
        }
        ?>
    </nav>
<?php endif; ?>

<?php 

function paintNav($menuItm) {

    if(isset($menuItm['Children']) && is_array($menuItm['Children']) && count($menuItm['Children']) > 0) {

        echo '<li class="headernavigation__hasChildren">';
            echo '<a href="' . $menuItm['Item']['Link'] . '">
                    ' . $menuItm['Item']['Text'] . '
                  </a>';

            // SUB ITEMS
            echo '<ul class="headernavigation__main--sub">';

                    foreach($menuItm['Children'] as $childMenu) {
                        paintNav($childMenu);
                    }

              echo '</ul>
              </li>';
    } else {
        echo '<li>
                <a href="' . $menuItm['Item']['Link'] . '">
                    ' . $menuItm['Item']['Text'] . '
                </a>
              </li>';
    }
}

function populateNav(&$menu, $parentID, $itemID, $tmpItem) {

    if($parentID == 0) {

        // TOP LEVEL
        $menu[$itemID] = array('Item' => $tmpItem, 'Children' => array());
    } else {
        if(isset($menu[$parentID])) {
            //NEXT LEVEL
            $menu[$parentID]['Children'][$itemID] = array('Item' => $tmpItem, 'Children' => array());
        } else {
            // LOWER LEVELS RECURSIVE
            foreach($menu as $mnItmK => $mnItmV) {
                if(count($menu[$mnItmK]['Children']) > 0) {
                    populateNav($menu[$mnItmK]['Children'], $parentID, $itemID, $tmpItem);
                }
            }
        }
    }
}

?>