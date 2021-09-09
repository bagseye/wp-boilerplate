( function( wp ) {

	var registerBlockType = wp.blocks.registerBlockType;
	var el = wp.element.createElement;
	var __ = wp.i18n.__;

	const { RadioControl, PanelBody } = wp.components;
	const {
		useBlockProps,
		InspectorControls,
		InnerBlocks,
	  } = wp.blockEditor;
	const allowedBlocks = ["wpboiler-core/promo-group-item"];

	registerBlockType( 'wpboiler-core/promo-group', {
		apiVersion: 2,
		title: __(
			'Promo Card Group',
			'promo-group'
		),
		description: __(
			'Displays multiple cards, used for promoting content and directing users. Has two layout styles - stacked and inline',
			'promo-group'
		),
		category: 'design',
		icon: 'grid-view',
		supports: {
			html: false,
		},
		attributes: {
			marginselect: {
			  	type: "string",
			  	default: "margins__none",
			},
		},

		edit: function(props) {
			const { attributes, setAttributes } = props;
			const { 
			  	marginselect,
			} = attributes;

			const onChangeMarginSelect = value => setAttributes({ marginselect: value });

			return el(
				'section',
				useBlockProps(attributes),

				// INSPECTOR CONTROL BEGIN
				el(
					InspectorControls,
					null,
		  
					el(
					  PanelBody,
					  {
						title: "Margins",
					  },
		  
					  el(RadioControl, {
						selected: marginselect,
						options: [
						  {
							label: "No Margins",
							value: "margins__none",
						  },
						  {
							label: "Top & Bottom Margins",
							value: "margins__topBottom",
						  },
						  {
							label: "Top Margin Only",
							value: "margins__top",
						  },
						  {
							label: "Bottom Margin Only",
							value: "margins__bottom",
						  },
						],
						onChange: onChangeMarginSelect,
					  })
					),
				),
				// INSPECTOR CONTROL END

				// PREVIEW AREA BEGIN
				el(
					"div",
					{ className: "promogroup__container" },
			
					el(
					  	"div",
					  	{ className: "promogroup__container--content" },
			
						el(InnerBlocks, {
							allowedBlocks: allowedBlocks,
						})
					),
				),
				// PREVIEW AREA END

			);
		},

		save: function(props) {
			const { attributes } = props;
			const { 
				marginselect, 
			} = attributes;

			return el(
				'section',
				{ className: `promogroup ${marginselect}` },
				
				el(
					"div",
					{ className: "promogroup__container" },
			
					el(
					  	"div",
					  	{ className: "promogroup__container--content" },
			
					  	el(InnerBlocks.Content, {})
					),
				),
			);
		},
	} );
}(
	window.wp
) );