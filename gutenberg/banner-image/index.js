(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RadioControl, ToggleControl, PanelBody, Button } = wp.components;
  const { useBlockProps, InspectorControls, MediaUpload } = wp.blockEditor;

  registerBlockType("wpboiler-core/banner-image", {
    apiVersion: 2,
    title: __("Banner Image", "banner-image"),
    description: __("Displays a full-width image", "banner-image"),
    category: "design",
    icon: "cover-image",
    supports: {
      // Removes support for an HTML mode.
      html: false,
    },
    attributes: {
      mediaID: {
        type: "number",
        default: "",
      },
      mediaURL: {
        type: "string",
        default: "",
      },
      marginselect: {
        type: "string",
        default: "margins__none",
      },
      marginsdouble: {
        type: "string",
        default: "",
      },
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { marginselect, marginsdouble, mediaID, mediaURL } = attributes;
      return el(
        "div",
        useBlockProps(attributes),

        el(
          "p",
          { className: "block__title" },
          __("Banner Image", "banner-image")
        ),

        // INSPECTOR CONTROLS
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
              }),

            el(
              PanelBody,
              {
                title: "Background Image",
              },

              el(MediaUpload, {
                onSelect: (media) => {
                  setAttributes({
                    mediaID: media.id,
                    mediaURL: media.url,
                  });
                },
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
                      ? __("Upload Image", "banner-image")
                      : __("Replace Image", "banner-image")
                  );
                },
              }),

              mediaID &&
                el(
                  Button,
                  {
                    className: "components-button is-tertiary",
                    style: { marginLeft: "5px" },
                    onClick: () => setAttributes({ mediaID: "", mediaURL: "" }),
                  },
                  "Remove Image"
                )
            )
          )
        ),

        // INSPECTOR CONTROLS

        el(
          "div",
          { className: "bannerimage" },

          el(
            "div",
            { className: "bannerimage__media" },

            mediaID &&
              el("img", {
                src: mediaURL,
              })
          )
        )
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
