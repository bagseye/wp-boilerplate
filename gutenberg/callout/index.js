(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RadioControl, ToggleControl, PanelBody, Button } = wp.components;
  const { useBlockProps, InspectorControls, InnerBlocks, MediaUpload } =
    wp.blockEditor;
  const allowedBlocks = ["wpboiler-core/callout-item"];
  const blockName = "callout";

  registerBlockType("wpboiler-core/callout", {
    apiVersion: 2,
    title: __("Callout", `${blockName}`),
    description: __(
      "Displays an image with up to 3 detail areas",
      `${blockName}`
    ),
    category: "design",
    icon: "megaphone",
    supports: {
      // Removes support for an HTML mode.
      html: false,
      alignWide: false,
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
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { marginselect, marginsdouble, mediaid, mediaurl } = attributes;

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
            el("p", {}, __("Callout", `${blockName}`))
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
              onChange: (value) => setAttributes({ marginselect: value }),
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
                    ? __("Upload Image", "card-group")
                    : __("Replace Image", "card-group")
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
                    { className: `${blockName}__media` },

                    el(
                      "picture",
                      {},

                      el("img", {
                        className: `${blockName}__background wp-image-${mediaid}`,
                        src: mediaurl,
                      })
                    )
                  )
                : "",

              el(
                "div",
                { className: `${blockName}__text` },

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
