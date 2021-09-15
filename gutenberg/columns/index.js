( function( wp ) {

	var registerBlockType = wp.blocks.registerBlockType;
	var el = wp.element.createElement;
	var __ = wp.i18n.__;

	const { useSelect } = wp.data;
	const { PanelBody, RangeControl } = wp.components;
	const { useBlockProps, InnerBlocks, InspectorControls } = wp.blockEditor;
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
		attributes: {
			columnselect: {
				type: 'number',
				default: 2,
			},
		},

		edit: function(props) {
			const { attributes, clientId, setAttributes } = props;
			const { columnselect } = attributes;

			const innerBlockCount = useSelect((select) => select('core/block-editor').getBlock(clientId).innerBlocks);

			const onChangeColumnSelect = value => setAttributes({ columnselect: value });

			return el(
				'section',
				useBlockProps(attributes),
				__( 'Add columns by pressing the + icon. Maximum 4 columns', 'columns' ),

				el(
					InspectorControls,
					null,

					el(
						PanelBody, {
							title: 'Columns Select',
						},

						el(
							RangeControl, {
								value: columnselect,
								min: 2,
								max: 4,
								onChange: onChangeColumnSelect
							}
						)
					)
				),

				el(
					'div',
					{ className: 'columns__container' },

					el(
						InnerBlocks, {
							allowedBlocks: allowedBlocks,
						}
					),
				)
			);
		},

		save: function(props) {

			const { attributes } = props;
			const { columnselect } = attributes;

			return el(
				'section',
				{ className: `columns columns__count--${columnselect.toString()}` },


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
