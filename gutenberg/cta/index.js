(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { RadioControl, PanelBody, ToggleControl, Button } = wp.components;
  const {
    useBlockProps,
    RichText,
    InspectorControls,
    InnerBlocks,
    MediaUpload,
  } = wp.blockEditor;
  const allowedBlocks = ["core/paragraph", "core/button"];
  const blockName = "cta";

  registerBlockType("wpboiler-core/cta", {
    apiVersion: 2,
    title: __("Call to Action", `${blockName}`),
    description: __(
      "Displays text and media to guide users to other areas of the site and grab their attention",
      `${blockName}`
    ),
    category: "design",
    icon: "megaphone",
    supports: {
      html: false,
    },
    attributes: {
      category: {
        type: "string",
        default: "",
      },
      heading: {
        type: "string",
        default: "",
      },
      subheading: {
        type: "string",
        default: "",
      },
      marginselect: {
        type: "string",
        default: "margins__none",
      },
      orientationselect: {
        type: "string",
        default: "cta__text--left",
      },
      margindouble: {
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
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const {
        category,
        heading,
        subheading,
        marginselect,
        margindouble,
        orientationselect,
        mediaid,
        mediaurl,
      } = attributes;

      const onChangeMarginSelect = (value) =>
        setAttributes({ marginselect: value });
      const onChangeOrientationSelect = (value) =>
        setAttributes({ orientationselect: value });
      const onSelectImage = (media) => {
        setAttributes({
          mediaid: media.id,
          mediaurl: media.url,
        });
      };

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
            el("p", {}, __("CTA", `${blockName}`))
          )
          // END .titleArea--name
        ),
        // END .titleArea

        // INSPECTOR CONTROL BEGIN
        el(
          InspectorControls,
          null,

          // BLOCK MARGIN CONTROLS BEGIN
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
                checked: margindouble,
                onChange: () =>
                  setAttributes({
                    margindouble: margindouble ? "" : "margins__double",
                  }),
              })
          ),

          // BLOCK MARGIN CONTROLS END

          // BLOCK ORIENTATION CONTROL BEGIN
          el(
            PanelBody,
            {
              title: "Text Orientation",
            },

            el(RadioControl, {
              help: "Aligns the text left, right, or center.",
              selected: orientationselect,
              options: [
                {
                  label: "Text Left",
                  value: "cta__text--left",
                },
                {
                  label: "Text Right",
                  value: "cta__text--right",
                },
                {
                  label: "Text Center",
                  value: "cta__text--center",
                },
              ],
              onChange: onChangeOrientationSelect,
            })
          ),
          // BLOCK ORIENTATION CONTROL END

          // IMAGE UPLOAD BEGINS
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
          // IMAGE UPLOAD ENDS
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

              el(
                "div",
                { className: `${blockName}__column` },

                el(RichText, {
                  tagName: "h3",
                  placeholder: "Enter a category here...",
                  className: `${blockName}__heading ${blockName}__heading--category`,
                  value: category ? category : "",
                  onChange: (value) => setAttributes({ category: value }),
                }),

                el(RichText, {
                  tagName: "h2",
                  placeholder: "Enter a heading here...",
                  className: `${blockName}__heading ${blockName}__heading--main`,
                  value: heading ? heading : "",
                  onChange: (value) => setAttributes({ heading: value }),
                }),

                el(RichText, {
                  tagName: "h3",
                  placeholder: "Enter a subtitle here...",
                  className: `${blockName}__heading ${blockName}__heading--sub`,
                  value: subheading ? subheading : "",
                  onChange: (value) => setAttributes({ subheading: value }),
                }),

                el(InnerBlocks, {
                  allowedBlocks: allowedBlocks,
                })
              )
            ),

            mediaurl &&
              el(
                "div",
                {
                  className: `${blockName}__container--media`,
                },

                el("img", {
                  src: mediaurl,
                })
              )
          )
        )
        // PREVIEW AREA END

        // PREVIEW AREA STARTS
        // el(
        //   "div",
        //   { className: "cta__container" },

        //   el(
        //     "div",
        //     { className: "cta__column" },

        //     el(RichText, {
        //       tagName: "h3",
        //       placeholder: "Enter a category here...",
        //       className: "cta__heading cta__heading--category",
        //       value: category ? category : "",
        //       onChange: (value) => setAttributes({ category: value }),
        //     }),

        //     el(RichText, {
        //       tagName: "h2",
        //       placeholder: "Enter a heading here...",
        //       className: "cta__heading cta__heading--main",
        //       value: heading ? heading : "",
        //       onChange: (value) => setAttributes({ heading: value }),
        //     }),

        //     el(RichText, {
        //       tagName: "h3",
        //       placeholder: "Enter a subtitle here...",
        //       className: "cta__heading cta__heading--sub",
        //       value: subheading ? subheading : "",
        //       onChange: (value) => setAttributes({ subheading: value }),
        //     }),

        //     el(InnerBlocks, {
        //       allowedBlocks: allowedBlocks,
        //     })
        //   )
        // ),

        // mediaurl &&
        //   el(
        //     "div",
        //     { className: "cta__container--media" },

        //     el("img", {
        //       src: mediaurl,
        //     })
        //   )

        // PREVIEW AREA ENDS
      );
    },

    save: function () {
      return el(InnerBlocks.Content, {});
    },
  });
})(window.wp);
