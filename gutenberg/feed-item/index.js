( function( wp ) {

	var registerBlockType = wp.blocks.registerBlockType;
	var el = wp.element.createElement;
	var __ = wp.i18n.__;
	var useBlockProps = wp.blockEditor.useBlockProps;
	var ComboboxControl = wp.components.ComboboxControl;

	registerBlockType( 'wpboiler-core/feed-item', {

		apiVersion: 2,
		title: __(
			'Feed Item',
			'feed-item'
		),
		description: __(
			'An individual post item',
			'feed-item'
		),
		category: 'widgets',
		icon: 'pressthis',
		supports: {
			html: false,
		},
		attributes: {
			postID: {
				type: 'number',
			},
		},
		parent: [ 'wpboiler-core/feed' ],

		getEditWrapperProps(props) {
			return {
				'data-size' : props.Size,
			};
		},

		edit: function(props) {
			const { attributes, setAttributes } = props;
			const { postID } = attributes;

			const decodeHtml = function(html) {
				var txt = document.createElement("textarea");
				txt.innerHTML = html;
				return txt.value;
			}

			let datalistOptions = [];
			wpboilerPosts.forEach( elm => {
				datalistOptions.push({
					value: elm.ID,
					label: decodeHtml(elm.Title),
				});
			});

			return el(
				'div',
				useBlockProps(),

				el(
					'p',
					{ className: 'block__title' },
					__( 'Feed Item', 'feed-item' )
				),


				el(
					'article',
					{ className:  'feed__item'},

					el(
						'div',
						{ className: 'feed__item--select' },

						el(
							ComboboxControl, 
							{
								onChange: val => setAttributes({ postID: val }),
								onInputChange: inputValue => {
									return setFilteredOptions(
										datalistOptions.filter(option => {
											return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
										})
									)
								},
								label: 'Select a post from the list...',
								hideLabelFromVision: false,
								autoComplete: 'off',
								className: 'feed__item--selectlink',
								options: datalistOptions,
								value: ((postID) ? postID : ''),
							}
						),
					),
				),
			);
		},


		save: function() {
			return null;
		},
	} );
}(
	window.wp
) );
