( function( wp ) {

	var registerBlockType = wp.blocks.registerBlockType;
	var el = wp.element.createElement;
	var __ = wp.i18n.__;

	const { RadioControl, PanelBody, Button } = wp.components;
	const { useBlockProps, RichText, InspectorControls, InnerBlocks, MediaUpload } = wp.blockEditor;
	const allowedBlocks = [ 'core/paragraph', 'core/button' ];

	registerBlockType( 'wpboiler-core/flexiblock', {

		apiVersion: 2,

		title: __(
			'Flexi Block',
			'flexiblock'
		),
		description: __(
			'Allows for flexible layouts that can be used to display images and text',
			'flexiblock'
		),
		category: 'layout',
		icon: 'admin-settings',
		supports: {
			html: false,
			color: {
				text: false
			},
		},
		attributes: {
			category: {
				type: 'string',
				default: ""
			},
			heading: {
				type: 'string',
				default: "",
			},
			subHeading: {
				type: 'string',
				default: ""
			},
			marginSelect: {
				type: 'string',
				default: 'margins__none',
			},
			orientationSelect: {
				type: 'string',
				default: 'images__right',
			},
			backgroundColor: {
				type: 'string',
				default: 'black',
			},
			images: {
				type: 'string',
				default: "[]",
			},
		},

		edit: function(props) {

			const { attributes, setAttributes } = props;

			const { 
				category, 
				heading, 
				subHeading, 
				marginSelect,
				orientationSelect,
				images,
			} = attributes;

			const onChangeMarginSelect = (newValue) => setAttributes({ marginSelect: newValue });
			const onChangeOrientationSelect = (newValue) => setAttributes({ orientationSelect: newValue });

			let tmpImages = JSON.parse(images);

			return el(
				'div',
				useBlockProps(attributes),
				
				// INSPECTOR CONTROLS BEGIN
				el(
					InspectorControls,
					null,

					// BLOCK MARGINS CONTROL BEGIN
					el(
						PanelBody, {
							title: 'Margins'
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
					),
					// BLOCK MARGINS CONTROL ENDS

					// BLOCK ORIENTATION CONTROL BEGIN
					el(
						PanelBody, {
							title: 'Orientation'
						},

						el(
							RadioControl, {
								selected: orientationSelect,
								options: [
									{
										label: 'Images Right',
										value: 'images__right',
									},
									{
										label: 'Images Left',
										value: 'images__left',
									},
								],
								onChange: onChangeOrientationSelect
							},
						)
					),
					// BLOCK ORIENTATION CONTROL ENDS

					// BLOCK IMAGE UPLOADS CONTROL BEGIN
					el(
						PanelBody, {
							title: 'Image Uploads',
						},

						(tmpImages.length < 2 ? 
						el(
							Button, {
								className: 'button block__panel--btn',
								onClick: () => {
									tmpImages.push({
										ImageId: '',
										ImageURL: '',
									});
									setAttributes({ images: JSON.stringify(tmpImages) });
								},
							},
							'Add Image'
						) : ''),

						paintFlexiBlockImages( props, tmpImages ),
					),
					// BLOCK IMAGE UPLOADS CONTROL ENDS
				),
				// INSPECTOR CONTROLS END


				// BLOCK CONTAINER BEGINS
				el(
					'div',
					{ className: 'block__container' },

					el(
						'div',
						{ className: 'block__column' },

						el(
							RichText, {
								tagName: 'p',
								placeholder: 'Enter a category here...',
								className: 'block__heading--category',
								value: ( category ? category : '' ),
								onChange: value => setAttributes( { category: value } ),
							}
						),

						el(
							RichText, {
								tagName: 'h2',
								placeholder: 'Enter a title here...',
								className: 'block__heading',
								value: ( heading ? heading : '' ),
								onChange: value => setAttributes( { heading: value } ),
							}
						),

						el(
							RichText, {
								tagName: 'h3',
								placeholder: 'Enter a sub-title here...',
								className: 'block__heading--sub',
								value: ( subHeading ? subHeading : '' ),
								onChange: value => setAttributes( { subHeading: value } ),
							}
						),

						el(
							InnerBlocks, {
								allowedBlocks: allowedBlocks,
								templateLock: false,
							}
						),
					),

					tmpImages.map( (elm) => {
						return el(
							'div',
							{ className: 'block__column block__column--media' },
	
							el(
								'img',
								{ src: elm.ImageURL, }
							),
						)
					}),
				),
				// BLOCK CONTAINER ENDS	
			)
		},

		save: function( props ) {

			const { attributes } = props;
			const { 
				category, 
				heading, 
				subHeading, 
				marginSelect,
				orientationSelect,
				backgroundColor,
				images,
			} = attributes;
			


			// Build up the modifier classes
			let mainFlexiClasses = [];
			// If a background color has been chosen, add its modifier
			if(backgroundColor != '') {
				mainFlexiClasses.push("flexi__hasbgcolor");
				mainFlexiClasses.push(`flexi__hasbgcolor--${backgroundColor}`);
			}
			// If the orientation has changed add its modifier
			if(orientationSelect != '') {
				mainFlexiClasses.push(orientationSelect);
			}
			// Then add the margin values
			mainFlexiClasses.push(marginSelect);



			// Get all the images
			let tmpImages = JSON.parse(images);

			let imagesContainer = [];
			tmpImages.forEach((elm) => {
				if(elm.ImageId != '' && /^\d+$/.test(elm.ImageId) ) {
					imagesContainer.push(
						el(
							'div',
							{ className: 'flexi__column flexi__column--media' },
							`FlexiBlockImg${elm.ImageId}`
						)
					);
				}
			})
			
			return el(
				'section',
				{ className: `flexi ${mainFlexiClasses.join(" ")}` },

				el(
					'div',
					{ className: 'flexi__container' },

					el(
						'div',
						{ className: 'flexi__column' },

						( category != '' ?
							el(
								'h3',
								{ className: 'flexi__heading--category' },

								el(
									RichText.Content,
									{
										tag: 'p',
										value: category,
									}
								)
							) 
							: '' 
						),

						( heading != '' ? 
							el(
								'h2',
								{ className: 'flexi__heading' },

								el(
									RichText.Content,
									{
										tag: 'h2',
										value: heading
									}
								)
							)
						: ''
						),

						( subHeading != '' ? 
							el(
								'h3',
								{ className: 'flexi__heading--sub' },

								el(
									RichText.Content,
									{
										tag: 'h3',
										value: subHeading,
									}
								)
							)
						: ''
						),

						el(
							InnerBlocks.Content, {}
						)
					),

					imagesContainer
				)
			);
		},
	} );

	function paintFlexiBlockImages( props, tmpImages ) {
		const { setAttributes } = props;

		let tmpObj = [];

		tmpImages.forEach((elm, index) => {
			tmpObj.push(
				el(
					'div',
					{style: {padding: '10px 0' } },

					el(
						'p',
						null,
						`Image ${index + 1}`
					),

					el(
						MediaUpload,
						{
							onSelect: (media) => {
								if(media) {
									tmpImages[index].ImageId = media.id.toString();
									tmpImages[index].ImageURL = ( media.sizes.large !== undefined ? media.sizes.large.url : media.url );
									setAttributes({ images: JSON.stringify( tmpImages ) });
								}
							},
							type: 'image',
							render: ( obj ) => {
								return el(
	
									Button,
									{
										className: 'button',
										onClick: obj.open,
										style: { marginRight: '5px' },
									},
									'Browse...'

								);
							}
						}
					),

					el(
						Button, {
							className: 'button',
							onClick: () => {
								tmpImages.splice(index, 1);
								setAttributes({ images: JSON.stringify( tmpImages ) });
							}
						},
						'Remove Image'
					),
				)
			)
		});

		return tmpObj;
	}
}(
	window.wp
) );
