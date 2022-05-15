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
  const blockName = "card-group";

  registerBlockType("wpboiler-core/card-group", {
    apiVersion: 2,
    title: __("Card Group", `${blockName}`),
    description: __(
      "Displays a group of cards. Useful for displaying snippets of information",
      `${blockName}`
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
      mediaid: {
        type: "number",
        default: "",
      },
      mediaurl: {
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
        mediaid,
        mediaurl,
        title,
        pretitle,
        introduction,
      } = attributes;

      const onChangeMarginSelect = (value) =>
        setAttributes({ marginselect: value });

      const onSelectImage = (media) =>
        setAttributes({
          mediaid: media.id,
          mediaurl: media.url,
        });

      return el(
        "div",
        useBlockProps(attributes),

        // START .titleArea
        el(
          "div",
          { className: `block__titleArea` },

          // START .titleArea--name
          el(
            "div",
            {
              className: `block__titleArea--name`,
            },
            el("p", {}, __("Card Group", `${blockName}`))
          )
          // END .titleArea--name
        ),
        // END .titleArea

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
              value: mediaid,
              render: (obj) => {
                return el(
                  Button,
                  {
                    className: "components-button is-primary",
                    onClick: obj.open,
                  },
                  !mediaid
                    ? __("Upload Image", `${blockName}`)
                    : __("Replace Image", `${blockName}`)
                );
              },
            }),

            mediaid
              ? el(
                  Button,
                  {
                    className: "components-button is-tertiary",
                    style: { marginLeft: "5px" },
                    onClick: () =>
                      setAttributes({
                        mediaid: "",
                        mediaurl: "",
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
          { className: `${blockName}__preview` },

          el(
            "div",
            { className: `${blockName}__container` },

            el(
              "div",
              { className: `${blockName}__content` },

              mediaurl
                ? el(
                    "div",
                    { className: `${blockName}__container--media` },

                    el(
                      "picture",
                      {},

                      el("img", {
                        src: mediaurl,
                      })
                    )
                  )
                : "",

              el(
                "div",
                { className: `${blockName}__container--title` },

                el(RichText, {
                  tagName: "h3",
                  placeholder: "Add a pre-title here...",
                  className: `${blockName}__heading ${blockName}__heading--pre`,
                  value: pretitle ? pretitle : "",
                  onChange: (value) => setAttributes({ pretitle: value }),
                }),

                el(RichText, {
                  tagName: "h2",
                  placeholder: "Add a title here...",
                  className: `${blockName}__heading ${blockName}__heading--title`,
                  value: title ? title : "",
                  onChange: (value) => setAttributes({ title: value }),
                }),

                el(RichText, {
                  tagName: "p",
                  placeholder: "Enter introduction text here...",
                  className: `${blockName}__introduction`,
                  value: introduction ? introduction : "",
                  onChange: (value) => setAttributes({ introduction: value }),
                })
              ),

              el(
                "div",
                { className: `${blockName}__container--text` },

                el(InnerBlocks, {
                  allowedBlocks: allowedBlocks,
                })
              )
            )
          )
        )
        // PREVIEW AREA END
      );
    },

    save: function () {
      return el(InnerBlocks.Content, {});
    },
  });
})(window.wp);
