/**
* Add New block styles to sidebar
*
*/
wp.blocks.registerBlockStyle('core/paragraph', {
    name: 'lead',
    label: 'Lead',
});

wp.blocks.registerBlockStyle('core/button', {
    name: 'basic',
    label: 'Basic',
});


/**
* Remove block styles from sidebar
*
*/
wp.domReady( () => {
    wp.blocks.unregisterBlockStyle( 'core/button', 'outline' );
    wp.blocks.unregisterBlockStyle( 'core/separator', 'wide' );
    wp.blocks.unregisterBlockStyle( 'core/separator', 'dots' );
    wp.blocks.unregisterBlockStyle( 'core/quote', 'large' );
    wp.blocks.unregisterBlockStyle('core/image', 'rounded');
});