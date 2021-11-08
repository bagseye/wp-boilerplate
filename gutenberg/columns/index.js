( function( wp ) {

	var registerBlockType = wp.blocks.registerBlockType;
	var el = wp.element.createElement;
	var __ = wp.i18n.__;

	const { useSelect } = wp.data;
	const { RangeControl, RadioControl, ToggleControl, PanelBody } = wp.components;
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
			marginSelect: {
				type: 'string',
				default: 'margins__inContent',
			},
			marginDouble: {
				type: 'boolean',
				default: false,
			},
			narrowContent: {
				type: 'boolean',
				default: false,
			},
			reverseOrder: {
				type: 'boolean',
				default: false,
			},
			columnOffset: {
				type: 'string',
				default: 'columns__offset--none'
			},
		},

		edit: function(props) {
			
			const { 
				attributes, 
				setAttributes, 
				clientId 
			} = props;

			const { 
				columnselect, 
				marginSelect,
				marginDouble,
				narrowContent,
				reverseOrder,
				columnOffset 
			} = attributes;

			const onChangeColumnSelect = value => setAttributes({ columnselect: value });
			const onChangeMarginSelect = value => setAttributes({ marginSelect: value });
			const onChangeMarginDoubleSelect = () => setAttributes({ marginDouble: marginDouble ? false : true });
			const onChangeNarrowContentSelect = () => setAttributes({ narrowContent: narrowContent ? false : true });
			const onChangeReverseOrderSelect = () => setAttributes({ reverseOrder: reverseOrder ? false : true });
			const onChangeOffsetSelect = value => setAttributes({ columnOffset: value });

			const innerBlockCount = useSelect((select) => select('core/block-editor').getBlock(clientId).innerBlocks);

			return el(
				'section',
				useBlockProps(attributes),
				__( 'Add columns by pressing the + icon. Maximum 4 columns', 'columns' ),

				// INSPECTOR CONTROLS BEGINS
				el(
					InspectorControls,
					null,

					el(
						PanelBody,
						{
							title: 'Columns Select',
						},

						el(
							RangeControl, {
								min: 2,
								max: 4,
								value: columnselect,
								onChange: onChangeColumnSelect
							}
						),
					),

					el(
						PanelBody, {
							title: 'Margin Select'
						},

						el(
							RadioControl,
							{
								selected: marginSelect,
								options: [
									{
										label: 'No Margins',
										value: 'margins__none'
									},
									{
										label: 'Basic / In-content Margins',
										value: 'margins__inContent'
									},
									{
										label: 'Margins Top & Bottom',
										value: 'margins__topBottom'
									},
									{
										label: 'Top Margin Only',
										value: 'margins__top'
									},
									{
										label: 'Bottom Margin Only',
										value: 'margins__bottom'
									},
								],
								onChange: onChangeMarginSelect
							}
						),

						(marginSelect !== 'margins__none' ? 
		
							(marginSelect !== 'margins__inContent' ? el(
								ToggleControl,
								{
									label: 'Double Margins?',
									checked: marginDouble,
									onChange: onChangeMarginDoubleSelect
								}
							) : null) 
							
						: null),
						
					),

					el(
						PanelBody, {
							title: 'Styling Controls'
						},

						el(
							ToggleControl, 
							{
								label: 'Narrow content?',
								help: 'Sets the column width to match narrow text content.',
								checked: narrowContent,
								onChange: onChangeNarrowContentSelect
							}
						),

						el(
							ToggleControl,
							{
								label: 'Reverse order on mobile?',
								help: 'When on mobile devices the order of stacked items will be reversed.',
								checked: reverseOrder,
								onChange: onChangeReverseOrderSelect
							}
						),

						(columnselect === 2 ? el(
							RadioControl,
							{
								label: 'Offset columns?',
								help: 'For a design choice, the columns can be offset. This option is only available for 2 column layouts.',
								selected: columnOffset,
								options: [
									{
										label: 'No offset',
										value: 'columns__offset--none',
									},
									{
										label: '60 / 40',
										value: 'columns__offset--6040',
									},
									{
										label: '40 / 60',
										value: 'columns__offset--4060',
									},
								],
								onChange: onChangeOffsetSelect
							}
						) : null),

						
					),
				),
				// INSPECTOR CONTROLS END

				// PREVIEW AREA BEGIN
				el(
					'div',
					{ className: 'columns__container' },

					el(
						InnerBlocks, {
							allowedBlocks: allowedBlocks,
						}
					)
						
				),
				// PREVIEW AREA END
			);
		},

		save: function() {	
			return el(InnerBlocks.Content, {});
		},
	} );
}(
	window.wp
) );
