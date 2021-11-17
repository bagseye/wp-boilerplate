(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { RadioControl, ToggleControl, PanelBody, Button } = wp.components;
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
      marginsdouble: {
        type: "string",
        default: "",
      },
      mediaID: {
        type: "number",
        default: "",
      },
      mediaURL: {
        type: "string",
        default: "",
      },
      title: {
        type: "string",
        default: "",
      },
      pretitle: {
        type: "string",
        default: "",
      },
      introduction: {
        type: "string",
        default: "",
      },
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const {
        marginselect,
        marginsdouble,
        mediaID,
        mediaURL,
        title,
        pretitle,
        introduction,
      } = attributes;

      const onChangeMarginSelect = (value) =>
        setAttributes({ marginselect: value });

      const onSelectImage = (media) =>
        setAttributes({
          mediaID: media.id,
          mediaURL: media.url,
        });

      return el(
        "div",
        useBlockProps(attributes),

        el("p", { className: "block__title" }, __("Card Group", "card-group")),

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
            }),

            marginselect !== "margins__none" &&
              el(ToggleControl, {
                label: "Double Margins?",
                checked: marginsdouble,
                onChange: () =>
                  setAttributes({
                    marginsdouble: marginsdouble ? "" : "margins__double",
                  }),
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
                    onClick: () =>
                      setAttributes({
                        mediaID: "",
                        mediaURL: "",
                      }),
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
          )
        ),

        mediaURL
          ? el(
              "div",
              { className: "cardgroup__container--media" },

              el(
                "picture",
                {},

                el("img", {
                  className: `cardgroup__background wp-image-${mediaID}`,
                  src: mediaURL,
                })
              )
            )
          : ""
        // PREVIEW AREA END
      );
    },

    save: function () {
      return el(InnerBlocks.Content, {});
    },
  });
})(window.wp);
