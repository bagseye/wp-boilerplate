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
				selector: 'h3',
			},
			heading: {
				type: 'string',
				source: 'text',
				selector: 'h2',
			},
			subheading: {
				type: 'string',
				source: 'text',
				selector: 'h3'
			},
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
				select: 'img',
				attribute: 'src'
			},
		},


		edit: function(props) {

			const { attributes, setAttributes } = props;
			const { category, heading, subheading, marginselect, mediaID, mediaURL } = attributes;

			const onChangeMarginSelect = value => setAttributes({ marginselect: value });
			const onSelectImage = media => setAttributes({ mediaID: media.id, mediaURL: media.url });

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
											className: mediaID ? 'image-button' : 'button button-large',
											onClick: obj.open,
										},
										!mediaID ? __( 'Upload Image', 'cta' ) : el( 'img', { src: mediaURL } )
									);
								},
							}
						),
					),
					// IMAGE UPLOAD ENDS
				),
				// iNSPECTOR CONTROL END

				// PREVIEW AREA STARTS
				el(
					'div',
					{ className: 'block__container' },

					el(
						'div',
						{ className: 'block__column' },

						el(
							RichText, {
								tagName: 'h3',
								placeholder: 'Enter a category here...',
								className: 'block__heading--category',
								value: ( category ? category : '' ),
								onChange: value => setAttributes({ category: value }),
							}
						),

						el(
							RichText, {
								tagName: 'h2',
								placeholder: 'Enter a heading here...',
								className: 'block__heading',
								value: ( heading ? heading : '' ),
								onChange: value => setAttributes({ heading: value }),
							}
						),

						el(
							RichText, {
								tagName: 'h3',
								placeholder: 'Enter a subtitle here...',
								className: 'block__heading--sub',
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

					(mediaURL ? el(
						'div',
						{ className: 'block__background' },

						el(
							'img',
							{ src: mediaURL }
						),
					) : '')
					
				)
				
				// PREVIEW AREA ENDS

			);
		},

		save: function(props) {
			const { attributes } = props;
			const { category, heading, subheading, mediaID, mediaURL } = attributes;

			return el(
				'section',
				{ className: 'cta' },

				el(
					'div',
					{ className: 'cta__container' },

					el(
						RichText.Content, {
							tagName: 'h3',
							className: 'cta__heading--category',
							value: category,
						}
					),

					el(
						RichText.Content, {
							tagName: 'h2',
							className: 'cta__heading',
							value: heading,
						}
					),

					el(
						RichText.Content, {
							tagName: 'h3',
							className: 'cta__heading--sub',
							value: subheading
						}
					),

					el(
						InnerBlocks.Content, {},
					),

					mediaID ? el(
						'div',
						{ className: 'cta__container--media' },

						el(
							'img',
							{
								src: mediaURL
							}
						)

					) : ''
					
				)
			)

		},
	} );
}(
	window.wp
) );