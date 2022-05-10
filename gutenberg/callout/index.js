(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RadioControl, ToggleControl, PanelBody, Button } = wp.components;
  const { useBlockProps, InspectorControls, InnerBlocks, MediaUpload } =
    wp.blockEditor;
  const allowedBlocks = ["wpboiler-core/callout-item"];

  registerBlockType("wpboiler-core/callout", {
    apiVersion: 2,
    title: __("Callout", "callout"),
    description: __("Displays an image with up to 3 detail areas", "callout"),
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
        el("p", { className: "block__title" }, __("Callout", "callout")),

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
          { className: "callout" },

          el(
            "div",
            { className: "callout__container" },

            mediaurl
              ? el(
                  "div",
                  { className: "callout__media" },

                  el(
                    "picture",
                    {},

                    el("img", {
                      className: `callout__background wp-image-${mediaid}`,
                      src: mediaurl,
                    })
                  )
                )
              : "",

            el(
              "div",
              { className: "callout__content" },

              el(InnerBlocks, {
                allowedBlocks: allowedBlocks,
              })
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
