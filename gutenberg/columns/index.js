( function( wp ) {

	var registerBlockType = wp.blocks.registerBlockType;
	var el = wp.element.createElement;
	var __ = wp.i18n.__;

	const { useSelect } = wp.data;
	const { useBlockProps, InnerBlocks } = wp.blockEditor;
	const allowedBlocks = [ 'wpboiler-core/column' ];

	registerBlockType( 'wpboiler-core/columns', {

		apiVersion: 2,
		title: __(
			'Columns',
			'columns'
		),
		description: __(
			'Displays content in columns',
			'columns'
		),
		category: 'design',
		icon: 'schedule',
		supports: {
			html: false,
		},

		edit: function(props) {
			const { attributes, clientId } = props;
			const innerBlockCount = useSelect((select) => select('core/block-editor').getBlock(clientId).innerBlocks);

			return el(
				'section',
				useBlockProps(attributes),
				__( 'Add columns by pressing the + icon. Maximum 4 columns', 'columns' ),

				el(
					'div',
					{ className: 'columns__container' },

					innerBlockCount.length > 3 ?
						el(
							InnerBlocks, {
								allowedBlocks: allowedBlocks,
								renderAppender: false
							}
						)
						:
						el(
							InnerBlocks, {
								allowedBlocks: allowedBlocks,
							}
						),
				)
			);
		},

		save: function() {
			return el(
				'section',
				{ className: 'columns' },


				el(
					'div',
					{ className: 'columns__container' },

					el(
						InnerBlocks.Content, {},
					),
				),
			);
		},
	} );
}(
	window.wp
) );
