(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { RadioControl, PanelBody, Button } = wp.components;
  const {
    useBlockProps,
    RichText,
    InspectorControls,
    InnerBlocks,
    MediaUpload,
  } = wp.blockEditor;
  const allowedBlocks = ["wpboiler-core/card-group-item"];

  registerBlockType("wpboiler-core/card-group", {
    apiVersion: 2,
    title: __("Card Group", "card-group"),
    description: __(
      "Displays a group of cards. Useful for displaying snippets of information",
      "card-group"
    ),
    category: "design",
    icon: "columns",
    supports: {
      html: false,
    },
    attributes: {
      marginselect: {
        type: "string",
        default: "margins__none",
      },
      mediaID: {
        type: "number",
      },
      mediaURL: {
        type: "string",
        source: "attribute",
        selector: "img.cardgroup__background",
        attribute: "src",
      },
      mediaAlt: {
        type: 'string',
        source: 'attribute',
        selector: 'img.cardgroup__background',
        attribute: 'alt'
      },
      mediaWidth: {
        type: 'number',
        source: 'attribute',
        selector: 'img.cardgroup__background',
        attribute: 'width',
      },
      mediaHeight: {
        type: 'number',
        source: 'attribute',
        selector: 'img.cardgroup__background',
        attribute: 'height',
      },
      title: {
        type: "string",
        source: "text",
        selector: "h2.cardgroup__heading--title",
        default: "",
      },
      pretitle: {
        type: "string",
        source: "text",
        selector: "h3.cardgroup__heading--pre",
        default: "",
      },
      introduction: {
        type: "string",
        source: "text",
        selector: "p.cardgroup__introduction",
        default: "",
      },
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { 
        marginselect, 
        mediaID, 
        mediaURL, 
        mediaHeight,
        mediaWidth,
        mediaAlt,
        title, 
        pretitle, 
        introduction 
      } = attributes;

      const onChangeMarginSelect = (value) =>
        setAttributes({ marginselect: value });

      const onSelectImage = media => setAttributes({ 
        mediaID: media.id, 
        mediaURL: (media.sizes.cta ? media.sizes.cta.url : media.url),
        mediaAlt: media.alt,
        mediaWidth: (media.sizes.cta ? media.sizes.cta.width : media.width),
        mediaHeight: (media.sizes.cta ? media.sizes.cta.height : media.height),
      });

      return el(
        "div",
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

          // IMAGE UPLOAD BEGIN
          el(
            PanelBody,
            {
              title: "Background Image",
            },

            el(MediaUpload, {
              onSelect: onSelectImage,
              allowedTypes: "image",
              value: mediaID,
              render: (obj) => {
                return el(
                  Button,
                  {
                    className: "components-button is-primary",
                    onClick: obj.open,
                  },
                  !mediaID
                    ? __("Upload Image", "card-group")
                    : __("Replace Image", "card-group")
                );
              },
            }),

            mediaID
              ? el(
                  Button,
                  {
                    className: "components-button is-tertiary",
                    style: { marginLeft: "5px" },
                    onClick: () => setAttributes({ mediaID: "", mediaURL: "" }),
                  },
                  "Remove Image"
                )
              : ""
          )
          // IMAGE UPLOAD END
        ),
        // INSPECTOR CONTROL END

        // PREVIEW AREA BEGIN
        el(
          "div",
          { className: "cardgroup__container" },

          el(
            "div",
            { className: "cardgroup__container--title" },
  
            el(RichText, {
              tagName: "h3",
              placeholder: "Add a pre-title here...",
              className: "cardgroup__heading cardgroup__heading--pre",
              value: pretitle ? pretitle : "",
              onChange: (value) => setAttributes({ pretitle: value }),
            }),
  
            el(RichText, {
              tagName: "h2",
              placeholder: "Add a title here...",
              className: "cardgroup__heading cardgroup__heading--title",
              value: title ? title : "",
              onChange: (value) => setAttributes({ title: value }),
            }),
  
            el(RichText, {
              tagName: "p",
              placeholder: "Enter introduction text here...",
              className: "cardgroup__introduction",
              value: introduction ? introduction : "",
              onChange: (value) => setAttributes({ introduction: value }),
            })
          ),
  
          el(
            "div",
            { className: "cardgroup__container--content" },
  
            el(InnerBlocks, {
              allowedBlocks: allowedBlocks,
            })
          ),
        ),
        

        mediaURL
          ? el(
              "div",
              { className: "cardgroup__container--media" },

              el("img", {
                className: "cardgroup__background",
                src: mediaURL,
                loading: 'lazy',
                width: mediaWidth,
                height: mediaHeight,
                alt: mediaAlt,
              })
            )
          : ""
        // PREVIEW AREA END
      );
    },

    save: function (props) {
      const { attributes } = props;
      const { 
        marginselect, 
        pretitle, 
        title, 
        mediaURL, 
        mediaAlt,
        mediaHeight,
        mediaWidth,
        introduction 
      } = attributes;

      return el(
        "section",
      //   useBlockProps.save(),
        { className: `cardgroup ${marginselect}` },

        el(
          "div",
          { className: "cardgroup__container" },

          el(
            "div",
            { className: "cardgroup__container--title" },
  
            el(RichText.Content, {
              tagName: "h3",
              className: "cardgroup__heading cardgroup__heading--pre",
              value: pretitle,
            }),
  
            el(RichText.Content, {
              tagName: "h2",
              className: "cardgroup__heading cardgroup__heading--title",
              value: title,
            }),
  
            el(RichText.Content, {
              tagName: "p",
              className: "cardgroup__introduction",
              value: introduction,
            })
          ),
  
          el(
            "div",
            { className: "cardgroup__container--content" },
  
            el(InnerBlocks.Content, {})
          ),
        ),

        

        mediaURL
          ? el(
              "div",
              { className: "cardgroup__container--media" },

              el("img", {
                className: "cardgroup__background",
                src: mediaURL,
                loading: 'lazy',
                width: mediaWidth,
                height: mediaHeight,
                alt: mediaAlt,
              })
            )
          : ""
      );
    },
  });
})(window.wp);