<?php if( has_nav_menu( 'primary' ) ) : ?>
    <nav id="siteNavigation" class="navigation" role="navigation" aria-label="<?php esc_attr_e( 'Primary menu', 'wpboiler' ); ?>">
        <div class="navigation__button--container">
            <button id="navigationButton" class="navigation__button" aria-controls="headerNavigation" aria-expanded="false">
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

            echo '<div class="navigation__flyout">
                    <div class="navigation__flyout--container">
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

        echo '<li class="navigation__hasChildren">';
            echo '<a href="' . $menuItm['Item']['Link'] . '">
                    ' . $menuItm['Item']['Text'] . '
                  </a>';

            // SUB ITEMS
            echo '<div class="navigation__main--sub">
                    <ul>';

                    foreach($menuItm['Children'] as $childMenu) {
                        paintNav($childMenu);
                    }

              echo '</ul>
                  </div>
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