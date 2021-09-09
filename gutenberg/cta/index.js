( function( wp ) {

	var registerBlockType = wp.blocks.registerBlockType;
	var el = wp.element.createElement;
	var __ = wp.i18n.__;

	const { RadioControl, PanelBody, Button } = wp.components;
	const { useBlockProps, RichText, InspectorControls, InnerBlocks, MediaUpload } = wp.blockEditor;
	const allowedBlocks = [ 'core/paragraph', 'core/button' ];

	registerBlockType( 'wpboiler-core/cta', {

		apiVersion: 2,
		title: __(
			'Call to Action',
			'cta'
		),
		description: __(
			'Displays text and media to guide users to other areas of the site and grab their attention',
			'cta'
		),
		category: 'design',
		icon: 'megaphone',
		supports: {
			html: false,
		},
		attributes: {
			category: {
				type: 'string',
				source: 'text',
				selector: 'h3.cta__heading--category',
				default: '',
			},
			heading: {
				type: 'string',
				source: 'text',
				selector: 'h2.cta__heading--main',
				default: '',
			},
			subheading: {
				type: 'string',
				source: 'text',
				selector: 'h3.cta__heading--sub',
				default: '',
			},
			marginselect: {
				type: 'string',
				default: 'margins__none',
			},
			orientationselect: {
				type: 'string',
				default: 'cta__text--left',
			},
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img.cta__background',
				attribute: 'src'
			},
			mediaAlt: {
				type: 'string',
				source: 'attribute',
				selector: 'img.cta__background',
				attribute: 'alt'
			},
			mediaWidth: {
				type: 'number',
				source: 'attribute',
				selector: 'img.cta__background',
				attribute: 'width',
			},
			mediaHeight: {
				type: 'number',
				source: 'attribute',
				selector: 'img.cta__background',
				attribute: 'height',
			},
		},


		edit: function(props) {

			const { attributes, setAttributes } = props;
			const { 
				category, 
				heading, 
				subheading, 
				marginselect,
				orientationselect, 
				mediaID, 
				mediaURL,
				mediaHeight,
				mediaWidth,
				mediaAlt,				 
			} = attributes;

			const onChangeMarginSelect = value => setAttributes({ marginselect: value });
			const onChangeOrientationSelect = value => setAttributes({ orientationselect: value });
			const onSelectImage = media => {
				setAttributes({ 
					mediaID: media.id, 
					mediaURL: (media.sizes.cta ? media.sizes.cta.url : media.url),
					mediaAlt: media.alt,
					mediaWidth: (media.sizes.cta ? media.sizes.cta.width : media.width),
					mediaHeight: (media.sizes.cta ? media.sizes.cta.height : media.height),
				});
			}

			return el(
				'div',
				useBlockProps(attributes),
				
				// INSPECTOR CONTROL BEGIN	
				el(
					InspectorControls,
					null,

					// BLOCK MARGIN CONTROLS BEGIN
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
						),
					),
					// BLOCK MARGIN CONTROLS END

					// BLOCK ORIENTATION CONTROL BEGIN
					el(
						PanelBody, {
							title: 'Text Orientation'
						},

						el(
							RadioControl,
							{
								selected: orientationselect,
								options: [
									{
										label: 'Text Left',
										value: 'cta__text--left',
									},
									{
										label: 'Text Right',
										value: 'cta__text--right',
									},
									{
										label: 'Text Center',
										value: 'cta__text--center',
									},
								],
								onChange: onChangeOrientationSelect
							}
						)
					),
					// BLOCK ORIENTATION CONTROL END

					// IMAGE UPLOAD BEGINS
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
										!mediaID ? __( 'Upload Image', 'cta' ) : __( 'Replace Image', 'cta' )
									);
								},
							}
						),

						mediaID ? el(
							Button, {
								className: 'components-button is-tertiary',
								style: {  marginLeft: '5px' },
								onClick: () => setAttributes({ mediaID: '', mediaURL: '' }),
							},
							'Remove Image'
						) : ''
					),
					// IMAGE UPLOAD ENDS
				),
				// INSPECTOR CONTROL END

				// PREVIEW AREA STARTS
				el(
					'div',
					{ className: 'cta__container' },

					el(
						'div',
						{ className: 'cta__column' },

						el(
							RichText, {
								tagName: 'h3',
								placeholder: 'Enter a category here...',
								className: 'cta__heading cta__heading--category',
								value: ( category ? category : '' ),
								onChange: value => setAttributes({ category: value }),
							}
						),

						el(
							RichText, {
								tagName: 'h2',
								placeholder: 'Enter a heading here...',
								className: 'cta__heading cta__heading--main',
								value: ( heading ? heading : '' ),
								onChange: value => setAttributes({ heading: value }),
							}
						),

						el(
							RichText, {
								tagName: 'h3',
								placeholder: 'Enter a subtitle here...',
								className: 'cta__heading cta__heading--sub',
								value: ( subheading ? subheading : '' ),
								onChange: value => setAttributes({ subheading: value }),
							}
						),

						el(
							InnerBlocks, {
								allowedBlocks: allowedBlocks
							}
						),
					),
				),

				mediaURL ? el(
					'div',
					{ className: 'cta__container--media' },

					el(
						'img',
						{ 
							className: 'cta__background',
							src: mediaURL,
							loading: 'lazy',
							width: mediaWidth,
							height: mediaHeight,
							alt: mediaAlt,
						}
					),
				) : ''
				
				// PREVIEW AREA ENDS

			);
		},

		save: function(props) {
			const { attributes } = props;
			const { 
				category, 
				heading, 
				subheading, 
				mediaURL,
				mediaAlt,
				mediaHeight,
				mediaWidth,
				orientationselect,
				marginselect, 
			} = attributes;

			return el(
				'section',
				{ className: `cta ${orientationselect} ${marginselect}` },

				el(
					'div',
					{ className: 'cta__container' },

					el(
						'div',
						{ className: 'cta__column' },

						el(
							RichText.Content, {
								tagName: 'h3',
								className: 'cta__heading cta__heading--category',
								value: category,
							}
						),
	
						el(
							RichText.Content, {
								tagName: 'h2',
								className: 'cta__heading cta__heading--main',
								value: heading,
							}
						),
	
						el(
							RichText.Content, {
								tagName: 'h3',
								className: 'cta__heading cta__heading--sub',
								value: subheading,
							}
						),
	
						el(
							InnerBlocks.Content, {},
						),
					),
				),

				mediaURL ? el(
					'div',
					{ className: 'cta__container--media' },

					el(
						'img',
						{
							className: 'cta__background',
							src: mediaURL,
							loading: 'lazy',
							width: mediaWidth,
							height: mediaHeight,
							alt: mediaAlt,
						}
					)

				) : ''
			)

		},
	} );
}(
	window.wp
) );
