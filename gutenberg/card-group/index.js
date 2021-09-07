( function( wp ) {

	var registerBlockType = wp.blocks.registerBlockType;
	var el = wp.element.createElement;
	var __ = wp.i18n.__;

	const { RadioControl, PanelBody, Button } = wp.components;
	const { useBlockProps, RichText, InspectorControls, InnerBlocks, MediaUpload } = wp.blockEditor;

	registerBlockType( 'wpboiler-core/card-group', {

		apiVersion: 2,
		title: __(
			'Card Group',
			'card-group'
		),
		description: __(
			'Displays a group of cards. Useful for displaying snippets of information',
			'card-group'
		),
		category: 'design',
		icon: 'columns',
		supports: {
			html: false,
		},
		attributes: {
			marginselect: {
				type: 'string',
				default: 'margins__none',
			},
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img.cardgroup__background',
				attribute: 'src',
			},
		},

		edit: function(props) {

			const { attributes, setAttributes } = props;
			const { 
				marginselect,
				mediaID,
				mediaURL,
			} = attributes;

			const onChangeMarginSelect = value => setAttributes({ marginselect: value });
			const onSelectImage = media => setAttributes({ m })

			return el(
				'div',
				useBlockProps(attributes),
				
				// INSPECTOR CONTROL BEGIN
				el(
					InspectorControls,
					null,

					el(
					PanelBody, {
						title: 'Margins'
					},

					el(
						RadioControl,
						{
							selected: marginselect,
							options: [
								{
									label: 'No Margins',
									value: 'margins__none',
								},
								{
									label: 'Top & Bottom Margins',
									value: 'margins__topBottom',
								},
								{
									label: 'Top Margin Only',
									value: 'margins__top',
								},
								{
									label: 'Bottom Margin Only',
									value: 'margins__bottom',
								},
							],
							onChange: onChangeMarginSelect
						}
					)
				),

				// IMAGE UPLOAD BEGIN
				el(
					PanelBody, {
						title: 'Background Image',
					},

					el(
						MediaUpload, {
							onSelect: onSelectImage,
							allowedTypes: 'image',
							value: mediaID,
							render: obj => {
								return el(
									Button, {
										className: 'components-button is-primary',
										onClick: obj.open,
									},
									!mediaID ? __( 'Upload Image', 'card-group' ) : __( 'Replace Image', 'card-group' )
								)
							}
						}
					),

					mediaID ? el(
						Button, {
							className: 'components-button is-tertiary',
							style: { marginLeft: '5px' },
							onClick: () => setAttributes({ mediaID: '', mediaURL: '' })
						},
						'Remove Image'
					) : ''
				)
				// IMAGE UPLOAD END
			),
			// INSPECTOR CONTROL END

				
			);
		},

		save: function() {
			return el(
				'p',
				useBlockProps.save(),
				__( 'Card Group – hello from the saved content!', 'card-group' )
			);
		},
	} );
}(
	window.wp
) );
